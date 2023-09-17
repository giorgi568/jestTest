function reverseString(string) {
  let strArr = [];
  for(let i = 0; i <= string.length; i++){
    strArr.push(string[i]);
  }
  return strArr.reverse().join('');
}

export {reverseString}