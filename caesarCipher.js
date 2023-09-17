function ceasarCipher(str, shift) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  let cipherArr = [];

  for (let i = 0; i < str.length; i++) {
    if (!alphabet.includes(str[i].toLowerCase())) {
      cipherArr.push(str[i]);
      continue;
    }

    let charNum = alphabet.indexOf(str[i].toLowerCase());
    if (str[i] === str[i].toUpperCase()) {
      cipherArr.push(alphabet[(charNum + shift) % 26].toUpperCase());
    } else {
      cipherArr.push(alphabet[(charNum + shift) % 26]);
    }
  }

  return cipherArr.join('');
}

export { ceasarCipher };
