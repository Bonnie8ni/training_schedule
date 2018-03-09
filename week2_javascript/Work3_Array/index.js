const fetch = require('node-fetch');

// 1.輸入陣列，輸出一個深層複製的陣列。兩者記憶體位置不能一樣。
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
    // console.log(chooseId(5));

    // 3. 模糊搜尋title包含特定文字的資料
    const fuzzySearch = (keyword => json.filter(value => value.title.search(keyword) === 0));
    // console.log(fuzzySearch('美好'));

    // 4. 新增一筆id=99的資料(內容隨意)，於id=10和id=11中間
    const addData = ((data) => {
      json.splice(10, 0, data);
      return json;
    });
    console.log(addData({
      id: 99, img: 'xxx', title: 'xxx', desc: 'xxx', price: 100,
    }));
  });
