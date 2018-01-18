$(document).ready(function () {
  $('#newTodoForm').on('submit', handleSubmit)
  $(document).on('click', '#todos li', toggleTodo)
  $(document).on('click', 'a.delete-todo', deleteTodo)
})

function deleteTodo(e) {
  e.preventDefault()
  e.stopPropagation()

  var a = $(this)
  a.parent('li').remove()
}

function toggleTodo(e) {
  e.preventDefault()

  var li = $(e.currentTarget)
  var completed = li.data('completed')
  li.toggleClass('completed')
  li.data('completed', !completed)
}

function handleSubmit(e) {
  e.preventDefault();

  if (newTodoIsValid()) {
    addTodo()
    $('#newTodoTask').val('')
  } else {
    showError()
  }
}

function showError() {
  alert('You need to enter a todo before it is created');
}

function addTodo() {
  // Create an <li>
  var li = $('<li></li>')

  // Add the text to the <li>
  var text = $('#newTodoTask').val()
  li.text(text)
  li.data('completed', false)

  // Add delete <a> to the <li>
  var a = $('<a></a>')
  a.attr('href', '#')
  a.text('Delete')
  a.addClass('delete-todo')
  li.append(a)

  // Add the <li> to the <ul>
  $('#todos').append(li)
}

function newTodoIsValid() {
  return $('#newTodoTask').val() !== ''
}
