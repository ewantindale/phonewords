const express = require("express");
const words_dictionary = require("../words_dictionary.json");

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

const filterByDictionary = (words) => {
  const result = [];

  for (const w of words) {
    if (words_dictionary[w]) {
      result.push(w);
    }
  }

  return result;
};

const generateWords = async (numbers, current, output, inputLength, result) => {
  if (current === inputLength) {
    const word = output.join("");
    result.push(word);
    return;
  }

  for (let i = 0; i < numberToLetters[numbers[current]].length; i++) {
    output.push(numberToLetters[numbers[current]][i]);
    generateWords(numbers, current + 1, output, inputLength, result);
    output.pop();
    if (numbers[current] === 0 || numbers[current] === 1) {
      return;
    }
  }
};

const main = async () => {
  const app = express();
  app.use(express.json());

  app.post("/", (req, res) => {
    const { numericString } = req.body;

    if (numericString.length < 1) {
      res
        .status(400)
        .json({ message: "The input string must be at least 1 character" });
      return;
    }

    const isNumber = /^[2-9]+$/.test(numericString);

    if (!isNumber) {
      res
        .status(400)
        .json({ message: "The input string can only contain numbers 2-9" });
      return;
    }

    const numbers = numericString.split("").map((n) => parseInt(n));

    let result = [];

    generateWords(numbers, 0, [], numbers.length, result);

    const filtered_result = filterByDictionary(result);

    res.json(filtered_result);
  });

  app.listen(4000, () => {
    console.log("Server is listening on http://localhost:4000");
  });
};

main().catch((error) => {
  console.error(error);
});
