$(document).ready(function () {
  fetchTodos()
  $('#newTodo').on('submit', createTodo)
  // You have to set up the listener this way since the <a /> are added dynamically do the DOM
  $(document).on('click', 'a.delete-link', deleteTodo)
  $(document).on('click', '#todos li', toggleCompleted)
})

function toggleCompleted(e) {
  e.preventDefault()

  // Target <li /> that was clicked
  var li = $(e.currentTarget);

  // If the <li> has the class of .done, then it is already completed, we'll set this var to the opposite of that value, hence the !
  var completed = !li.hasClass('completed');

  $.ajax({
    url: li.find('a.delete-link').attr('href'),
    method: 'PUT',
    data: {
      completed: completed
    }
  }).done(function () {
    // The the <li> had a class of .done, it's now gone. If it didn't have said class, it's there now
    li.toggleClass('done')
  })
}

function deleteTodo(e) {
  // Stop link from visiting href
  e.preventDefault()
  // When clicking the delete link, the event will "ripple" to the <li> click event as well. This prevents that from happening
  e.stopPropagation()

  // find the link that was clicked
  var link = $(e.currentTarget)
  $.ajax({
    // Use the href from the link that was clicked as the path
    url: link.attr('href'),
    method: 'DELETE'
  }).done(function () {
    // Remove <li> from DOM once todo is successfully deleted from database
    link.parent('li').remove();
  })
}

function createTodo(e) {
  e.preventDefault()
  $.ajax({
    url: 'http://localhost:3000/todos',
    method: 'POST',
    data: {
      task: $('#task').val(),
      completed: false
    }
  }).done(function (data) {
    // Clear form and keep cursor in text field
    $('#task').val('').focus()

    // Add newly created todo to page
    addTodoToPage(data)
  })
}

function fetchTodos() {
  $.ajax({
    url: 'http://localhost:3000/todos'
  }).done(addTodosToPage)
}

function addTodosToPage(todos) {
  todos.forEach(addTodoToPage)
}

function addTodoToPage(todo) {
  var li = $('<li />')
  li.text(todo.task)
  if (todo.completed) {
    li.addClass('done');
  }

  var deleteLink = $('<a />');
  deleteLink.text('Delete');
  deleteLink.addClass('delete-link');
  deleteLink.attr('href', 'http://localhost:3000/todos/' + todo._id)
  li.append(deleteLink)

  $('#todos').append(li)
}
