
function longestCommonWord() {

    var str = document.getElementById('test1_str').value.split(',');
    var answer = document.getElementById('answer');
    answer.innerHTML = "";
    var same = [];

    for (i = 1; i < str.length; i++) {
        for (j = 0; j < str[i].length; j++) {
            if (Array.from(str[0])[j] === Array.from(str[i])[j]) {
                same.push(Array.from(str[0])[j]);
                break;
            }
        }
    }
    console.log(same.toString());
}