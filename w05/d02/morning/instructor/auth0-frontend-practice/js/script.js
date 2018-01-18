var lock = new Auth0Lock(
  'hEbMPdgCeruBufyJJiTKCkomgagGSs0g',
  'trailerparkmedia.auth0.com',
  {
    auth: {
      params: {
        scope: 'openid email app_metadata'
      }
    }
  }
);

lock.on('authenticated', function (authResult) {
  console.log('authResult', authResult);
  localStorage.setItem('idToken', authResult.idToken)
  showProfile()
  loadTodos()
})

$(document).ready(function() {
  $('#btn-login').on('click', function (e) {
    e.preventDefault()
    lock.show()
  })

  $('#btn-logout').on('click', function (e) {
    e.preventDefault()
    logout()
  })

  $(document).on('click', '#todos li', toggleTodo)
  $(document).on('click', 'a.delete-link', deleteTodo)
  $('#newTodo').on('submit', function (data) {
    createTodo(data)
    $('#task').val('').focus()
  })

  if (isLoggedIn()) {
    loadTodos();
    showProfile()
  }
});

function createTodo(e) {
  e.preventDefault()
  console.log($('#task').val());
  $.ajax({
    url: 'http://localhost:3000/todos',
    method: 'POST',
    data: {
      task: $('#task').val(),
      completed: false
    },
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('idToken')
    }
  }).done(function (todo) {
    loadTodo(todo)
  }).fail(function (xhr, status, err) {
    console.log('xhr', xhr);
    console.log('status', status);
    console.log('err', err);
  })
}

function showProfile() {
  $('#btn-login').hide()
  $('#user-info').show()
  lock.getProfile(localStorage.getItem('idToken'), function (error, profile) {
    if (error) {
      logout()
    } else {
      console.log('profile', profile);
      $("#fullName").text(profile.given_name)
      $('#avatar').attr('src', profile.picture)
      $('#userName').text(profile.nickname + "'s Todos")
    }
  })
}

function deleteTodo(e) {
  e.preventDefault()
  e.stopPropagation()
  var link = $(this)
  $.ajax({
    url: link.attr('href'),
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('idToken')
    }
  }).done(function () {
    link.parent('li').remove()
  })
}

function toggleTodo(e) {
  console.log('toggleTodo()');
  e.preventDefault()
  var li = $(e.currentTarget)
  console.log(li);
  var url = 'http://localhost:3000/todos/' + li.data('id')
  var newCompleted = !li.hasClass('done')
  $.ajax({
    url: url,
    method: 'PUT',
    data: {
      completed: newCompleted
    },
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('idToken')
    }
  }).done(function () {
    li.toggleClass('done')
  })
}

function isLoggedIn() {
  if (localStorage.getItem('idToken')) {
    return isJwtValid();
  } else {
    return false;
  }
}

function isJwtValid() {
  var token = localStorage.getItem('idToken')
  if (!token) {
    return false;
  }
  var encodedPayload = token.split('.')[1]
  console.log('encodedPayload', encodedPayload);
  var decodedPayload = JSON.parse(atob(encodedPayload))
  console.log('decodedPayload', decodedPayload);
  var exp = decodedPayload.exp;
  console.log('exp', exp);
  var expirationDate = new Date(exp * 1000);
  console.log('expirationDate', expirationDate);
  return new Date() <= expirationDate
}

function logout() {
  localStorage.removeItem('idToken')
  window.location.href = '/';
}

function loadTodos() {
  $.ajax({
    url: 'http://localhost:3000/todos',
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('idToken')
    }
  }).done(function (data) {
    data.forEach(function (datum) {
      loadTodo(datum)
    })
  })
}

function loadTodo(todo) {
  var li = $('<li />')
  li.text(todo.task + ' ')
  li.data('id', todo._id)
  if (todo.completed) li.addClass('done');

  var deleteLink = $('<a />');
  deleteLink.text('Delete')
  deleteLink.attr('href', 'http://localhost:3000/todos/' + todo._id)
  deleteLink.addClass('delete-link')

  li.append(deleteLink)

  $('#todos').append(li)
}
