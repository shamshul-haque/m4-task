/* Write a function called foo() which prints "foo" and a function called bar() which prints "bar". Call function bar in the foo() function after printing. What will be the output? Now call the foo() to see the output */
function foo() {
  console.log("foo");
  bar();
}
function bar() {
  console.log("bar");
}
foo();

/* Write a function called make_avg() which will take three integers and return the average of those values. */
function avg(a, b, c) {
  const average = (a + b + c) / 3;
  return average;
}
const x = 14;
const y = 36;
const z = 27;
let result = avg(x, y, z);
console.log(Number(result.toFixed(2)));

/* Write a function called  makeAvg() which will take an array of integers and return the average of those values */
function makeAvg(array) {
  let sum = 0;
  for (let item of array) {
    sum += item;
  }
  const average = sum / array.length;
  return average;
}
const arr = [27, 91, 97, 40, 25, 100];
result = makeAvg(arr);
console.log(Number(result.toFixed(2)));

/* Write a function called oddEven() which will takes an integer value and tell whether the value is even or odd. */
function oddEven(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
const number = 999;
result = oddEven(number);
console.log(result);

/* You are hurry to go to your school on time. But when you are crossing the road, the traffic signal is red. In this situation, if you try to cross the road you may be in danger. if you noticed yellow signal, you should stop and if you noticed green signal you can cross the road. Now write a program for the situation */
function crossRoad(color) {
  if (color === "red") {
    return "You are in danger";
  } else if (color === "yellow") {
    return "You should stop";
  } else if (color === "green") {
    return "You can cross the road";
  } else {
    return "Do whatever you want";
  }
}
const signal = "yellow";
result = crossRoad(signal);
console.log(result);
