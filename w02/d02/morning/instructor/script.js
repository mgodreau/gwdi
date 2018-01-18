var car  = {
  make: "Subaru",
  model: "STI",
  year: 2014,
  used: false,
  color: "black",
  owner: "Riley",
  "tire-type": "Goodyear",
  drive: function(){
    console.log(this.owner + " is driving the car");
  },
  paint: function(newColor){
    console.log("Painting the car " + newColor)
    this.color = newColor;
  },
  previousOwners: ["Riley's dad", "Riley's mom"],
  engine: {
    horsepower: 100,
    pistons: 4,
    fast: true,
    furious: false,
    fuel: "oil"
  }
}

var cars = ["Subaru", "Honda", "Tesla"];

var person = {};

var dog = {
  breed: "boxer",
  color: "brown",
  name: "Scooby",
  age: 10,
  problems: ["blind"],
  shots: true,
  bark: function(){
    console.log("BARK!");
  },
  speak: function(words){
      console.log("dog says: " + words);
  }
}

dog.eat = function() {
  console.log("Eating");
}

dog.owner = "Joseph";


var wdiStudent = {
  name: "Sean",
  age: 99,
  gender: ["male", "female", "other"],
  "last-name": "Lewis",
  computer: {
    brand: "mac",
    color: "silver",
    "screen-size": 13
  }
}

wdiStudent.name = "Kollin";
wdiStudent.gender.push("another");
wdiStudent["age"]++;

var newName = "Thomas";

// wdiStudent.name = newName;
wdiStudent["name"] = newName;

var friend = "Frank";

// wdiStudent.roomate = friend;
wdiStudent["roomate"] = friend;

var newKey = "birthday";

// wdiStudent.newKey = "May 21";
wdiStudent[newKey] = "May 21";

delete wdiStudent.gender;

// for..in loop
// for (var prop in wdiStudent){
//   console.log("wdiStudent key: " + prop + " = " + wdiStudent[prop]);
// }
//
// for (i in wdiStudent) {
//   console.log(i, wdiStudent[i])
// }

var callStudent = function() {
  console.log(wdiStudent)
}

callStudent();
