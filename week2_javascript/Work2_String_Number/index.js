//1. 一個陣列中有許多個字串，寫一個function找出這些字串最長的共同字首。
//Bonnie修改題目為從字串後面找

// 1. 先抓出 cebd
// 2. 抓出 cebd 和 cebaa 拆成陣列比對 找出一樣的值存在新的變數
// 3. 新的變數和 cedfdfdf 比對 找出一樣的值存在新的變數

var longestCommonWord = ((strs) => {
    let allStrs = strs.split(',');
    if (allStrs.length < 2) return '';
    let compare = allStrs[0];

    for (let i = 0; i < allStrs.length; i++) {
        for (let j = 0; j < compare.length; j++) {
            if (compare[j] != allStrs[i][j]) {
                compare = compare.slice(0, j);
            }
        }
    }
    return compare;
})
console.log(longestCommonWord('cebdaf,cebaf,cedfdfdaf'));



//2. 將一個字串反轉後回傳。
var reverseStr = ((strs) => {
    if (typeof (strs) != String) return '';
    let reverse = strs.split('').reverse().join('');
    return reverse;
})




//3. 給兩個字串s與t，回傳t是否為s的重組字
var compareStr = ((first_str, second_str) => {
    first_str = first_str.split('').sort().join('');
    second_str = second_str.split('').sort().join('');
    return first_str !== second_str ? false : true;
})


//4. 給一個英文字串，將裡面的母音字母反轉。
var reverseAEIOU = ((strs) => {
    var strsArry = Array.from(strs);
    var mother = Array.from('aeiou');
    var cardinality = strs.match(/[aeiou]/ig).reverse();
    for (i = 0; i < strsArry.length; i++) {
        if (mother.indexOf(strsArry[i]) != -1) {
            strsArry[i] = cardinality.shift();
        }
    }
    return strsArry.join('');
})




//5. 給二進制字串，將其換算成對應的十進制數字，需自己寫function

var binary = ((total) => {
    var ValueBeforeConversion = 0;
    total = total.toString().split('');
    for (i = 0; i < total.length; i++) {
        if (total[i] === '1') {
            exponent = total.length - parseInt(i, 10) - 1;
            ValueBeforeConversion += parseInt(Math.pow(2, exponent));
        }
    }
    return ValueBeforeConversion;
})



//6. 將給定數字轉換成二進制字串。如果字串長度不足 8 位，則在前面補 0 到滿8位。

var fillZero = ((strs) => {
    var strLength = 8 - strs.length;
    for (let i = 0; i < strLength; i++) {
        strs = '0' + strs;
    }
    return strs;
})



//7. 將一個數字每個位數相加，直到剩個位數為止。
var numberAddition = ((total) => {
    var strArray = Array.from(total.toString());

    if (strArray.length === 1) return total;

    var result = 0;

    while (strArray.length > 1) {
        result = strArray.reduce((acc, val) => acc + parseInt(val, 10), 0);
        strArray = Array.from(result.toString());
    }
    return result;
});



//8. 反轉一個int整數。
var reverseInt = ((total) => {
    var reverse = Math.abs(total).toString().split('').reverse().join('');
    return (Math.sign(total) < 0) ? reverse * (-1) : reverse;
})