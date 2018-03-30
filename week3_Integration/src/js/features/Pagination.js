import MachineData from '../../api/MachineData';
import PageStorage from './PageStorage';

export default class Pagination {
  constructor() {
    const $tpPage = $($('#tp-page').html());
    const $page = $tpPage.find('.page');
    const $pagination = $page.find('.pagination');
    const $pageTop = $page.find('.page-top');
    const $pagePrev = $page.find('.page-prev');
    const $pageNext = $page.find('.page-next');
    const $pageEnd = $page.find('.page-end');

    $pageNext.before(PageStorage.reloadRowPage());

    $pageTop.click(() => {
      PageStorage.currentPage = 1;
      PageStorage.reloadRowPage();
      $('.page-next').before(PageStorage.reloadRowPage());
    });
    $pagePrev.click(() => {
      if (PageStorage.currentPage === 1) return;
      PageStorage.currentPage -= 1;
      PageStorage.reloadRowPage();
      $('.page-next').before(PageStorage.reloadRowPage());
    });
    $pageNext.click(() => {
      if (PageStorage.currentPage === Math.ceil(MachineData.length / PageStorage.pageSize)) return;
      PageStorage.currentPage += 1;
      PageStorage.reloadRowPage();
      $('.page-next').before(PageStorage.reloadRowPage());
    });
    $pageEnd.click(() => {
      PageStorage.currentPage = Math.ceil(MachineData.length / PageStorage.pageSize);
      PageStorage.reloadRowPage();
      $('.page-next').before(PageStorage.reloadRowPage());
    });

    $pagination.find('a').click((e) => {
      e.preventDefault();
    });

    this.Pagination = $page;
  }

  render() {
    return this.Pagination;
  }
}
