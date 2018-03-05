function longestCommonWord() {

    var strs = document.getElementById('test1Str').value.split(',');
    var answer = document.getElementById('answer');

    if (strs == null || strs.length == 0) return "";
    var same = strs[0];

    for (var i = 1; i < strs.length; i++) {

        var str = strs[i];

        for (var j = 0; j < same.length; j++) {

            if (same[j] != str.charAt(j)) {
                break;
            }

        }
        same = same.slice(0, j);
    }
    answer.innerHTML = same;
}

function reverseStr() {

    var strs = document.getElementById('test2Str').value.split('');
    var answer = document.getElementById('answer');

    var reverse = [];

    for (var i = strs.length - 1; i >= 0; i--) {
        reverse.push(strs[i]);
    }

    answer.innerHTML = reverse.join('');
}

function compareStr() {

    var first_str = document.getElementById('test3_1Str').value.split('');
    var second_str = document.getElementById('test3_2Str').value.split('');
    var answer = document.getElementById('answer');

    if (first_str.sort().join('') !== second_str.sort().join('')) answer.innerHTML = false;
    else answer.innerHTML = true;
}