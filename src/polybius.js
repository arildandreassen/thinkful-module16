// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // if (input.length % 2 !== 0) return false;

    const square = {
      a: "11",
      b: "21",
      c: "31",
      d: "41",
      e: "51",
      f: "12",
      g: "22",
      h: "32",
      "(i/j)": "42",
      i: "42",
      j: "42",
      k: "52",
      l: "13",
      m: "23",
      n: "33",
      o: "43",
      p: "53",
      q: "14",
      r: "24",
      s: "34",
      t: "44",
      u: "54",
      v: "15",
      w: "25",
      x: "35",
      y: "45",
      z: "55",
    };

    let result = "";
    if (encode) {
      const words = input.toLowerCase().split(" ");
      result = words
        .map((word) => {
          let encrypterWord = "";
          for (const char of word) {
            encrypterWord += square[char];
          }
          return encrypterWord;
        })
        .join(" ");
    } else {
      const encryptedWords = input.split(" ");
      for (const word of encryptedWords) {
        if (word.length % 2 !== 0) return false;
      }
      result = encryptedWords
        .map((encryptedWord) => {
          let decryptedWord = "";
          for (let i = 0; i < encryptedWord.length; i += 2) {
            const number = (encryptedWord[i] + encryptedWord[i + 1]).toString();
            const letter = Object.keys(square).find(
              (value) => square[value] === number
            );
            decryptedWord += letter;
          }
          return decryptedWord;
        })
        .join(" ");

      // const keys = Object.keys(square);
      // const values = Object.keys(square)

      // console.log(keys);
    }
    console.log(result);
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
