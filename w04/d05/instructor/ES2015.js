// ES5
"<h1>unicorns</h1>\n" +
"<p>Unicorn pegasus pony rainbows pegasus pony kittens. Pop pigeon rainbows pony delight kittens kittens surprise. Wereunicorn delight pony pony social unicorn surprise.</p>\n" +
"<ol>\n" +
"<li>Yea! Yeah!</li>\n" +
"<li>Yeah, woo-hoo!</li>\n" +
"</ol>"

// ES6
`<h1>unicorns</h1>
<p>Unicorn pegasus pony rainbows pegasus pony kittens. Pop pigeon rainbows pony delight kittens kittens surprise. Wereunicorn delight pony pony social unicorn surprise.</p>
<ol>
<li>Yea! Yeah!</li>
<li>Yeah, woo-hoo!</li>
</ol>`


// ES5
var name = "Sam", age = 71;
"Hello my name is "+ name +" and I'm "+ age +" years old!"
// ES6
`Hello my name is ${name} and I'm ${age} years old!`


//ES5
var string = 'food';
var substring = 'foo';

string.indexOf(substring) > -1;

// ES6
const string = 'food';
const substring = 'foo';

string.includes(substring);


//ES5
function repeat(string, count) {
    var strings = [];
    while(strings.length < count) {
        strings.push(string);
    }
    return strings.join('');
}
// ES6
string.repeat(3);


// ES5
function varTest() {
  var x = 31;
  if (true) {
    var x = 71;  // same variable!
    console.log(x);  // 71
  }
  console.log(x);  // 71
}

// ES6
function varTest() {
  let x = 31;
  if (true) {
    let x = 71;
    console.log(x); // 71
  }
  console.log(x);  // 31
}

const my_fav = 21;
my_fav = 12;


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

// ES6
let doStuff = {
  sayHello() {
    console.log("Hello");
  },
  eatPizza(pizza) {
    pizza = 0;
    return "thanks!"
  }
}


// ES5
var add = function(x, y){
  return x + y;
}
// ES6
var add = (x , y) => x + y;
var multiply = x => x * x;

// ES5
$('#pizza-btn').click( (event) => {
  preheatOven();
  pizzaInOven();
  return 'I love za!';
});


// ES6
function Oven () {
  this.ovenTemp = 0;
  setInterval( preheatOven = () => {
    this.ovenTemp++;
  }, 1000);
}


// ES5
function addTwoNumbers(x, y) {
    x = x || 0;
    y = y || 0;
    return x + y;
}
// ES6
function addTwoNumbers(x=0, y=0){
  return x + y;
}

function append(value, array=[]){
  array.push(value);
  return array;
}

// ES5
var foo = [4, 6];
var bar = [1, foo[0], foo[1], 2, 5];
// [1, 2, 4, 6, 2, 5]


// ES6
var foo = [4, 6];
var bar = [1, ...foo, 2, 5];
// [1, 2, 4, 6, 2, 5]


// ES5
var dimensions = [10, 5, 2];
var volume = function(height, width, length){
  return height * width * length;
}

volume(dimensions[0], dimensions[1], dimensions[2]);

// ES6
volume(...dimensions)


// ES5
var days = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
function reversedDays(arr){
  return arr.reverse()
}
reversedDays(days);

function reversedDays(arr){
  var newArray = []
  for(let i = 0; i < arr.length; i++){
    newArray.push(arr[i])
  }
  return newArray.reverse()
}
reversedDays(days)
days; //now a mutated value

// ES6
function reversedDays(arr){
  return [...arr].reverse()
}
reversedDays(days);
days; //back to our original value



// SPREAD OPERATOR PRACTICE //

// CHALLENGE ONE
function replace(array, from, to, elements) {
    array.splice.apply(array, [from, to - from].concat(elements))
}

// using spread operator
function replace(array, from, to, elements) {
  return array.splice(from, to - from, ...elements)
}

let testArray = [1, 2, 100, 100, 6]
replace(testArray, 2, 4, [3, 4, 5])
testArray;

// CHALLENGE TWO
function copyReplace(array, from, to, elements) {
  return array.slice(0, from).concat(elements).concat(array.slice(to))
}

// using spread operator

function copyReplace(array, from, to, elements) {

}

copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5])

// CHALLENGE THREE
let birdsSeen = []
function recordBirds(time) {
  birdsSeen.push({time, birds: Array.prototype.slice.call(arguments, 1)})
}

recordBirds(new Date, "sparrow", "robin", "pterodactyl")
console.log(birdsSeen)


// ES5
function Pizza(name, temperature) {
  this.name = name;
  this.temperature = temperature
}

Pizza.prototype.heatUp = function () {
  return this.temperature + 20;
};

// ES6
class Pizza {
  constructor(name, temperature) {
    this.name = name;
    this.temperature = temperature;
  }

  heatUp() {
    return this.temperature + 20;
  }

  static sayCool() {
    console.log("cool!");
  }
}

Pizza.sayCool();
// > "cool!"
let za = new Pizza("cheese", "hot")

za.sayCool();
// TypeError: za.sayCool is not a function


// ES5
var arr = [1, 2, 3, 4];
var a = arr[0];
var b = arr[1];
var c = arr[2];
var d = arr[3];

//ES6
let [a, b, c, d] = [1, 2, 3, 4];

console.log(a); // 1
console.log(b); // 2

// ES5
var luke = { occupation: 'jedi', father: 'anakin' };
var occupation = luke.occupation; // 'jedi'
var father = luke.father; // 'anakin'

// ES6
let luke = { occupation: 'jedi', father: 'anakin' };
let {occupation, father} = luke;

console.log(occupation); // 'jedi'
console.log(father); // 'anakin'
