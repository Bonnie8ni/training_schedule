// 1. deep clone object
// 輸入物件，輸出一個深層複製的物件。兩者記憶體位置不能一樣。
const a = { text: 'aaa' };
const b = Array.from(a).slice();
b.text = 'bbb';
console.log(a.text);

// 2. add a format prototype to Date
// 為 Date 新增一個原型方法為 format，可以執行 new Date().format()


// 3. class constructor for Person

// 4. regexp replace all

// 5. regexp condition match email format