// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    const unqiueCharacters = new Set(alphabet).size;
    if (!alphabet || unqiueCharacters !== 26) return false;
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    const words = input.split(" ");

    const result = words
      .map((word) => {
        let newWord = "";
        for (const char of word) {
          let newChar = "";
          if (encode) {
            const index = alpha.indexOf(char.toLowerCase());
            newChar = alphabet[index];
          } else {
            const index = alphabet.indexOf(char.toLowerCase());
            newChar = alpha[index];
          }

          newWord += newChar;
        }
        return newWord;
      })
      .join(" ");

    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
