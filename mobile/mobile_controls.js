(function(){
  // Apply full-cover splash on mobile too
  $(function(){
    var $stage = $('#stage');
    // Use contain to ensure menu remains visible on tall images
    $stage.css({
      backgroundImage: "url('../art/quantum_splash.png')",
      backgroundSize: 'contain', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat',
      backgroundColor: '#000'
    });
    // Ensure menu shows
    $('#menu').show();
    // Clear on Start click
    $('#menu-start').on('click touchstart', function(){
      $stage.css({ backgroundImage: 'none', backgroundSize: '', backgroundPosition: '', backgroundRepeat: '' });
    });
  });

  // Touch UI overlay
  var html = '\n<div id="touch-controls">\n'
    +'<div id="btn-up" class="touch-btn"></div>\n'
    +'<div id="btn-left" class="touch-btn"></div>\n'
    +'<div id="btn-right" class="touch-btn"></div>\n'
    +'<div id="btn-down" class="touch-btn"></div>\n'
    +'<div id="btn-pull" class="touch-btn"></div>\n'
    +'<div id="btn-push" class="touch-btn"></div>\n'
    +'<div id="btn-decoy" class="touch-btn"></div>\n'
    +'</div>';
  $('body').append(html);

  function sendKey(code, type){
    var e = $.Event(type, { keyCode: code, which: code });
    // dispatch to Crafty canvas bindings
    $('#stage').trigger(e);
    $(document).trigger(e);
  }

  function bindBtn(id, code){
    var $b = $(id);
    $b.on('touchstart', function(ev){ ev.preventDefault(); sendKey(code, 'keydown'); });
    $b.on('touchend touchcancel', function(ev){ ev.preventDefault(); sendKey(code, 'keyup'); });
  }

  bindBtn('#btn-up', Crafty.keys.UP_ARROW);
  bindBtn('#btn-down', Crafty.keys.DOWN_ARROW);
  bindBtn('#btn-left', Crafty.keys.LEFT_ARROW);
  bindBtn('#btn-right', Crafty.keys.RIGHT_ARROW);
  bindBtn('#btn-pull', 90); // Z
  bindBtn('#btn-push', 81); // Q
  bindBtn('#btn-decoy', 87); // W
})();
