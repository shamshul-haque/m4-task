/* You are given an array: 
var fruits = ['Apple', 'Banana', 'Orange'];
a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’. */
var fruits = ["Apple", "Banana", "Orange"];
var bananaIndex = fruits.indexOf("Banana");
console.log(bananaIndex);
fruits[1] = "Mango";
console.log(fruits);
fruits.push("Watermelon");
console.log(fruits);
fruits.pop();
fruits.pop();
console.log(fruits);

/* You and your friends Tom, Jane, Peter and John got their final exam results. Your total score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56 and John’s total score is 40. The grading chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade
Write a program to find your and your friend's grades using if-else. */
var myScore = 85;
if (myScore >= 80 && myScore <= 100) {
  console.log("My grade is A");
} else if (myScore >= 60 && myScore <= 79) {
  console.log("My garde is B");
} else if (myScore >= 50 && myScore <= 60) {
  console.log("My garde is C");
} else if (myScore >= 40 && myScore <= 50) {
  console.log("My garde is D");
} else {
  console.log("My garde is F");
}
var tomScore = 66;
if (tomScore >= 80 && tomScore <= 100) {
  console.log("Tom's grade is A");
} else if (tomScore >= 60 && tomScore <= 79) {
  console.log("Tom's garde is B");
} else if (tomScore >= 50 && tomScore <= 60) {
  console.log("Tom's garde is C");
} else if (tomScore >= 40 && tomScore <= 50) {
  console.log("Tom's garde is D");
} else {
  console.log("Tom's garde is F");
}
var janeScore = 95;
if (janeScore >= 80 && janeScore <= 100) {
  console.log("Jane's grade is A");
} else if (janeScore >= 60 && janeScore <= 79) {
  console.log("Jane's garde is B");
} else if (janeScore >= 50 && janeScore <= 60) {
  console.log("Jane's garde is C");
} else if (janeScore >= 40 && janeScore <= 50) {
  console.log("Jane's garde is D");
} else {
  console.log("Jane's garde is F");
}
var peterScore = 56;
if (peterScore >= 80 && peterScore <= 100) {
  console.log("Peter’s grade is A");
} else if (peterScore >= 60 && peterScore <= 79) {
  console.log("Peter’s garde is B");
} else if (peterScore >= 50 && peterScore <= 60) {
  console.log("Peter’s garde is C");
} else if (peterScore >= 40 && peterScore <= 50) {
  console.log("Peter’s garde is D");
} else {
  console.log("Peter’s garde is F");
}
var jhonScore = 40;
if (jhonScore >= 80 && jhonScore <= 100) {
  console.log("John’s grade is A");
} else if (jhonScore >= 60 && jhonScore <= 79) {
  console.log("John’s garde is B");
} else if (jhonScore >= 50 && jhonScore <= 60) {
  console.log("John’s garde is C");
} else if (jhonScore >= 40 && jhonScore <= 50) {
  console.log("John’s garde is D");
} else {
  console.log("John’s garde is F");
}

/* You are given three numbers 13, 79, and 45. Write a program that will print the largest number using if-else. */
var A = 13;
var B = 97;
var C = 99;
if (A > B && A > C) {
  console.log("A = " + A + " is the largest number");
} else if (B > A && B > C) {
  console.log("B = " + B + " is the largest number");
} else {
  console.log("C = " + C + " is the largest number");
}

/* You are given a triangle with the sides 9, 8, 9. Write a program to check whether a triangle is Isosceles or not using if-else. Isosceles => two sides are equal */
var X = 9;
var Y = 8;
var Z = 9;
if (X == Y || X == Z || Y == Z) {
  console.log("The triangle is isosceles");
} else {
  console.log("The triangle is not an isosceles");
}
