import MachineData from '../../api/MachineData';
import Perpage from './Perpage';
import GridLine from '../content/GridLine';

export default class Pagination {
  constructor(PER_PAGE_STORAGE) {
    const $tpPage = $($('#tp-page').html());
    const $page = $tpPage.find('.page');
    const $pagination = $page.find('.pagination');
    const $pageTop = $tpPage.find('.page-top');
    const $pagePrev = $tpPage.find('.page-prev');
    const $pageNext = $tpPage.find('.page-next');
    const $pageEnd = $tpPage.find('.page-end');

    this.rowsPerPage = PER_PAGE_STORAGE.pageSize;
    this.nowPage = PER_PAGE_STORAGE.currentPage;
    this.totalPage = Math.ceil(MachineData.length / this.rowsPerPage);
    const pageLine = [];

    MachineData.map((data, index) => {
      const pageNumber = index / this.rowsPerPage;
      const $pageItem = new Perpage(pageNumber);
      if (index % this.rowsPerPage === 0) {
        pageLine.push($pageItem.render());
      }
      return pageLine;
    });

    $pageTop.click(() => {
      this.nowPage = 1;
      this.changePage();
    });
    $pagePrev.click(() => {
      if (this.nowPage === 1) return;
      this.nowPage -= 1;
      this.changePage();
    });
    $pageNext.click(() => {
      if (this.nowPage === this.totalPage) return;
      this.nowPage += 1;
      this.changePage();
    });
    $pageEnd.click(() => {
      this.nowPage = this.totalPage;
      this.changePage();
    });

    $pagination
      .append($pageTop)
      .append($pagePrev)
      .append(pageLine)
      .append($pageNext)
      .append($pageEnd);

    $pagination.find('a').click((e) => {
      e.preventDefault();
    });

    this.Pagination = $page;
  }

  // 切換頁面
  changePage() {
    const { rowsPerPage, nowPage, totalPage } = this;
    if (nowPage <= totalPage) {
      $('.page-item.active').removeClass('active');
      $($('.page-item')[nowPage - 1]).addClass('active');

      $('.grid-row').remove();
      const endPage = nowPage * rowsPerPage;
      const startPage = endPage - rowsPerPage;

      MachineData.forEach((lineData, index) => {
        if (index >= startPage && index < endPage) {
          const $GridLine = new GridLine(lineData);
          $('.grid-list').append($GridLine.render());
        }
      });
    } else {
      return;
    }
  }

  render() {
    return this.Pagination;
  }
}
