var numbers = [1, 2, 3]
numbers[1] = 55
numbers.push(4)
console.log(numbers);
numbers.pop()
console.log(numbers);
numbers.shift()
console.log(numbers);

numbers.forEach(function (number) {
  console.log(number);
})


var firstName = 'Riley'
var lastName = "Dallas"
console.log([firstName, lastName].join(' '));

var name = 'Riley Dallas'
console.log(name.split(''));

var friends = ['Jen', 'Matt', 'Justin', 'Sarah'];
var listOfFriends = friends.join(', ')
console.log(listOfFriends);



var sumOfSquares = numbers.reduce(function (previousValue, currentNumber) {
  console.log('previousValue', previousValue);
  return currentNumber * currentNumber + previousValue
}, 0)

console.log('sumOfSquares', sumOfSquares);

var squaredNumbers = numbers.map(function (number) {
  return number * number
})
console.log(squaredNumbers);


var convenientFriends = friends.filter(function (friend) {
  return friend.length <= 4;
})
console.log(convenientFriends);
console.log(friends);
// Array.filter
var numbers = [1, 2, 3, 4]
var oddNumbers = numbers.filter(function (number) {
  return number % 2 === 1;
})
console.log(oddNumbers);

var evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
})
console.log(evenNumbers);


// Array.forEach
var friends = ['Matt', 'Justin', 'Sarah'];

friends.forEach(function (friend) {
  console.log(friend);
  var greeting = 'Hello ' + friend
  console.log(greeting);
})

// Array.map
var friendsListItems = friends.map(function (friend) {
  return '<li>' + friend + '</li>'
})

console.log(friendsListItems);


// Array.reduce
function average(arr) {
  var total = arr.reduce(function (previousValue, number, i, arr) {
    return previousValue + number
  }, 0)
  console.log(total);

  var average = total / arr.length
  console.log(average);
  return average;
}

var numbers = [1, 2, 3, 4]
average(numbers)
console.log(average([1]));
console.log(average([1, 10, 48, 54]));
