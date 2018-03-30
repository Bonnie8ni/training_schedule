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
    perDefult.name = pageIndex + 1;
    if (PageStorage.totalPage() < PageStorage.currentPage) {
      PageStorage.currentPage -= 1;
    }
    if (PageStorage.currentPage === perDefult.name) {
      perDefult.active = true;
    } else {
      perDefult.active = false;
    }
    if (perDefult.active) {
      $pageItem.addClass('active');
    }
    $pageLink.text(pageIndex + 1);
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
