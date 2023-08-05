/* Write a function that will take hours as the input and will convert it into minuets */
function hourToMinute(hr) {
  result = hr * 60;
  return result;
}
const hours = 4.25;
const minuets = hourToMinute(hours);
console.log(hours, " hours = ", minuets, " minuets");

/* Write a function that findLeapYear() that will take the array[2023, 2024, 2025, 2028, 2030] as the input parameter and will check each that it is a leap year or not. If a year is leap year then push it into a new array*/
function findLeapYear(years) {
  let leap = [];
  for (let item of years) {
    if ((item % 4 === 0 && item % 100 !== 0) || item % 400 === 0) {
      leap.push(item);
    }
  }
  return leap;
}
const years = [2023, 2024, 2025, 2028, 2030];
const leapYear = findLeapYear(years);
console.log("Leap years are: ", leapYear);
