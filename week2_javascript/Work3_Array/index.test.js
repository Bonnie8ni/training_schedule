const [copyArray, chooseId, fuzzySearch, addData, chooseIdChangData,
  deleteIdData, sortByPrice] = require('./index');
// ------------------------------------------------------------------
// copyArray
test('copyArray() 若輸入為空值，結果得空陣列', () => {
  expect(copyArray('')).toEqual([]);
});
test('copyArray() 若輸入不為字串，結果得空陣列', () => {
  expect(copyArray(5, 6, 7)).toEqual([]);
});
test('copyArray() 若輸入正確資料', () => {
  expect(copyArray('123')).toEqual(['1', '2', '3', '4']);
});
