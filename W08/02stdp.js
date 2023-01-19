decodeMorse = function (morseCode) {
  // separar palabras
  let result = [];
  let letters = [];
  let words = morseCode.split('   '); // ['.... . -.--', '.--- ..- -.. .']
  for (let i = 0; i < words.length; i++) {
    letters = words[i].split(' '); // ['....', '.', '-.--'], ['.---', '..-', '-..', '.']
    for (let j = 0; j < letters.length; j++) {
      letters[j] = MORSE_CODE[letters[j]];
    }
    // letters = ['H', 'E', 'Y'], ['J', 'U', 'D', 'E']
    result.push(letters.join('')); // HEY, JUDE
  }
  // result = ['HEY', 'JUDE'];
  return result.join(' ').trim(); // HEY JUDE
};
