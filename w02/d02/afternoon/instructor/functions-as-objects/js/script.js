var me = {}

// Dot notation
me.firstName = 'Riley'
// console.log(me.firstName);

// Bracket notation
me['lastName'] = 'Dallas'
// console.log(me['lastName']);

// console.log(me);

// Methods
me.fullName = function () {
  return this['firstName'] + ' ' + this.lastName
}


var arr = []
arr.push('Jordan')
// Arrays are objects, so arrays can have properties
arr.foo = 'bar'



var numbers = [1, 2, 3, 4, 5]


function sumTotal(previousValue, currentValue) {
  return previousValue + currentValue
}
console.log(numbers.reduce(returnAFunction(sumTotal), 0));
console.log(sumTotal(20, 1));

function isOdd(num) {
  return num % 2 === 1;
}
var oddNumbers = numbers.filter(isOdd)
console.log(isOdd(11));

// Sum if odd
function sumIfOdd(subtotal, numberToAdd) {
  if (numberToAdd % 2 === 1) {
    return subtotal + numberToAdd
  } else {
    return subtotal
  }
}
console.log('Odd Total', numbers.reduce(sumIfOdd, 0));
console.log(sumIfOdd(0, 1));
console.log(sumIfOdd(10, 2));

function functionWithCallback(callback) {
  return callback()
}
var result = functionWithCallback(sayHello)
console.log(result);

function sayHello() {
  return 'Hello'
}
var greeting = sayHello()
console.log('greeting', greeting);

function returnAFunction(cb) {
  return cb
}

// var foo = returnAFunction()
// console.log(foo);
// foo()

var friends = ['Matt', 'Justin', 'Sarah']

var listItems = friends.map(createListItem)

function createListItem(text) {
  return '<li>' + text + '</li>'
}

console.log(friends);
console.log(listItems);
