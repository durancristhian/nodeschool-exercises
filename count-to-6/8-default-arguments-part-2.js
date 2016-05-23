function makeImportant (str, number = str.length ) {
  return `${str}${'!'.repeat(number)}`;
}

module.exports = makeImportant;
