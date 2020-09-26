const generateWords = require("./generateWords");

test("[2] returns ['a', 'b', 'c']", () => {
  const input = [2];
  expect(generateWords(input)).toStrictEqual(["a", "b", "c"]);
});

test("[2, 3] returns ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']", () => {
  const input = [2, 3];
  expect(generateWords(input)).toStrictEqual([
    "ad",
    "ae",
    "af",
    "bd",
    "be",
    "bf",
    "cd",
    "ce",
    "cf",
  ]);
});

test("[1] returns []", () => {
  const input = [1];
  expect(generateWords(input)).toStrictEqual([]);
});

test("[0] returns []", () => {
  const input = [0];
  expect(generateWords(input)).toStrictEqual([]);
});

test("[2, 1] returns []", () => {
  const input = [2, 1];
  expect(generateWords(input)).toStrictEqual([]);
});

test("[2, 0] returns []", () => {
  const input = [2, 0];
  expect(generateWords(input)).toStrictEqual([]);
});
