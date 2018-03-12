const [longestCommonWord, reverseStr, compareStr, reverseAEIOU, binaryToDecimal,
  binaryNumber, numberAddition, reverseInt] = require('./index');
// ------------------------------------------------------------------
// longestCommonWord
test('longestCommonWord() 若輸入為空值，結果得空', () => {
  expect(longestCommonWord('')).toBe('');
});
test('longestCommonWord() 若輸入不為字串，結果得空', () => {
  expect(longestCommonWord(5, 6, 7)).toBe('');
});
test('longestCommonWord() 若輸入不為三個值，結果得空', () => {
  expect(longestCommonWord('ABC, CCC')).toBe('');
});
test('longestCommonWord() 若輸入正確資料', () => {
  expect(longestCommonWord('ABCD, AACD, CCCD')).toBe('CD');
});
// ------------------------------------------------------------------
// reverseStr
test('reverseStr() 若輸入為空值，結果得空', () => {
  expect(reverseStr('')).toBe('');
});
test('reverseStr() 若輸入不為字串，結果得空', () => {
  expect(reverseStr(5)).toBe('');
});
test('reverseStr() 若輸入正確資料', () => {
  expect(reverseStr('ABCDEFG')).toBe('GFEDCBA');
});
// ------------------------------------------------------------------
// compareStr
test('compareStr() 若輸入為空值，結果得空', () => {
  expect(compareStr()).toBe('');
});
test('compareStr() 若輸入的字數不相等，結果得空', () => {
  expect(compareStr('AB', 'ABC')).toBe('');
});
test('compareStr() 若輸入不為字串，結果得空', () => {
  expect(compareStr(5, 6)).toBe('');
});
test('compareStr() 若輸入不完全為字串，結果得空', () => {
  expect(compareStr('ABC', 15)).toBe('');
});
test('compareStr() 若輸入正確資料', () => {
  expect(compareStr('ABCD', 'DACB')).toBe(true);
});
// ------------------------------------------------------------------
// reverseAEIOU
test('reverseAEIOU() 若輸入為空值，結果得空', () => {
  expect(reverseAEIOU()).toBe('');
});
test('reverseAEIOU() 若輸入不為字串，結果得空', () => {
  expect(reverseAEIOU(5)).toBe('');
});
test('reverseAEIOU() 若輸入正確資料', () => {
  expect(reverseAEIOU('AeLLEO')).toBe('OELLeA');
});
// ------------------------------------------------------------------
// binaryToDecimal
test('binaryToDecimal() 若輸入為空值，結果得0', () => {
  expect(binaryToDecimal()).toBe(0);
});
test('binaryToDecimal() 若輸入不為字串，結果得0', () => {
  expect(binaryToDecimal(5)).toBe(0);
});
test('binaryToDecimal() 字串裡面只限1和0，若違反結果得0', () => {
  expect(binaryToDecimal('abcd')).toBe(0);
});
test('binaryToDecimal() 若輸入正確資料', () => {
  expect(binaryToDecimal('1100')).toBe(12);
});
// ------------------------------------------------------------------
// binaryNumber
test('binaryNumber() 若輸入為空值，結果得空', () => {
  expect(binaryNumber()).toBe('');
});
test('binaryNumber() 若輸入不為數字，結果得空', () => {
  expect(binaryNumber('20')).toBe('');
});
test('binaryNumber() 若輸入正確資料', () => {
  expect(binaryNumber(25)).toBe('00010011');
});
// ------------------------------------------------------------------
// numberAddition
test('numberAddition() 若輸入為空值，結果得0', () => {
  expect(numberAddition()).toBe(0);
});
test('numberAddition() 若輸入不為數字，結果得0', () => {
  expect(numberAddition('100')).toBe(0);
});
test('numberAddition() 若輸入正確資料', () => {
  expect(numberAddition(100)).toBe(1);
});
// ------------------------------------------------------------------
// reverseInt
test('reverseInt() 若輸入為空值，結果得0', () => {
  expect(reverseInt()).toBe(0);
});
test('reverseInt() 若輸入不為數字，結果得0', () => {
  expect(reverseInt('100')).toBe(0);
});
test('reverseInt() 若輸入為個位數，結果等於輸入值', () => {
  expect(reverseInt(1)).toBe(1);
});
test('reverseInt() 若輸入正確資料', () => {
  expect(reverseInt(-100)).toBe(-1);
});
