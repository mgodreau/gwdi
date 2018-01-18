// ES5
"<h1>unicorns</h1>\n" +
"<p>Unicorn pegasus pony rainbows pegasus pony kittens. Pop pigeon rainbows pony delight kittens kittens surprise. Wereunicorn delight pony pony social unicorn surprise.</p>\n" +
"<ol>\n" +
"<li>Yea! Yeah!</li>\n" +
"<li>Yeah, woo-hoo!</li>\n" +
"</ol>"


// ES5
var name = "Sam", age = 71;
"Hello my name is "+ name +" and I'm "+ age +" years old!"


// ES5
function varTest() {
  var x = 31;
  if (true) {
    var x = 71;  // same variable!
    console.log(x);  // 71
  }
  console.log(x);  // 71
}


//ES5
var string = 'food';
var substring = 'foo';

console.log(string.indexOf(substring) > -1);


//ES5
function repeat(string, count) {
    var strings = [];
    while(strings.length < count) {
        strings.push(string);
    }
    return strings.join('');
}

// ES5
var doStuff = {
  sayHello: function() {
    console.log("Hello");
  },
  eatPizza: function(pizza) {
    pizza = 0;
    return "thanks!"
  }
}


// ES5
var add = function(x, y){
  return x + y;
}


// ES5
$('#pizza-btn').click(function (event) {
  preheatOven();
  pizzaInOven();
  return 'I love za!';
});


// ES5
function Oven () {
  this.ovenTemp = 0;
  setInterval(function preheatOven() {
    this.ovenTemp++;
  }, 1000);
}


// ES5
function addTwoNumbers(x, y) {
    x = x || 0;
    y = y || 0;
    return x + y;
}


// ES5
var days = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
function reversedDays(arr){
  return arr.reverse()
}
console.log(reversedDays(days))
// but now days is no longer in order
console.log(days)

// To deal with this, we can either:

function reversedDays(arr){
  var newArray = []
  for(let i = 0; i < arr.length; i++){
    newArray.push(arr[i])
  }
  return newArray.reverse()
}
console.log(reversedDays(days))
console.log(days)



// ES5
var dimensions = [10, 5, 2];
var volume = function(height, width, length){
  return height * width * length;
}

volume(dimensions[0], dimensions[1], dimensions[2])


// ES5
function Pizza(name, temperature) {
  this.name = name;
  this.temperature = temperature
}

Pizza.prototype.heatUp = function () {
  return this.temperature + 20;
};


// ES5
var arr = [1, 2, 3, 4];
var a = arr[0];
var b = arr[1];
var c = arr[2];
var d = arr[3];


// ES5
var luke = { occupation: 'jedi', father: 'anakin' };
var occupation = luke.occupation; // 'jedi'
var father = luke.father; // 'anakin'
