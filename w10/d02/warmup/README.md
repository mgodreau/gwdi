# Project Euler

## Problem 1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

###Solution

= 233168

```js
function naturalSum(num){
    var sum = 0;
    for(var i=1; i < num; i++) {
        if (i%3===0 || i%5===0) {
           sum += i;
        }
    }
    return sum;	
}

naturalSum(1000);
```

In Ruby:
```ruby
(1..999).to_a.map do |i|
  (i % 3 === 0 || i % 5 === 0) ? i : 0
end.inject(0) { |sum, i| sum + i }
```

## Problem 2

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143?


###Solution
= 6857

```js
function largestPrimeFactor(num) {
  var result, arr=[];
  
  if(isPrime(num)) {
    result = num;
  } else {
    for(var i=2; i<Math.sqrt(num); i++) {
      if(isPrime(i) && num % i === 0) {
        arr.push(i);
        if(isPrime(num/i)) {
          arr.push(num/i);
        }
      }
    }
    result = Math.max.apply(Math, arr);
  }
    
  return result;  
}
```

Ruby:
```ruby
require 'prime'
factors = []
Prime.each(Math.sqrt(600851475143)) do |prime|
  factors << prime if number % prime == 0
end
factors.last
```

## Problem 3

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
