/* Quantum learning layer: concept cloud + book */
(function(){
  var Learning = function(){
    // Build tiered pools once
    var all = (window.QuantumConcepts||[]).slice();
    var pools = (window.QuantumTiering && window.QuantumTiering.build) ? window.QuantumTiering.build(all) : {basics:all, intermediate:[], advanced:[], remaining:[]};
    // Merge remaining into basics as fallback
    pools.basics = (pools.basics||[]).concat(pools.remaining||[]);
    this.pools = pools;
    this.levelIndex = 0; // 0: basics, 1: intermediate, 2: advanced
    this.sequence = [];
    // Restore learned concepts from localStorage if available
    var saved = [];
    try {
      var raw = localStorage.getItem('qg_book');
      if (raw) saved = JSON.parse(raw);
    } catch(e) { saved = []; }
    this.learned = Array.isArray(saved) ? saved : [];
    this.page = Math.max(0, this.learned.length - 1);
  };
  Learning.prototype.nextConcept = function(){
    // Determine current pool based on levelIndex
    var poolName = this.levelIndex === 0 ? 'basics' : (this.levelIndex === 1 ? 'intermediate' : 'advanced');
    var pool = this.pools[poolName] || [];
    // Index within current pool
    var idx = this.learned.filter(function(e){return e && e._tier === poolName;}).length;
    var entry = pool[idx];
    if (!entry) {
      // If pool exhausted, try next tier; else fallback to any remaining
      if (this.levelIndex < 2) {
        this.levelIndex += 1;
        return this.nextConcept();
      }
      var remaining = [];
      var seen = new Set(this.learned.map(function(e){return (e && (e.title||e)).toLowerCase();}));
      ['basics','intermediate','advanced'].forEach(function(n){
        (this.pools[n]||[]).forEach(function(e){
          var k = String(e.title||e).toLowerCase();
          if (!seen.has(k)) remaining.push(e);
        });
      }, this);
      entry = remaining[0];
      if (!entry) return null;
    }
    // annotate tier for stats
    if (typeof entry === 'object') entry._tier = poolName;
    return entry;
  };
  Learning.prototype.addLearned = function(entry){
    // Deduplicate by title
    var title = (entry && entry.title) ? entry.title : (typeof entry === 'string' ? entry : 'Concept');
    var key = String(title||'').toLowerCase();
    var exists = this.learned.some(function(e){ return String((e && e.title) ? e.title : e).toLowerCase() === key; });
    if (!exists){ this.learned.push({title: title, body: (entry && entry.body) ? entry.body : ''}); }
    this.page = this.learned.length-1;
    try { localStorage.setItem('qg_book', JSON.stringify(this.learned)); } catch(e) {}
  };
  Learning.prototype.toggleBook = function(){
    var self=this;
    var open = $('#dialog-book').is(':visible');
    if(open){
      $('#dialog-book').dialog('close');
      // resume game and music if we paused it
      window.GamePaused = false;
      try {
        if (window.MusicWasPlayingOnBookOpen && !window.MusicUserMuted && _Globals.conf.get('music')) {
          Crafty.audio.play('music', -1, _Globals.conf.get('music_vol'));
        }
      } catch(e) {}
      window.MusicWasPlayingOnBookOpen = false;
      return;
    }
    // open
    $('#dialog-book').dialog({
      resizable:false, width: 760, height: 520, modal: false,
      title: 'Quantum Book',
      close: function(){ 
        window.GamePaused = false; 
        try {
          if (window.MusicWasPlayingOnBookOpen && !window.MusicUserMuted && _Globals.conf.get('music')) {
            Crafty.audio.play('music', -1, _Globals.conf.get('music_vol'));
          }
        } catch(e) {}
        window.MusicWasPlayingOnBookOpen = false;
      }
    });
    $('#book-prev').off('click').on('click', function(){ self.showPage(Math.max(0, self.page-1)); });
    $('#book-next').off('click').on('click', function(){ self.showPage(Math.min(self.learned.length-1, self.page+1)); });
    this.showPage(this.page);
    // pause game while reading and pause music if playing
    window.GamePaused = true;
    try {
      // record and stop music if currently playing (user not muted and music enabled)
      window.MusicWasPlayingOnBookOpen = (!window.MusicUserMuted) && _Globals.conf.get('music');
      if (window.MusicWasPlayingOnBookOpen) {
        Crafty.audio.stop('music');
      }
    } catch(e) {}
  };
  Learning.prototype.showPage = function(i){
    var $page = $('#book-page');
    if(this.learned.length===0){
      $page.empty().append(
        $('<div>').addClass('book-title').text('Your Quantum Book is empty'),
        $('<div>').addClass('book-body').text('Pluck carrots to learn concepts. Each concept is saved here for later reading.')
      );
      $('#book-page-num').text('0/0');
      return;
    }
    this.page = Math.max(0, Math.min(i, this.learned.length-1));
    var entry = this.learned[this.page];
    var title = (entry && entry.title) ? entry.title : (typeof entry === 'string' ? entry : 'Concept');
    var body = (entry && entry.body) ? entry.body : '';
    $page.empty().append(
      $('<div>').addClass('book-title').text(title),
      $('<div>').addClass('book-body').text(body)
    );
    $('#book-page-num').text((this.page+1)+'/'+this.learned.length);
  };

  var instance = new Learning();
  window.QuantumLearning = instance;
  // Global game pause + concept stats
  window.GamePaused = false;
  window.ConceptStats = window.ConceptStats || {player:0, enemies:0};
  // Initialize player concept count from restored book
  try { window.ConceptStats.player = instance.learned.length|0; } catch(e) {}
  window.MusicWasPlayingOnBookOpen = false;

  // Level goals aligned with tiers
  window.QuantumLevels = window.QuantumLevels || [5, 12, 20];
  window.QuantumLevelIndex = 0;

  // UI helpers
  function fmt(entry){
    if(!entry) return '';
    if(typeof entry === 'string') return entry;
    if(entry.title && entry.body){ return entry.title; }
    if(entry.title) return entry.title;
    return String(entry);
  }
  function showCloud(entry){
    var $c = $('#concept-cloud');
    $c.stop(true,true);
    $c.text(fmt(entry));
    $c.show().css('opacity', 1);
    $c.delay(1600).fadeOut(600);
  }

  // Hooks: when a carrot is collected, show cloud + save to book
  Crafty.bind('ConceptLearned', function(entry){
    if(!entry) return;
    instance.addLearned(entry);
    try { window.ConceptStats.player += 1; } catch(e) {}
    Crafty.trigger('UpdateStats');

    // Level-up check
    try {
      var lvl = window.QuantumLevelIndex|0;
      var goals = window.QuantumLevels||[];
      if (lvl < goals.length && instance.learned.length >= goals[lvl]){
        window.QuantumLevelIndex = lvl+1;
        // Advance learning tier when leveling up
        instance.levelIndex = Math.min(2, instance.levelIndex + 1);
        Crafty.trigger('LevelUp', {level: window.QuantumLevelIndex});
      }
    } catch(e){ }

    showCloud(entry);
  });

  // Global key for opening the book (P)
  $(document).on('keydown', function(e){
    if(e.key === 'p' || e.key === 'P'){
      instance.toggleBook();
    }
  });
})();
