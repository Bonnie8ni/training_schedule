const fetch = require('node-fetch');

// 輸入陣列，輸出一個深層複製的陣列。兩者記憶體位置不能一樣。
const copyArray = (value => value.slice());
const a = [1, 2, 3];
const b = copyArray(a);
b.push(4);
// console.log(a, b);


// 用 fetch 取得陣列到程式中
fetch('https://raw.githubusercontent.com/ReactMaker/api_server/master/db/album.json')
  .then((res) => {
    if (res.status >= 200 && res.status < 300) return res.json();
    const error = new Error(res.statusText);
    error.response = res;
    throw error;
  })
  .then((json) => {
    // 2.搜尋資料中id為特定的資料
    const chooseId = (item => json.filter(value => value.id === item));
    console.log(chooseId(5));
  });
