function changeColor(e){
  e.preventDefault();
  var box = $('.brush');
  var color = $('input').val();
  $(box).css('background-color', color);
}

function changeSquare(){
  var color = $('input').val();
  $(this).css('background', color);
}

function makeDiv(n){
  for (var i = 0; i < n; i++) {
    var newDiv = $('<div class="square"></div>').on("mouseover", changeSquare);
    $('body').append(newDiv);
  }
}

$(document).ready(function(){

  $('button').on("click", changeColor);
  makeDiv(8000);
  $('.square').css({'height': '10px', 'width': '10px', 'margin': 0});

});
  
