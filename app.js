console.log('hello world');

// Opens jQuery
$(document).ready(function(){
  var $jumpscare = $('#jumpscare');
  var $jumpaudio = $('#jump-audio')[0]; // [0] for multiple sources
  $jumpscare.hide();

  // $("#bgmusic")[0].play();

  $('#jump-button').on('click', function(){
    $jumpscare.show();
    $jumpaudio.play();
    setTimeout(function(){ $jumpscare.hide(); } , 2000);
  })

}); // closes jQuery
