const generateWords = require("./generateWords");

test("2 returns ['a', 'b', 'c']", () => {
  const input = "2";
  let result = [];
  generateWords(input, 0, [], input.length, result);
  expect(result).toStrictEqual(["a", "b", "c"]);
});

test("23 returns ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']", () => {
  const input = "23";
  let result = [];
  generateWords(input, 0, [], input.length, result);
  expect(result).toStrictEqual([
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

test("1 returns []", () => {
  const input = "1";
  let result = [];
  generateWords(input, 0, [], input.length, result);
  expect(result).toStrictEqual([]);
});

test("0 returns []", () => {
  const input = "0";
  let result = [];
  generateWords(input, 0, [], input.length, result);
  expect(result).toStrictEqual([]);
});

test("21 returns []", () => {
  const input = "21";
  let result = [];
  generateWords(input, 0, [], input.length, result);
  expect(result).toStrictEqual([]);
});

test("20 returns []", () => {
  const input = "20";
  let result = [];
  generateWords(input, 0, [], input.length, result);
  expect(result).toStrictEqual([]);
});
