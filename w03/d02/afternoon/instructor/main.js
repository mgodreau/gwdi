$(document).ready(function() {

  $('form').on('submit', function(e){
    e.preventDefault();
    var query = $('#search').val();
    loadGiphys(query);
  });

});


var loadGiphys = function(query){
  // var stopIndex = 5;
  // var data = null;
  //
  // var newGiphy = function(){
  //   stopIndex+=1;
  //   return data[stopIndex];
  //   // instead of return just append
  // }

  $.ajax({
    url: 'http://api.giphy.com/v1/gifs/search',
    data: {
      api_key: 'dc6zaTOxFJmzC',
      q: query
    }
  })
  .done(function(response){
    data = response;
    $('.content').empty();
    for(i=0; i<stopIndex; i++){
      console.log('data', response.data[i].images.downsized.url);
      var $img = $('<img />').attr('src', response.data[i].images.downsized.url);
      $('.content').append($img);
    }
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    alert('oh no!');
    console.log(textStatus, errorThrown);
  })
  .always(function() {
    console.log('I always run no matter what');
  })
}
