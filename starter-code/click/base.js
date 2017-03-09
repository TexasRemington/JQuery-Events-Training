console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  //var click = $('#imperatives').span();
  $('#imperatives span').on('click', function(){
    $('ul').append('<li>You clicked: '+$(this).text()+' at '+Date.now()+'</li>');

  });
//$('.parent').append('<p class="error">No Go</p>');

});
