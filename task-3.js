/* Display "Aj ke amar mon valo nei" for 39 times */
for (var i = 1; i < 40; i++) {
  console.log(i + " Aj ke amar mon valo nei");
}

/* Display number between 58 to 98 */
var number = 58;
while (number <= 98) {
  console.log(number);
  number++;
}

/* Show all even number between 412 to 456 */
for (var evenNumber = 412; evenNumber <= 456; evenNumber += 2) {
  console.log(evenNumber);
}

/* Show all odd number between 581 to 633 */
var oddNumber = 581;
while (oddNumber <= 633) {
  console.log(oddNumber);
  oddNumber += 2;
}

/* Declare an array for all the topic you have learned last few days and display them as output */
var learnedTopic = ["html", "css", "tailwind css", "daisy ui", "java script"];
console.log(learnedTopic);

/* Create an array of mobile that are you used and display them by while loop*/
var usedPhone = ["symphony", "techno", "samsung", "nokia", "redme"];
var i = 0;
while (i < usedPhone.length) {
  console.log(usedPhone[i]);
  i++;
}

/* Run a loop from 30 to 86. This loop will stop if the value gets higher than 44 */
for (var i = 30; i <= 86; i++) {
  if (i > 44) {
    break;
  }
  console.log(i);
}

/* Write the prices of book that you have. Display the prices if the prices lower than 200 */
var bookPrice = [500, 50, 400, 100, 150, 200, 300, 199];
for (var i = 0; i < bookPrice.length; i++) {
  if (bookPrice[i] >= 200) {
    continue;
  }
  console.log(bookPrice[i]);
}

/* Typecasting and fixed floating point */
var p = "10";
var q = 20;
console.log(p + " " + q);
console.log(parseInt(p) + " " + parseFloat(q).toFixed(2));

var arr = [5, 10, 15, 20, 25];
/* Find the value of an index */
console.log(arr[3]);

/* Change an element of an index */
arr[3] = 30;
console.log(arr);

/* Get the index of an element by the value */
console.log(arr.indexOf(30));

/* Add an element at the last position of an array */
arr.push(35);
console.log(arr);

/* Remove an element from the last position of an array */
arr.pop();
console.log(arr);

/* Add an element at the first position of an array */
arr.unshift(20);
console.log(arr);

/* Remove an element from the first position of an array */
arr.shift();
console.log(arr);

/* Lets say you have X amount of money. If you have more then $80000, you will buy  apple laptop. If you have more then $60000, you will buy gaming laptop. If you have more then $40000, you will buy used laptop. If you have more then $20000, you will buy mobile. Otherwise you will buy nothing */
var X = 50000;
if (X > 80000) {
  console.log("Give an apple laptop");
} else if (X > 60000 && X < 80000) {
  console.log("Give a gaming laptop");
} else if (X > 40000 && X < 60000) {
  console.log("Give used laptop");
} else if (X > 20000 && X < 40000) {
  console.log("Give a phone");
} else {
  console.log("Give nothing");
}
