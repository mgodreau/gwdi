$(document).ready(function () {
  $('a.delete-todo').on('click', deleteTodo)
  $('a.toggle-todo').on('click', toggleTodo)
  $('#theField').on('keyup', handleKeyup)
  // $('body').on('mouseover', changeBackgroundColor)
  $('form#theForm').on('submit', handleSubmit)
})

function handleSubmit(e) {
  e.preventDefault()
  var theText = $('#theField').val()
  if (theText === '') {
    alert('Hey you need to fill out the form')
  } else {
    alert(theText)
    $('#theField').val('')
  }
}

function changeBackgroundColor(event){
  console.log('here');
  var r = Math.random() * 255;
  r = Math.floor(r);
  var g = Math.random() * 255;
  g = Math.floor(g);
  var b = Math.random() * 255;
  b = Math.floor(b);
  var colorString = "rgb(" + r + "," + g + "," + b + ")"
  console.log(colorString);
  console.log($(this));
  $(this).css('background-color', colorString);

}
function handleMouseOver(e) {
  $('body').css('background-color', 'red')
  $('h1').text('foo')
}

function handleKeyup(e) {
  console.log(e.keyCode);
  var theText = $('#theField').val()
  $('#theHeading').text(theText)
}

function toggleTodo(e) {
  e.preventDefault()
  var link = $(e.currentTarget)
  link.parent('li').toggleClass('done')
}

function deleteTodo(event) {
  event.preventDefault()

  // var linkThatWasClicked = $(this)
  var linkThatWasClicked = $(event.currentTarget)
  console.log(linkThatWasClicked.text());
  linkThatWasClicked.text('I was clicked')
  linkThatWasClicked.parent('li').remove()
}
