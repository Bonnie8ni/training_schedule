import MachineData from '../../api/MachineData';
import Perpage from './Perpage';
import GridLine from '../content/GridLine';

export default class Pagination {
  constructor(PER_PAGE_STORAGE) {
    const $tpPage = $($('#tp-page').html());
    const $page = $tpPage.find('.page');
    this.$pagination = $page.find('.pagination');
    this.$rowsPerPage = $page.find('.rowsPerPage');
    this.$pageTop = $tpPage.find('.page-top');
    this.$pagePrev = $tpPage.find('.page-prev');
    this.$pageNext = $tpPage.find('.page-next');
    this.$pageEnd = $tpPage.find('.page-end');
    this.PER_PAGE_STORAGE = PER_PAGE_STORAGE;
    this.pageLine = [];

    this.changePage();

    this.$pageTop.click(() => {
      PER_PAGE_STORAGE.currentPage = 1;
      this.changePage();
    });
    this.$pagePrev.click(() => {
      if (PER_PAGE_STORAGE.currentPage === 1) return;
      PER_PAGE_STORAGE.currentPage -= 1;
      this.changePage();
    });
    this.$pageNext.click(() => {
      if (PER_PAGE_STORAGE.currentPage === Math.ceil(MachineData.length / PER_PAGE_STORAGE.pageSize)) return;
      PER_PAGE_STORAGE.currentPage += 1;
      this.changePage();
    });
    this.$pageEnd.click(() => {
      PER_PAGE_STORAGE.currentPage = Math.ceil(MachineData.length / PER_PAGE_STORAGE.pageSize);
      this.changePage();
    });

    this.$pagination.find('a').click((e) => {
      e.preventDefault();
    });
    this.Pagination = $page;
  }

  // 切換頁面
  changePage() {
    const {
      $pagination, $pageTop, $pagePrev, $pageNext,
      $pageEnd, $rowsPerPage, PER_PAGE_STORAGE,
    } = this;
    let { pageLine } = this;
    $('.grid-row').remove();
    const endPage = PER_PAGE_STORAGE.currentPage * PER_PAGE_STORAGE.pageSize;
    const startPage = endPage - PER_PAGE_STORAGE.pageSize;

    MachineData.forEach((lineData, index) => {
      if (index >= startPage && index < endPage) {
        const $GridLine = new GridLine(lineData);
        $('.grid-list').append($GridLine.render());
      }
    });

    $('.page-item').remove();
    pageLine = [];
    MachineData.forEach((data, index) => {
      const pageNumber = index / PER_PAGE_STORAGE.pageSize;
      const $pageItem = new Perpage(pageNumber);
      if (index % PER_PAGE_STORAGE.pageSize === 0) {
        pageLine.push($pageItem.render());
      }
    });
    $rowsPerPage.text(MachineData.length);
    $pagination
      .append($pageTop)
      .append($pagePrev)
      .append(pageLine)
      .append($pageNext)
      .append($pageEnd);

    $('.page-item.active').removeClass('active');
    $($('.page-item')[PER_PAGE_STORAGE.currentPage - 1]).addClass('active');
  }

  render() {
    return this.Pagination;
  }
}
