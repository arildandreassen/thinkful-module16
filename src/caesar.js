// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift > 25 || shift < -25) return false;

    const alpha = "abcdefghijklmnopqrstuvwxyz";

    let result = "";
    if (encode) {
      for (const char of input.toLowerCase()) {
        const index = alpha.indexOf(char);
        let newIndex;
        if (index + shift > 25) {
          newIndex = index + shift - 26;
        } else if (index + shift < 0) {
          newIndex = index + shift + 26;
        } else {
          newIndex = index + shift;
        }
        result += index === -1 ? char : alpha[newIndex];
      }
    } else {
      for (const char of input.toLowerCase()) {
        const index = alpha.indexOf(char);
        let newIndex;
        if (index - shift > 25) {
          newIndex = index - shift - 26;
        } else if (index - shift < 0) {
          newIndex = index - shift + 26;
        } else {
          newIndex = index - shift;
        }
        result += index === -1 ? char : alpha[newIndex];
      }
    }

    console.log(result);
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
