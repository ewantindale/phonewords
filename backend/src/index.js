const express = require("express");
const dictionary = require("../dictionary.json");
const generateWords = require("./utils/generateWords");
const filterByDictionary = require("./utils/filterByDictionary");

const app = express();
app.use(express.json());

app.post("/", (req, res) => {
  const { numericString, filter } = req.body;

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

  const result = generateWords(numbers);

  if (filter) {
    const filtered_result = filterByDictionary(result, dictionary);
    res.json(filtered_result);
  } else {
    res.json(result);
  }
});

app.listen(4000, () => {
  console.log("Server is listening on http://localhost:4000");
});
