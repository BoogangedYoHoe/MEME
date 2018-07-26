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
  $("button").click(function(){
      $("#div1").load("demo_test.txt", function(responseTxt, statusTxt, xhr){
          if(statusTxt == "success")
              alert("External content loaded successfully!");
          if(statusTxt == "error")
              alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
  });

}); // closes jQuery
