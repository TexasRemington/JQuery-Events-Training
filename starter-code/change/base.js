console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  $('#reset').on('click', function(){
    $('#left').val('');
    $('#right').val('');
    $('#total').val('');
  });
  var random = 1 + Math.floor(Math.random() < 100);
  $('.random').val(random);
});
