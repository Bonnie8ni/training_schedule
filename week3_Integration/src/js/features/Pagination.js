import MachineData from '../../api/MachineData';
import PageStorage from './PageStorage';

export default class Pagination {
  constructor() {
    const $tpPage = $($('#tp-page').html());
    const $page = $tpPage.find('.page');
    const $pagination = $page.find('.pagination');
    const $rowsPerPage = $page.find('.rowsPerPage');
    const $pageTop = $page.find('.page-top');
    const $pagePrev = $page.find('.page-prev');
    const $pageNext = $page.find('.page-next');
    const $pageEnd = $page.find('.page-end');

    $pageNext.before(PageStorage.reloadRowPage());
    $rowsPerPage.text(PageStorage.allDataLength);

    $pageTop.click(() => {
      PageStorage.currentPage = 1;
      PageStorage.reloadRowPage();
    });
    $pagePrev.click(() => {
      if (PageStorage.currentPage === 1) return;
      PageStorage.currentPage -= 1;
      PageStorage.reloadRowPage();
    });
    $pageNext.click(() => {
      if (PageStorage.currentPage === Math.ceil(MachineData.length / PageStorage.pageSize)) return;
      PageStorage.currentPage += 1;
      PageStorage.reloadRowPage();
    });
    $pageEnd.click(() => {
      PageStorage.currentPage = Math.ceil(MachineData.length / PageStorage.pageSize);
      PageStorage.reloadRowPage();
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
