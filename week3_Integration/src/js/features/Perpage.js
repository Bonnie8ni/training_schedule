import PageStorage from './PageStorage';

const perDefult = {
  name: '',
  active: false,
};
export default class Perpage {
  constructor(pageIndex) {
    const $tpPage = $($('#tp-page').html());
    const $pageItem = $tpPage.find('.page-item');
    const $pageLink = $pageItem.find('.th-page-link');

    // 頁數於位置+1
    perDefult.name = pageIndex + 1;
    // 寫入畫面
    $pageLink.text(perDefult.name);

    // 當在最後一頁時，若將資料刪光，會跳至所在頁前一頁
    if (PageStorage.totalPage() < PageStorage.currentPage) {
      PageStorage.currentPage -= 1;
    }

    // 現在所在頁面若等於點擊頁面則狀態改變
    if (PageStorage.currentPage === perDefult.name) {
      perDefult.active = true;
    } else {
      perDefult.active = false;
    }
    if (perDefult.active) {
      $pageItem.addClass('active');
    }

    // 頁數點擊時
    $pageItem.click((e) => {
      e.preventDefault();
      PageStorage.currentPage = parseInt($pageItem.text(), 10);
      $('.page-next').before(PageStorage.reloadRowPage());
    });
    this.Perpage = $pageItem;
  }
  render() {
    return this.Perpage;
  }
}
