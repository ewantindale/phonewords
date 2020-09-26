const numberToLetters = [
  "",
  "",
  "abc",
  "def",
  "ghi",
  "jkl",
  "mno",
  "pqrs",
  "tuv",
  "wxyz",
];

const generateWords = (numbers) => {
  const result = [];

  generateWordsUtil(numbers, 0, [], numbers.length, result);

  return result;
};

const generateWordsUtil = (numbers, current, output, inputLength, result) => {
  if (current === inputLength) {
    const word = output.join("");
    result.push(word);
    return;
  }

  for (let i = 0; i < numberToLetters[numbers[current]].length; i++) {
    output.push(numberToLetters[numbers[current]][i]);
    generateWordsUtil(numbers, current + 1, output, inputLength, result);
    output.pop();
    if (numbers[current] === 0 || numbers[current] === 1) {
      return;
    }
  }
};

module.exports = generateWords;
