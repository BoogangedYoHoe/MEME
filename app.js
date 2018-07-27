console.log('hello world');

// Opens jQuery
$(document).ready(function(){
  var $jumpscare = $('#jumpscare');
  var $jumpaudio = $('#jump-audio')[0]; // [0] for selcting between multiple sources: [0]=first source, [1]=second source
  $jumpscare.hide();

  $('#jump-button').on('click', function(){
    $jumpscare.show();
    $jumpaudio.play();
    setTimeout(function(){ $jumpscare.hide(); } , 2000); // 2000 = 2s
  })

  // Hide sections on page load
  $('#drawings').hide();
  $('#videos').hide();

  // Menu Controls
  $('#menu-memes').click(function(){
    console.log('memes');
    $('#memes').show();
    $('#drawings').hide();
    $('#videos').hide();
  })
  $('#menu-drawings').click(function(){
    console.log('drawings');
    $('#memes').hide();
    $('#drawings').show();
    $('#videos').hide();
  })
  $('#menu-videos').click(function(){
    console.log('videos');
    $('#memes').hide();
    $('#drawings').hide();
    $('#videos').show();
  })

}); // closes jQuery
