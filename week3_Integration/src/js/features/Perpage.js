export default class Perpage {
  constructor(pageNumber, PAGE_STORAGE) {
    const $tpPage = $($('#tp-page').html());
    const $pageItem = $tpPage.find('.page-item');
    const $pageLink = $pageItem.find('.th-page-link');
    const pageLine = [];
    if (pageNumber === 0) {
      $pageItem.addClass('active');
    }
    $pageLink.text(pageNumber + 1);
    $pageItem.click((e) => {
      e.preventDefault();
      PAGE_STORAGE.currentPage = pageNumber + 1;
      PAGE_STORAGE.reloadRowPage(pageLine);
      $('.page-next').before(pageLine);
      $('.page-item.active').removeClass('active');
      $($('.page-item')[pageNumber]).addClass('active');
    });
    this.Perpage = $pageItem;
  }
  render() {
    return this.Perpage;
  }
}
