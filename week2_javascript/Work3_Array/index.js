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
  if (!item) return {};
  if (typeof (item) !== 'number') return {};
  return json.find(value => value.id === item) || {};
});

// 3. 模糊搜尋title包含特定文字的資料
const fuzzySearch = ((json, title) => {
  if (!title) return [];
  if (typeof (title) !== 'string') return [];
  return json.filter(value => value.title.search(title) !== -1) || [];
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
const addData = ((json, data) => {
  if (!data) return [];
  if (Object.prototype.toString.call(data) !== '[object Object]') return [];
  const newjson = [...json];
  const index = newjson.findIndex(value => value.id === 10) || [];
  newjson.splice(index + 1, 0, data);
  return newjson;
});


// 5.修改id為特定的資料
// ---------------------------------------------------------
// ES5
// const chooseIdChangData = ((json, index, modifyObject) => {
//   if (!index || !modifyObject) return '';
//   const newjson = json.slice();
//   Object.assign(newjson.find(value => value.id === index), modifyObject);
//   console.log(json);
//   return newjson;
// });
// ---------------------------------------------------------
// ES6
const chooseIdChangData = ((json, index, modifyObject) => {
  if (!index || !modifyObject) return [];
  if (typeof (index) !== 'number') return [];
  if (Object.prototype.toString.call(modifyObject) !== '[object Object]') return [];
  const copyjson = Object.assign('', json);
  const newjson = [...copyjson].find(value => value.id === index);
  if (newjson === undefined) return [];
  console.log(json);
  Object.assign(newjson, modifyObject);
  console.log(json);
  return copyjson;
});


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
const deleteIdData = ((json, item) => {
  if (!item) return json;
  if (typeof (item) !== 'number') return json;
  const newjson = [...json];
  let index = newjson.findIndex(value => value.id === item);
  newjson.splice(index, 1);
  // console.log(`已經刪除完 id 為 ${item} 的陣列`);
  // 驗證時上面這行要開
  return newjson;
});
// console.log(deleteIdData(5));


// 7.依照價格排序
const sortByPrice = ((json, sort) => {
  if (!sort) return '';
  if (typeof (sort) !== 'string') return '';
  if (sort === 'asc') json.sort((acc, cur) => (acc.price > cur.price ? 1 : -1));
  else if (sort === 'desc') json.sort((acc, cur) => (acc.price > cur.price ? -1 : 1));
  else return '';
  return json;
});


// 用 fetch 取得陣列到程式中
fetch('https://raw.githubusercontent.com/ReactMaker/api_server/master/db/album.json')
  .then((res) => {
    if (res.status >= 200 && res.status < 300) return res.json();
    const error = new Error(res.statusText);
    error.response = res;
    throw error;
  })
  .then((json) => {
    const chooseIdNew = chooseId(json, 0);
    const fuzzySearchNew = fuzzySearch(json, '');
    const addDataNew = addData(json, {});
    const chooseIdChangDataNew = chooseIdChangData(json, 0, {});
    const deleteIdDataNew = deleteIdData(json, 0);
    const sortByPriceNew = sortByPrice(json, '');
  });

module.exports = [copyArray, chooseId, fuzzySearch, addData, chooseIdChangData,
  deleteIdData, sortByPrice];
