const [copyArray, chooseId, fuzzySearch, addData, chooseIdChangData,
  deleteIdData, sortByPrice] = require('./index');
// ------------------------------------------------------------------
// copyArray
test('copyArray() 若輸入為空值，結果得空陣列', () => {
  expect(copyArray('')).toEqual([]);
});