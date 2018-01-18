var express = require("express");
var app = express();

var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.listen(3000, function(){
  console.log("App is listening on port 3000");
});


app.get("/", function(request, response){
  response.redirect('/99');
});


app.get("/:number_of_beers", function(req, res){
  var numberOfBottles = req.params.number_of_beers;
  var next = numberOfBottles - 1;
  // if (bottles > 0){
  //   res.send(bottles + " Bottles of Beer on the Wall <a href='/" + next + "'>Take one down, pass it around</a>");
  // } else {
  //   res.send("No bottles of beer on the wall <a href='/'>Start Over</a>")
  // }
  res.render('index', {bottles: numberOfBottles, next: next});
})

// app.get("/about", function(request, response){
//   response.send("My about page");
// });
//
// app.get("/:name", function(req, res){
//   res.send("hello, " + req.params.name);
// })
