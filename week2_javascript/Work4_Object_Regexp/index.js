// 1. deep clone object
// 輸入物件，輸出一個深層複製的物件。兩者記憶體位置不能一樣。
const a = { text: 'aaa' };
const b = Array.from(a).slice();
b.text = 'bbb';
// console.log(a.text);

// 2. add a format prototype to Date
// 為 Date 新增一個原型方法為 format，可以執行 new Date().format()
Date.prototype.format = function () {
  const YYYY = new Date().getFullYear();
  const MM = new Date().getMonth() + 1;
  const DD = new Date().getDate();
  return `${YYYY}-${MM}-${DD}`;
}
// console.log(new Date().format());

// 3. class constructor for Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get sayhistrs() {
    return this.sayhi();
  }
  sayhi() {
    return `hi I'm ${this.name}, ${this.age} years old`;
  }
}
// const john = new Person('john', 18);
// console.log(john.sayhi());

// 4. regexp replace all
// 方法一
// const changeStr = ((strs, changed, toCahnge) => (strs.split(changed).join(toCahnge)));
// 方法二
const changeStr = ((strs, changed, toCahnge) => (strs.replace(new RegExp(changed, 'g'), toCahnge)));
// console.log(changeStr('abacadaeaf', 'a', '123'));

// 5. regexp condition match email format
const verifyEmail = ((email) => {
  if (email.match(/\S+@\S+/)) return true;
  return false;
});
// console.log(verifyEmail('Bonnie_Yu@Wistron.com'));
