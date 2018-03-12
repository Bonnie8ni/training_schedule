const [copyArray, chooseId, fuzzySearch, addData, chooseIdChangData,
  deleteIdData, sortByPrice] = require('./index');
// ------------------------------------------------------------------
// copyArray
test('copyArray() 若輸入為空值，結果得空陣列', () => {
  expect(copyArray('')).toEqual([]);
});
test('copyArray() 若輸入不為字串，結果得空陣列', () => {
  expect(copyArray()).toEqual([]);
});
test('copyArray() 若字串輸入0-9以外的任何，結果得空陣列', () => {
  expect(copyArray('abc')).toEqual([]);
});
test('copyArray() 若輸入正確資料', () => {
  expect(copyArray('123')).toEqual(['1', '2', '3', '4']);
});
// ------------------------------------------------------------------
// chooseId
test('chooseId() 若輸入為空值，結果得空陣列', () => {
  expect(chooseId()).toBe('');
});
test('chooseId() 若輸入不為數字，結果得空陣列', () => {
  expect(chooseId()).toBe('');
});
test('chooseId() 若輸入正確資料', () => {
  expect(chooseId().toBe('');
});
