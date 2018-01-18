var myName;
var myName = 'Riley';
var age = 35;
var canLegallyVote = true;
// var foobar = null;

console.log(myName);

var firstName = 'Riley';
firstName += ' Lee'
console.log(firstName);
var lastName = 'Dallas';
// String concatenation

console.log(age);
age = age + 1;
age += 10;
age++;
console.log(age);

var friends = ['Sarah', 'Jackson', 'Gabe', 1, null];
console.log(friends[5]);
console.log('# of friends', friends.length);

// Declaring a function
function sayHello() {
  alert('Hello')
}

// var valueFromSayHello = sayHello()
// console.log('valueFromSayHello', valueFromSayHello);

// Calling the function
// sayHello()
// sayHello()

// Returning a value
function greeting() {
  console.log('before the return');
  return 'Hello'
  console.log('after the return');
}

var howdy = greeting()
console.log(howdy);

function calculateTip(total) {
  return total * 0.20
}

if (/**/) {
  console.log('truthy');
} else {
  console.log('falsey');
}


var tip = calculateTip(100)
console.log(calculateTip(15));
console.log(calculateTip(age));

function fullName(firstName, lastName) {
  return firstName + ' ' + lastName
}

fullName('Riley', 'Dallas')
fullName('BritneyJo', 'Ludkowski')


// Global vs local variables
var variable = 'foo'
function foobar() {
  var variable = 'bar'
  console.log(variable);
}
foobar()
console.log(variable);


for (var i = 1; i < 101; i++) {
  switch (0) {
    case i % 15:
      console.log('FizzBuzz');
      break;
    case i % 5:
      console.log('Buzz');
      break;
    case i % 3:
      console.log('Fizz');
      break;
    default:
      console.log(i);
  }
}
