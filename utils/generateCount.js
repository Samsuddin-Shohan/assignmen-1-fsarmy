
const generateCount = (string)=>{
    const letterRegex = /[a-zA-Z]/;
  const symbolRegex = /[\W_]/;
  const numericRegex = /[0-9]/;

  let letterCount = 0;
  let symbolCount = 0;
  let numericCount = 0;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (letterRegex.test(char)) {
      letterCount++;
    } else if (symbolRegex.test(char)) {
      symbolCount++;
    } else if (numericRegex.test(char)) {
      numericCount++;
    }
  }

  return {
    letters: letterCount,
    symbols: symbolCount,
    numeric: numericCount
  };
}
module.exports = generateCount;
