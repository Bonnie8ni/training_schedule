
// 1.一個陣列中有許多個字串，寫一個function找出這些字串最長的共同字首。(Bonnie修改題目為從字串後面找)
// ---------------------------------------------------------
// ES5
// const longestCommonWord = ((strs) => {
//   if (!strs) return '';
//   const allStrs = Array.from(strs).reverse().join('').split(',');
//   if (allStrs.length < 2) return '';
//   let compare = Array.from(allStrs[0]);
//   allStrs.forEach((value) => {
//     compare.forEach((item, index) => {
//       if (item !== value[index]) {
//         compare = compare.slice(0, index);
//       }
//     });
//   });
//   return compare.reverse().join('');
// });
// ---------------------------------------------------------
// ES6
const longestCommonWord = ((strs) => {
  if (!strs) return '';
  if (typeof (strs) !== 'string') return '';
  if (strs.split(',').length !== 3) return '';
  const allStrs = [...strs].reverse().join('').split(',');
  let compare = [...allStrs[0]];
  allStrs.forEach((value) => {
    compare.forEach((item, index) => {
      if (item !== value[index]) {
        compare = compare.slice(0, index);
      }
    });
  });
  return compare.reverse().join('');
});
// console.log(longestCommonWord());


// 2.將一個字串反轉後回傳。
// ---------------------------------------------------------
// ES5
// const reverseStr = ((strs) => {
//   if (typeof (strs) !== 'string') return '';
//   const reverse = strs.split('').reverse().join('');
//   return reverse;
// });
// ---------------------------------------------------------
// ES6
const reverseStr = ((strs) => {
  if (!strs) return '';
  if (typeof (strs) !== 'string') return '';
  const reverse = [...strs].reverse().join('');
  return reverse;
});
// console.log(reverseStr());


// 3.給兩個字串s與t，回傳t是否為s的重組字
// ---------------------------------------------------------
// ES5
// const compareStr = ((firstStr, secondStr) => {
//   if (!firstStr || !secondStr) return '';
//   if (firstStr.length !== secondStr.length) return '';
//   return firstStr.split('').sort().join('') === secondStr.split('').sort().join('');
// });
// ---------------------------------------------------------
// ES6
const compareStr = ((firstStr, secondStr) => {
  if (!firstStr || !secondStr) return '';
  if (firstStr.length !== secondStr.length) return '';
  if (typeof (firstStr) !== 'string' || typeof (secondStr) !== 'string') return '';
  return [...firstStr].sort().join('') === [...secondStr].sort().join('');
});
// console.log(compareStr());


// 4.給一個英文字串，將裡面的母音字母反轉。
// ---------------------------------------------------------
// ES5
// const reverseAEIOU = ((strs) => {
//   if (typeof (strs) !== 'string') return '';
//   const strsArry = Array.from(strs);
//   const mother = 'aeiou';
//   const cardinality = strs.match(/[aeiou]/ig).reverse();
//   return strsArry.map((item) => {
//     if (mother.indexOf(item.toLowerCase()) !== -1) {
//       item = cardinality.shift();
//     }
//     return item;
//   }).join('');
// });
// ---------------------------------------------------------
// ES6
const reverseAEIOU = ((strs) => {
  if (!strs) return '';
  if (typeof (strs) !== 'string') return '';
  if (strs.match(/[aeiou]/ig) === null) return strs;
  const cardinality = strs.match(/[aeiou]/ig).reverse();
  const mother = 'aeiou';
  return [...strs].map((item) => {
    if (mother.indexOf(item.toLowerCase()) !== -1) {
      item = cardinality.shift();
    }
    return item;
  }).join('');
});
// console.log(reverseAEIOU('HellO'));


// 5.給二進制字串，將其換算成對應的十進制數字，需自己寫function
// 反轉後再開始
// ---------------------------------------------------------
// ES5
// const binaryToDecimal = ((total) => {
//   if (!total) return '';
//   let decimaltotal = 0;
//   const binaryStrs = Array.from(total).reverse();
//   binaryStrs.forEach((value, index) => {
//     if (value === '1') {
//       decimaltotal += (2 ** index);
//     }
//   });
//   return decimaltotal;
// });
// ---------------------------------------------------------
// ES6
const binaryToDecimal = ((total) => {
  if (!total) return 0;
  if (typeof (total) !== 'string') return 0;
  if (!total.match(/[0, 1]/)) return 0;
  let decimaltotal = 0;
  const binaryStrs = [...total].reverse();
  binaryStrs.forEach((value, index) => {
    if (value === '1') {
      decimaltotal += (2 ** index);
    }
  });
  return decimaltotal;
});
// console.log(binaryToDecimal(''));


// 6. 將給定數字轉換成二進制字串。如果字串長度不足 8 位，則在前面補 0 到滿8位。
const fillZero = ((strs, modArray) => {
  const quotient = Math.floor(strs / 2);
  const remainder = Math.floor(strs % 2);
  modArray.push(remainder);
  if (quotient !== 0) {
    fillZero(quotient, modArray);
  }
  return modArray;
});

const binaryNumber = ((decimal) => {
  if (!decimal) return '';
  if (typeof (decimal) !== 'number') return '';
  let modArray = [];
  modArray = fillZero(decimal, modArray).reverse();
  while (modArray.length < 8) {
    modArray.unshift(0);
  }
  return modArray.join('');
});
// console.log(binaryNumber());


// 7.將一個數字每個位數相加，直到剩個位數為止。
// ---------------------------------------------------------
// ES5
// const numberAddition = ((total) => {
//   if (!total) return '';
//   let strArray = Array.from(total.toString());
//   if (strArray.length === 1) return total;
//   let result = 0;
//   strArray.forEach(() => {
//     result = strArray.reduce((acc, val) => acc + parseInt(val, 10), 0);
//     strArray = Array.from(result.toString());
//   });
//   return result;
// });
// ---------------------------------------------------------
// ES6
const numberAddition = ((total) => {
  if (!total) return 0;
  if (typeof (total) !== 'number') return 0;
  let strArray = [...total.toString()];
  if (strArray.length === 1) return total;
  let result = 0;
  strArray.forEach(() => {
    result = strArray.reduce((acc, val) => acc + parseInt(val, 10), 0);
    strArray = [...result.toString()];
  });
  return result;
});
// console.log(numberAddition(18));


// 8. 反轉一個int整數。
const reverseInt = ((total) => {
  if (!total) return 0;
  if (typeof (total) !== 'number') return 0;
  if (total.length === 1) return total;
  const reverse = Array.from(Math.abs(total).toString()).reverse().join('');
  return (Math.sign(total) < 0) ? +reverse * (-1) : +reverse;
});
// console.log(reverseInt(-1234));

module.exports = [longestCommonWord, reverseStr, compareStr, reverseAEIOU,
  binaryToDecimal, binaryNumber, numberAddition, reverseInt];
