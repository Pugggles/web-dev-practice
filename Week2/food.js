var myFoods = [];

var food;
var num;
var something;

if (food === "orange") {
  myFoods.push("orange");
} else {
  myFoods.push("month old pizza");
}

// Hint: parseInt converts a string into an integer (number)
if (parseInt(num) === 5) {
  myFoods.push("banana");
} else {
  myFoods.push("rotten banana peel");
}

if (something) {
  myFoods.push("chocolate");
} else {
  myFoods.push("suspicious truffle butter");
}

if (num + 5 === "55") {
  myFoods.push("juicy steak");
} else {
  myFoods.push("wilted lettuce");
}

// ["orange", "banana", "chocolate", "juicy steak"]
console.log(myFoods);
