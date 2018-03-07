// 1.一個陣列中有許多個字串，寫一個function找出這些字串最長的共同字首。
// Bonnie修改題目為從字串後面找

const longestCommonWord = ((strs) => {
  const allStrs = strs.split(',');
  if (allStrs.length < 2) return '';
  let compare = allStrs[0];
  for (let i = 0; i < allStrs.length; i += 1) {
    for (let j = 0; j < compare.length; j++) {
      if (compare[j] !== allStrs[i][j]) {
        compare = compare.slice(0, j);
      }
    }
  }
  return compare;
});
console.log(longestCommonWord('cebdaf,cebaf,cedfdfdaf'));


// 2.將一個字串反轉後回傳。
const reverseStr = ((strs) => {
  if (typeof (strs) !== 'string') return '';
  const reverse = strs.split('').reverse().join('');
  return reverse;
});
console.log(reverseStr('ABCD'));


// 3.給兩個字串s與t，回傳t是否為s的重組字
const compareStr = ((firstStr, secondStr) => {
  if (firstStr.length !== secondStr.length) return false;
  firstStr = firstStr.split('').sort().join('');
  secondStr = secondStr.split('').sort().join('');
  return firstStr === secondStr;
});
console.log(compareStr('ABCD', 'DCAB'));


// 4.給一個英文字串，將裡面的母音字母反轉。
const reverseAEIOU = ((strs) => {
  if (typeof (strs) !== 'string') return '';
  const strsArry = Array.from(strs);
  const mother = 'aeiou';
  const cardinality = strs.match(/[aeiou]/ig).reverse();
  for (let i = 0; i < strsArry.length; i++) {
    if (mother.indexOf(strsArry[i].toLowerCase()) !== -1) {
      strsArry[i] = cardinality.shift();
    }
  }
  return strsArry.join('');
});
console.log(reverseAEIOU('aELLiOau'));


// 5.給二進制字串，將其換算成對應的十進制數字，需自己寫function
const binary = ((total) => {
  let ValueBeforeConversion = 0;
  for (let i = 0; i < total.length; i++) {
    if (total[i] === '1') {
      const exponent = total.length - i - 1;
      ValueBeforeConversion += parseInt(Math.pow(2, exponent));
    }
  }
  return ValueBeforeConversion;
});
console.log(binary('11000'));


// 6. 將給定數字轉換成二進制字串。如果字串長度不足 8 位，則在前面補 0 到滿8位。
const fillZero = ((strs) => {
  let binaryStr = strs.toString(2);
  for (let i = 0; i < 8 - binaryStr.length; i++) {
    binaryStr = '0' + binaryStr;
  }
  return binary;
});
console.log(fillZero(25));


// 7.將一個數字每個位數相加，直到剩個位數為止。
const numberAddition = ((total) => {
  let strArray = Array.from(total.toString());

  if (strArray.length === 1) return total;

  let result = 0;

  while (strArray.length > 1) {
    result = strArray.reduce((acc, val) => acc + parseInt(val, 10), 0);
    strArray = Array.from(result.toString());
  }
  return result;
});
console.log(numberAddition(1234567890));


// 8. 反轉一個int整數。
const reverseInt = ((total) => {
  if (total.length === 1) return total;
  const reverse = Math.abs(total).toString().split('').reverse().join('');
  return (Math.sign(total) < 0) ? reverse * (-1) : reverse;
});
console.log(reverseInt(1234567890));
