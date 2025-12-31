/* Quantum learning layer: concept cloud + book */
(function(){
  var Learning = function(){
    this.concepts = (window.QuantumConcepts||[]).slice();
    this.learned = [];
    this.page = 0;
  };
  Learning.prototype.nextConcept = function(){
    if(this.learned.length >= this.concepts.length) return null;
    return this.concepts[this.learned.length];
  };
  Learning.prototype.addLearned = function(text){
    this.learned.push(text);
    this.page = this.learned.length-1;
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
  window.MusicWasPlayingOnBookOpen = false;

  // Simple level goals (number of concepts collected)
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
