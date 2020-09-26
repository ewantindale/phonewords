const filterByDictionary = require("./filterByDictionary");

test("words not present in dictionary are filtered out", () => {
  const input = ["eurhg", "cat", "ergerg", "cheese"];

  expect(filterByDictionary(input, { cat: 1, cheese: 1 })).toStrictEqual([
    "cat",
    "cheese",
  ]);
});
