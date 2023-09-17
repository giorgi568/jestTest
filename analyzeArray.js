function analyzeArray(arr) {
  arr = arr.sort((a,b) => a > b ? 1 : -1);
  let average = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
  let min = arr[0];
  let max = arr[arr.length-1];
  let length = arr.length

  const object = {
    average: average,
    min: min,
    max: max,
    length: length
  }

  return object
   
}

export { analyzeArray };
