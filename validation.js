function findingBadData(array) {
  let badData = 0;
  if (!Array.isArray(array)) {
    return "please provide an array of number";
  } else {
    for (let item of array) {
      if (typeof item !== "number") {
        return "please provide an array of number";
      } else {
        if (item < 0) {
          badData++;
        }
      }
    }
  }
  return badData;
}
const arr = [2, -5, 7, -13];
const result = findingBadData(arr);
console.log(result);
