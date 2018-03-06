//1. 一個陣列中有許多個字串，寫一個function找出這些字串最長的共同字首。
//Bonnie修改題目為從字串後面找

var longestCommonWord = ((strs) => {

    strs = strs.split(',');
    if (strs == null || strs.length == 0) return '';
    var same = strs[0];

    for (var i = strs.length - 1; i >= 0; i--) {

        var str = strs[i];

        for (var j = same.length - 1; j >= 0; j--) {

            if (same[j] != str.charAt(j)) {
                break;
            }
        }
        same = same.replace(same[j], '$');
    }
    same = same.replace(/\$/g, '');
    return same;
})
//console.log(longestCommonWord('abc,cac,ebc'))


//2. 將一個字串反轉後回傳。
var reverseStr = ((strs) => {
    strs = strs.split('').reverse().join('');
    return strs;
})
console.log(reverseStr('hello'));


//3. 給兩個字串s與t，回傳t是否為s的重組字
var compareStr = ((first_str, second_str) => {
    first_str = first_str.split('').sort().join('');
    second_str = second_str.split('').sort().join('');
    return first_str !== second_str ? false : true;
})
//console.log(compareStr('abc', 'acb'));


//4. 給一個英文字串，將裡面的母音字母反轉。

//5. 給二進制字串，將其換算成對應的十進制數字，需自己寫function

//6. 將給定數字轉換成二進制字串。如果字串長度不足 8 位，則在前面補 0 到滿8位。

//7. 將一個數字每個位數相加，直到剩個位數為止。

//8. 反轉一個int整數。