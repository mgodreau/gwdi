$(document).ready(function () {
  getRandomJoke()

  $('#jokeForm').on('submit', function (e) {
    e.preventDefault()
    getRandomJoke()
  })
})

function getRandomJoke() {
  var url = 'http://api.icndb.com/jokes/random/';
  url += $('#numberOfJokes').val()
  var data = {}

  var firstName = $('#firstName').val()
  var lastName = $('#lastName').val()

  if (firstName.length > 0) {
    data.firstName = firstName
  }

  if (lastName.length > 0) {
    data.lastName = lastName
  }

  $.ajax({
    url: url,
    data: data
  })
  .done(function (data) {
    var oldJokes = $('#featuredJokes').html()
    $('#previousJokes').prepend(oldJokes)
    $('#featuredJokes').html('')

    data.value.forEach(function (jokeObject) {
      var li = $('<li />')
      li.text(jokeObject.joke)

      $('#featuredJokes').append(li)
    })
  })

  console.log('data', data);
}
