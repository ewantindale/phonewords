const filterByDictionary = (words, dictionary) => {
  const result = [];

  for (const w of words) {
    if (dictionary[w]) {
      result.push(w);
    }
  }

  return result;
};

module.exports = filterByDictionary;
