$(document).ready(function() {
  $("button").on("click", colorBrush);
  //input.val works for both click and return key for steps 1 and 2
  function colorBrush(e) {
    e.preventDefault();
    var brushColor = $("input").val()
    $(".brush").css("background",  brushColor);
  }
  //creating 20 of the square div class, step 3
  for (var i = 0; i <= 20; i++) {
    var square = "<div class='square'></div>"
    $("body").append(square)
  }

  $(".square").on("click", colorSquare)
  //steps 4 and 5, storing the input string in a variable to be used in the line 17 background change
  function colorSquare() {
    var inputColor = $("input").val();
    $(this).css("background", inputColor);
  }

});
