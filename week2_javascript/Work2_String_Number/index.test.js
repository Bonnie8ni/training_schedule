const [longestCommonWord, reverseStr, compareStr, reverseAEIOU, binaryToDecimal,
  binaryNumber, numberAddition, reverseInt] = require('./index');
// ------------------------------------------------------------------
// longestCommonWord
describe('longestCommonWord', () => {
  it('若輸入為空值，結果得空字串', () => {
    expect(longestCommonWord('')).toBe('');
  });
  it('若輸入不為字串，結果得空字串', () => {
    expect(longestCommonWord(5, 6, 7)).toBe('');
  });
  it('若輸入不為三個值，結果得空字串', () => {
    expect(longestCommonWord('ABC, CCC')).toBe('');
  });
  it('若輸入值沒有相同字尾，結果得空字串', () => {
    expect(longestCommonWord('A, B, C')).toBe('');
  });
  it('若輸入值沒有相同字尾，結果得正確值', () => {
    expect(longestCommonWord('ABCD, AACD, CCCD')).toBe('CD');
  });
});
// ------------------------------------------------------------------
// reverseStr
describe('reverseStr', () => {
  it('若輸入為空值，結果得空', () => {
    expect(reverseStr('')).toBe('');
  });
  it('若輸入不為字串，結果得空', () => {
    expect(reverseStr()).toBe('');
  });
  it('若輸入正確資料，結果得正確值', () => {
    expect(reverseStr('ABCDEFG')).toBe('GFEDCBA');
  });
});
// ------------------------------------------------------------------
// compareStr
describe('compareStr', () => {
  it('若輸入變數值為空值，結果得空', () => {
    expect(compareStr()).toBe('');
  });
  it('若輸入的變數長度不相等，結果得空', () => {
    expect(compareStr('AB', 'ABC')).toBe('');
  });
  it('若輸入的變數不為字串，結果得空', () => {
    expect(compareStr(5, 6)).toBe('');
  });
  it('若輸入的變數不完全為字串，結果得空', () => {
    expect(compareStr('ABC', 15)).toBe('');
  });
  it('若輸入的變數值正確，結果得正確值(true)', () => {
    expect(compareStr('ABCD', 'DACB')).toBe(true);
  });
  it('若輸入的變數值正確，結果得正確值(false)', () => {
    expect(compareStr('ABCD', 'AAAA')).toBe(false);
  });
});
// ------------------------------------------------------------------
// reverseAEIOU
describe('reverseAEIOU', () => {
  it('若輸入為空值，結果得空', () => {
    expect(reverseAEIOU()).toBe('');
  });
  it('若輸入不為字串，結果得空', () => {
    expect(reverseAEIOU(5)).toBe('');
  });
  it('若輸入正確資料(有母音)，結果得正確值', () => {
    expect(reverseAEIOU('AeLLEO')).toBe('OELLeA');
  });
  it('若輸入正確資料(沒母音)，結果得正確值', () => {
    expect(reverseAEIOU('CCTTV')).toBe('CCTTV');
  });
});
// ------------------------------------------------------------------
// binaryToDecimal
describe('binaryToDecimal', () => {
  it('若輸入為空值，結果得0', () => {
    expect(binaryToDecimal()).toBe(0);
  });
  it('若輸入不為字串，結果得0', () => {
    expect(binaryToDecimal(5)).toBe(0);
  });
  it('若輸入不為1和0，結果得0', () => {
    expect(binaryToDecimal('abcd')).toBe(0);
  });
  it('若輸入正確資料，結果得正確值', () => {
    expect(binaryToDecimal('1100')).toBe(12);
  });
});
// ------------------------------------------------------------------
// binaryNumber
describe('binaryNumber', () => {
  it('若輸入的值為空值，結果得空', () => {
    expect(binaryNumber()).toBe('');
  });
  it('若輸入的值不為數字，結果得空', () => {
    expect(binaryNumber('20')).toBe('');
  });
  it('若輸入的值正確(超過8位)，結果正德正確值', () => {
    expect(binaryNumber(123456789)).toBe('111010110111100110100010101');
  });
  it('若輸入的值正確(小於8位)，結果得正確值', () => {
    expect(binaryNumber(25)).toBe('00011001');
  });
});
// ------------------------------------------------------------------
// numberAddition
describe('numberAddition', () => {
  it('若輸入為空值，結果得0', () => {
    expect(numberAddition()).toBe(0);
  });
  it('若輸入不為數字，結果得0', () => {
    expect(numberAddition('100')).toBe(0);
  });
  it('若輸入正確資料，結果得正確值', () => {
    expect(numberAddition(100)).toBe(1);
  });
});
// ------------------------------------------------------------------
// reverseInt
describe('reverseInt', () => {
  it('若輸入為空值，結果得0', () => {
    expect(reverseInt()).toBe(0);
  });
  it('若輸入不為數字，結果得0', () => {
    expect(reverseInt('100')).toBe(0);
  });
  it('若輸入為個位數，結果等於輸入值', () => {
    expect(reverseInt(1)).toBe(1);
  });
  it('若輸入正確資料(正數)，結果得正確值', () => {
    expect(reverseInt(100)).toBe(1);
  });
  it('若輸入正確資料(負數)，結果得正確值', () => {
    expect(reverseInt(-100)).toBe(-1);
  });
});
