$(document).ready(function(){
  $('#zip-form').on('submit', function(e){
    e.preventDefault();
    var zipcode = $('#zipcode').val();

    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather',
      data: {
        zip: zipcode + ',us',
        appid: '33814a2cc7924300317c3f625816be07',
        units: 'imperial'
      }
    }).done(function(response){
      loadWeather(response);
    }).always(function(){
      console.log('form submitted');
    }).fail(function(jqXHR, textStatus, errorThrown){
      console.log(jqXHR, textStatus, errorThrown);
    })
  })
})

function loadWeather(data){
  console.log(data);
  $('#city').text(data.name);
  $('#temp').text(data.main.temp);
  var sunrise = data.sys.sunrise;
  sunrise = new Date(sunrise * 1000);
  $('#sunrise').text(sunrise);
  $('#sunset').text(new Date(data.sys.sunset * 1000))
  $('#description').text(data.weather[0].description);
  $('#lat').text(data.coord.lat);
  $('#lon').text(data.coord.lon);
  $('#weather-image').attr('src', 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png');
  $('#forecast').show();
}
