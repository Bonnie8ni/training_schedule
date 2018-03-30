import MachineData from '../../api/MachineData';

export default class Pagination {
  constructor(PAGE_STORAGE) {
    const $tpPage = $($('#tp-page').html());
    const $page = $tpPage.find('.page');
    this.$pagination = $page.find('.pagination');
    this.$rowsPerPage = $page.find('.rowsPerPage');
    this.$pageTop = $tpPage.find('.page-top');
    this.$pagePrev = $tpPage.find('.page-prev');
    this.$pageNext = $tpPage.find('.page-next');
    this.$pageEnd = $tpPage.find('.page-end');
    this.PAGE_STORAGE = PAGE_STORAGE;
    this.pageLine = [];

    this.changePage();

    this.$pageTop.click(() => {
      PAGE_STORAGE.currentPage = 1;
      this.changePage();
    });
    this.$pagePrev.click(() => {
      if (PAGE_STORAGE.currentPage === 1) return;
      PAGE_STORAGE.currentPage -= 1;
      this.changePage();
    });
    this.$pageNext.click(() => {
      if (PAGE_STORAGE.currentPage === Math.ceil(MachineData.length / PAGE_STORAGE.pageSize)) return;
      PAGE_STORAGE.currentPage += 1;
      this.changePage();
    });
    this.$pageEnd.click(() => {
      PAGE_STORAGE.currentPage = Math.ceil(MachineData.length / PAGE_STORAGE.pageSize);
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
      $pageEnd, $rowsPerPage, PAGE_STORAGE,
    } = this;
    let { pageLine } = this;
    pageLine = [];
    PAGE_STORAGE.reloadRowPage(pageLine);

    // 帶入總筆數
    $rowsPerPage.text(PAGE_STORAGE.allDataLength);

    $pagination
      .append($pageTop)
      .append($pagePrev)
      .append(pageLine)
      .append($pageNext)
      .append($pageEnd);

    $('.page-item.active').removeClass('active');
    $($('.page-item')[PAGE_STORAGE.currentPage - 1]).addClass('active');
  }

  render() {
    return this.Pagination;
  }
}
