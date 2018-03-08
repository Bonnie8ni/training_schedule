// 輸入陣列，輸出一個深層複製的陣列。兩者記憶體位置不能一樣。
const copyArray = ((value) => {
  const newArray = Array.from(Object.create(value));
  newArray.push('4');
  return newArray;
});
console.log(copyArray(['1', '2', '3']));
