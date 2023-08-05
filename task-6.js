/* Write a program to find the smallest number from an array */
function findSmallest(arr) {
  let smallest = arr[0];
  for (let item of arr) {
    if (item < smallest) {
      smallest = item;
    }
  }
  return smallest;
}
const numbers = [9, 107, 37, 55, 23, 49, 2];
const smallestNumber = findSmallest(numbers);
console.log("The smallest number is: ", smallestNumber);

/* Write a program to find the average of the items of an array */
function findAverage(arr) {
  let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  const average = sum / arr.length;
  return average;
}
const avgNumber = findAverage(numbers);
console.log("The average of the array is: ", Number(avgNumber.toFixed(2)));

/* Write a program to calculate the area of a rectangle. */
function rectangleArea(l, w) {
  const a = l * w;
  return a;
}
const length = 24;
const width = 16;
const area = rectangleArea(length, width);
console.log("The rectangle area is: ", area);

/* Write a program to find the second largest number of an array */
function findSecondLargest(arr) {
  let largest = arr[0];
  let secondLargest = 0;
  for (let item of arr) {
    if (item > largest) {
      secondLargest = largest;
      largest = item;
    } else if (item > secondLargest && item !== largest) {
      secondLargest = item;
    }
  }
  return secondLargest;
}
const secondeLargestNumber = findSecondLargest(numbers);
console.log("The second smallest number is: ", secondeLargestNumber);
