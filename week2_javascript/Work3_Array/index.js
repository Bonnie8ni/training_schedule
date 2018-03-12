const fetch = require('node-fetch');


const copyArray = ((value) => {
  if (!value) return [];
  if (typeof (value) !== 'string') return [];
  if (!value.match(new RegExp(/[0-9]/))) return [];
  return [...value, '4'];
});
// console.log(copyArray());


// 2.搜尋資料中id為特定的資料
const chooseId = ((json, item) => {
  if (!item) return '';
  if (typeof (item) !== 'number') return '';
  console.log(json.find(value => value.id === item));
  return json.find(value => value.id === item);
});

// 3. 模糊搜尋title包含特定文字的資料
const fuzzySearch = ((keyword) => {
  if (!keyword) return '';
  return json.filter(value => value.title.search(keyword) !== -1);
});
// console.log(fuzzySearch('美好'));


// 4. 新增一筆id=99的資料(內容隨意)，於id=10和id=11中間
// 更改題目為10之後
// ---------------------------------------------------------
// ES5
// const addData = ((data) => {
//   if (!data) return '';
//   const newjson = json.slice();
//   const index = newjson.findIndex(value => value.id === 10);
//   newjson.splice(index + 1, 0, data);
//   return newjson;
// });
// ---------------------------------------------------------
// ES6
const addData = ((data) => {
  if (!data) return '';
  const newjson = [...json];
  const index = newjson.findIndex(value => value.id === 10);
  newjson.splice(index + 1, 0, data);
  return newjson;
});
// console.log(addData({
//   id: 99, img: 'xxx', title: 'xxx', desc: 'xxx', price: 100,
// }));


// 5.修改id為特定的資料
// ---------------------------------------------------------
// ES5
// const chooseIdChangData = ((index, modifyObject) => {
//   if (!index || !modifyObject) return '';
//   const newjson = json.slice();
//   Object.assign(newjson.find(value => value.id === index), modifyObject);
//   return newjson;
// });
// ---------------------------------------------------------
// ES6
const chooseIdChangData = ((index, modifyObject) => {
  if (!index || !modifyObject) return '';
  const newjson = [...json];
  Object.assign(newjson.find(value => value.id === index), modifyObject);
  return newjson;
});
// console.log(chooseIdChangData(3, { title: '修改title', desc: '修改desc', price: 999 }));


// 6.刪除特定id的資料
// ---------------------------------------------------------
// ES5
// const deleteIdData = ((item) => {
//   if (!item) return '';
//   const newjson = json.slice();
//   let index = newjson.findIndex(value => value.id === item);
//   newjson.splice(index, 1);
//   // console.log(`已經刪除完 id 為 ${item} 的陣列`);
//   // 驗證時上面這行要開
//   return newjson;
// });
// ---------------------------------------------------------
// ES6
const deleteIdData = ((item) => {
  if (!item) return '';
  const newjson = [...json];
  let index = newjson.findIndex(value => value.id === item);
  newjson.splice(index, 1);
  // console.log(`已經刪除完 id 為 ${item} 的陣列`);
  // 驗證時上面這行要開
  return newjson;
});
// console.log(deleteIdData(5));


// 7.依照價格排序
const sortByPrice = ((sort) => {
  if (!sort) return '';
  if (sort === 'asc') json.sort((acc, cur) => (acc.price > cur.price ? 1 : -1));
  else json.sort((acc, cur) => (acc.price > cur.price ? -1 : 1));
  return json;
});
// console.log(sortByPrice('desc'));


// 用 fetch 取得陣列到程式中
fetch('https://raw.githubusercontent.com/ReactMaker/api_server/master/db/album.json')
  .then((res) => {
    if (res.status >= 200 && res.status < 300) return res.json();
    const error = new Error(res.statusText);
    error.response = res;
    throw error;
  })
  .then((json) => {
    chooseId(json, 5);
  });

module.exports = [copyArray, chooseId, fuzzySearch, addData, chooseIdChangData,
  deleteIdData, sortByPrice];
