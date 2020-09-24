const express = require("express");

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

const generateWords = (number, curr, output, n, result) => {
  if (curr === n) {
    result.push(output.join(""));
    return;
  }

  for (let i = 0; i < numberToLetters[number[curr]].length; i++) {
    output.push(numberToLetters[number[curr]][i]);
    generateWords(number, curr + 1, output, n, result);
    output.pop();
    if (number[curr] === 0 || number[curr] === 1) {
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
        .json({ response: "Input string must be at least 1 character" });
      return;
    }

    const isNumber = /^\d+$/.test(numericString);

    if (!isNumber) {
      res
        .status(400)
        .json({ response: "Input string can only contain numbers" });
      return;
    }

    const number = numericString.split("").map((n) => parseInt(n));

    let result = [];

    generateWords(number, 0, [], number.length, result);

    res.json({ response: result });
  });

  app.listen(4000, () => {
    console.log("Server is listening on http://localhost:4000");
  });
};

main().catch((error) => {
  console.error(error);
});
