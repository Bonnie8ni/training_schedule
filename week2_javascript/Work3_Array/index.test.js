const [copyArray, chooseId, fuzzySearch, addData, chooseIdChangData,
  deleteIdData, sortByPrice] = require('./index');
// ------------------------------------------------------------------
const fakeData = [
  {
    id: 1,
    img: 'https://unsplash.it/300/300?image=946',
    title: '美好時光1',
    desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
    price: 200,
    discount: true,
  },
  {
    id: 2,
    img: 'https://unsplash.it/300/300?image=944',
    title: '美好時光2',
    desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
    price: 300,
  },
  {
    id: 3,
    img: 'https://unsplash.it/300/300?image=882',
    title: '美好時光3',
    desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
    price: 400,
  },
  {
    id: 4,
    img: 'https://unsplash.it/300/300?image=874',
    title: '城市幻影1',
    desc: '如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感',
    price: 250,
    discount: true,
  },
  {
    id: 5,
    img: 'https://unsplash.it/300/300?image=868',
    title: '城市幻影2',
    desc: '如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感',
    price: 300,
  },
  {
    id: 6,
    img: 'https://unsplash.it/300/300?image=953',
    title: '城市幻影3',
    desc: '如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感',
    price: 350,
  },
  {
    id: 7,
    img: 'https://unsplash.it/300/300?image=1053',
    title: '香草生活1',
    desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
    price: 200,
    discount: true,
  },
  {
    id: 8,
    img: 'https://unsplash.it/300/300?image=940',
    title: '香草生活1',
    desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
    price: 400,
  },
  {
    id: 9,
    img: 'https://unsplash.it/300/300?image=798',
    title: '香草生活2',
    desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
    price: 600,
  },
  {
    id: 10,
    img: 'https://unsplash.it/300/300?image=1056',
    title: '香草生活3',
    desc: '生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
    price: 800,
  },
  {
    id: 11,
    img: 'https://unsplash.it/300/300?image=785',
    title: 'Spa Life',
    desc: '精選3000首100％spa音樂, 在人們回歸自然本質的風氣之下，生活更渴望也強調與大自然接近、與花草為伍。「SPA」乃源自於拉丁文的Solus Par Aqua',
    price: 2659,
  },
];
const addDataAnswer = [
  {
    id: 1,
    img: 'https://unsplash.it/300/300?image=946',
    title: '美好時光1',
    desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
    price: 200,
    discount: true,
  },
  {
    id: 2,
    img: 'https://unsplash.it/300/300?image=944',
    title: '美好時光2',
    desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
    price: 300,
  },
  {
    id: 3,
    img: 'https://unsplash.it/300/300?image=882',
    title: '美好時光3',
    desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
    price: 400,
  },
  {
    id: 4,
    img: 'https://unsplash.it/300/300?image=874',
    title: '城市幻影1',
    desc: '如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感',
    price: 250,
    discount: true,
  },
  {
    id: 5,
    img: 'https://unsplash.it/300/300?image=868',
    title: '城市幻影2',
    desc: '如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感',
    price: 300,
  },
  {
    id: 6,
    img: 'https://unsplash.it/300/300?image=953',
    title: '城市幻影3',
    desc: '如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感',
    price: 350,
  },
  {
    id: 7,
    img: 'https://unsplash.it/300/300?image=1053',
    title: '香草生活1',
    desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
    price: 200,
    discount: true,
  },
  {
    id: 8,
    img: 'https://unsplash.it/300/300?image=940',
    title: '香草生活1',
    desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
    price: 400,
  },
  {
    id: 9,
    img: 'https://unsplash.it/300/300?image=798',
    title: '香草生活2',
    desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
    price: 600,
  },
  {
    id: 10,
    img: 'https://unsplash.it/300/300?image=1056',
    title: '香草生活3',
    desc: '生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
    price: 800,
  },
  {
    id: 99, img: 'xxx', title: 'xxx', desc: 'xxx', price: 100,
  },
  {
    id: 11,
    img: 'https://unsplash.it/300/300?image=785',
    title: 'Spa Life',
    desc: '精選3000首100％spa音樂, 在人們回歸自然本質的風氣之下，生活更渴望也強調與大自然接近、與花草為伍。「SPA」乃源自於拉丁文的Solus Par Aqua',
    price: 2659,
  },
];
const changeDate = [
  {
    id: 1,
    img: 'https://unsplash.it/300/300?image=946',
    title: '美好時光1',
    desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
    price: 200,
    discount: true,
  },
  {
    id: 2,
    img: 'https://unsplash.it/300/300?image=944',
    title: '美好時光2',
    desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
    price: 300,
  },
  {
    id: 3,
    img: 'https://unsplash.it/300/300?image=882',
    title: '修改title',
    desc: '修改desc',
    price: 999,
  },
  {
    id: 4,
    img: 'https://unsplash.it/300/300?image=874',
    title: '城市幻影1',
    desc: '如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感',
    price: 250,
    discount: true,
  },
  {
    id: 5,
    img: 'https://unsplash.it/300/300?image=868',
    title: '城市幻影2',
    desc: '如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感',
    price: 300,
  },
  {
    id: 6,
    img: 'https://unsplash.it/300/300?image=953',
    title: '城市幻影3',
    desc: '如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感',
    price: 350,
  },
  {
    id: 7,
    img: 'https://unsplash.it/300/300?image=1053',
    title: '香草生活1',
    desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
    price: 200,
    discount: true,
  },
  {
    id: 8,
    img: 'https://unsplash.it/300/300?image=940',
    title: '香草生活1',
    desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
    price: 400,
  },
  {
    id: 9,
    img: 'https://unsplash.it/300/300?image=798',
    title: '香草生活2',
    desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
    price: 600,
  },
  {
    id: 10,
    img: 'https://unsplash.it/300/300?image=1056',
    title: '香草生活3',
    desc: '生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
    price: 800,
  },
  {
    id: 11,
    img: 'https://unsplash.it/300/300?image=785',
    title: 'Spa Life',
    desc: '精選3000首100％spa音樂, 在人們回歸自然本質的風氣之下，生活更渴望也強調與大自然接近、與花草為伍。「SPA」乃源自於拉丁文的Solus Par Aqua',
    price: 2659,
  },
];
const deletAfterDate = [
  {
    id: 1,
    img: 'https://unsplash.it/300/300?image=946',
    title: '美好時光1',
    desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
    price: 200,
    discount: true,
  },
  {
    id: 2,
    img: 'https://unsplash.it/300/300?image=944',
    title: '美好時光2',
    desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
    price: 300,
  },
  {
    id: 3,
    img: 'https://unsplash.it/300/300?image=882',
    title: '美好時光3',
    desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
    price: 400,
  },
  {
    id: 4,
    img: 'https://unsplash.it/300/300?image=874',
    title: '城市幻影1',
    desc: '如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感',
    price: 250,
    discount: true,
  },
  {
    id: 6,
    img: 'https://unsplash.it/300/300?image=953',
    title: '城市幻影3',
    desc: '如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感',
    price: 350,
  },
  {
    id: 7,
    img: 'https://unsplash.it/300/300?image=1053',
    title: '香草生活1',
    desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
    price: 200,
    discount: true,
  },
  {
    id: 8,
    img: 'https://unsplash.it/300/300?image=940',
    title: '香草生活1',
    desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
    price: 400,
  },
  {
    id: 9,
    img: 'https://unsplash.it/300/300?image=798',
    title: '香草生活2',
    desc: '讓生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
    price: 600,
  },
  {
    id: 10,
    img: 'https://unsplash.it/300/300?image=1056',
    title: '香草生活3',
    desc: '生命......自然伸展, 百分之百 純天然創作, 散發玫瑰、薰衣草、甜橙與波斯菊的音樂香氛',
    price: 800,
  },
  {
    id: 11,
    img: 'https://unsplash.it/300/300?image=785',
    title: 'Spa Life',
    desc: '精選3000首100％spa音樂, 在人們回歸自然本質的風氣之下，生活更渴望也強調與大自然接近、與花草為伍。「SPA」乃源自於拉丁文的Solus Par Aqua',
    price: 2659,
  },
];
const nullObject = {};
const nullArray = [];
const compareId5 = {
  id: 5,
  img: 'https://unsplash.it/300/300?image=868',
  title: '城市幻影2',
  desc: '如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感',
  price: 300,
};
const compareTitle = [{
  id: 1,
  img: 'https://unsplash.it/300/300?image=946',
  title: '美好時光1',
  desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
  price: 200,
  discount: true,
},
{
  id: 2,
  img: 'https://unsplash.it/300/300?image=944',
  title: '美好時光2',
  desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
  price: 300,
},
{
  id: 3,
  img: 'https://unsplash.it/300/300?image=882',
  title: '美好時光3',
  desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
  price: 400,
}];
// ------------------------------------------------------------------
// copyArray
describe('copyArray', () => {
  it('若輸入的值為空字串，結果得空陣列', () => {
    expect(copyArray('')).toEqual(nullArray);
  });
  it('若輸入的值不為字串，結果得空陣列', () => {
    expect(copyArray(5)).toEqual(nullArray);
  });
  it('若輸入的值為0-9以外的任何，結果得空陣列', () => {
    expect(copyArray('abc')).toEqual(nullArray);
  });
  it('若輸入的值為正確資料，結果得其值', () => {
    expect(copyArray('123')).toEqual(['1', '2', '3', '4']);
  });
});
// ------------------------------------------------------------------
// chooseId
describe('copyArray', () => {
  it('若輸入的值為空值，結果得空物件', () => {
    expect(chooseId(fakeData, '')).toEqual(nullObject);
  });
  it('若輸入的值不為數字，結果得空物件', () => {
    expect(chooseId(fakeData, '5')).toEqual(nullObject);
  });
  it('若輸入的值正確(找的到結果)，結果得其值', () => {
    expect(chooseId(fakeData, 5)).toEqual(expect.objectContaining(compareId5));
  });
  it('若輸入的值正確(找不到結果)，結果得空物件', () => {
    expect(chooseId(fakeData, 99)).toEqual(nullObject);
  });
});
// ----------------------------------------------------------------
// fuzzySearch
describe('fuzzySearch', () => {
  it('若輸入的值為空值，結果得空陣列', () => {
    expect(fuzzySearch(fakeData, '')).toEqual(nullArray);
  });
  it('若輸入的值不為字串，結果得空陣列', () => {
    expect(fuzzySearch(fakeData, 5)).toEqual(nullArray);
  });
  it('若輸入的值正確(找的到一筆結果)，結果得其值', () => {
    expect(fuzzySearch(fakeData, '城市幻影2')).toEqual([compareId5]);
  });
  it('若輸入的值正確(找的到多筆結果)，結果得其值', () => {
    expect(fuzzySearch(fakeData, '時光')).toEqual(compareTitle);
  });
  it('若輸入的值正確(找不到結果)，結果得空陣列', () => {
    expect(fuzzySearch(fakeData, '沒這標題')).toEqual(nullArray);
  });
});
// ----------------------------------------------------------------
// addData
// 欲輸入字串 data
const theAddData = {
  id: 99, img: 'xxx', title: 'xxx', desc: 'xxx', price: 100,
};
describe('addData', () => {
  it('若輸入的值為空值，結果得空陣列', () => {
    expect(addData(fakeData, '')).toEqual(nullArray);
  });
  it('若輸入的值不為物件(輸入陣列)，結果得空陣列', () => {
    expect(addData(fakeData, [1, 5, 6])).toEqual(nullArray);
  });
  it('若輸入的值不為物件(輸入數字)，結果得空陣列', () => {
    expect(addData(fakeData, 5)).toEqual(nullArray);
  });
  it('若輸入的值不為物件(輸入字串)，結果得空陣列', () => {
    expect(addData(fakeData, '5')).toEqual(nullArray);
  });
  it('若輸入的值正確，結果得其值', () => {
    expect(addData(fakeData, theAddData)).toEqual(addDataAnswer);
  });
});
// // ----------------------------------------------------------------
// chooseIdChangData
const theChangeData = (3, {
  title: '修改title', desc: '修改desc', price: 999,
});
describe('chooseIdChangData', () => {
  it('若輸入的值為空值，結果得空陣列', () => {
    expect(chooseIdChangData(fakeData, '', '')).toEqual(nullArray);
  });
  it('若輸入的index非數字，結果得空陣列', () => {
    expect(chooseIdChangData(fakeData, '', theChangeData)).toEqual(nullArray);
  });
  it('若輸入的modifyObject非object，結果得空陣列', () => {
    expect(chooseIdChangData(fakeData, 3, '')).toEqual(nullArray);
  });
  it('若輸入找不到相對應的id，結果得空陣列', () => {
    expect(chooseIdChangData(fakeData, 99, theChangeData)).toEqual(nullArray);
  });
  it('若輸入找到相對應的id，結果得空陣列', () => {
    expect(chooseIdChangData(fakeData, 3, theChangeData)).toEqual(changeDate);
  });
});
// ----------------------------------------------------------------
// deleteIdData
describe('deleteIdData', () => {
  it('若輸入的值為空值，結果得原始陣列', () => {
    expect(deleteIdData(fakeData, '')).toEqual(fakeData);
  });
  it('若輸入的值不為數字，結果得原始陣列', () => {
    expect(deleteIdData(fakeData, '5')).toEqual(fakeData);
  });
  it('若輸入的值為正確值，結果得刪除後的陣列', () => {
    expect(deleteIdData(fakeData, 5)).toEqual(deletAfterDate);
  });
});
// // ----------------------------------------------------------------
// // deleteIdData
// test('sortByPrice() 若輸入為空值，結果得空值', () => {
//   expect(sortByPrice(fakeData, '')).toBe('');
// });
// test('sortByPrice() 若輸入不為字串，結果得空值', () => {
//   expect(sortByPrice(fakeData, 123)).toBe('');
// });
// test('sortByPrice() 若輸入值不為ase/desc，結果得其直', () => {
//   expect(sortByPrice(fakeData, 'abc')).toBe('');
// });
