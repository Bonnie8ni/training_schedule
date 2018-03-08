// 輸入陣列，輸出一個深層複製的陣列。兩者記憶體位置不能一樣。
const copyArray = ((value) => {
  console.log(111);
  return value.slice();
});

const a = [1, 2, 3];
const b = copyArray(a);
b.push(4);
console.log(a, b);
