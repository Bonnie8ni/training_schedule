import MachineData from '../../api/MachineData';
import Perpage from './Perpage';

export default class Pagination {
  constructor() {
    const $tpPage = $($('#tp-page').html());
    const $page = $tpPage.find('.page');
    const $rowsPerPage = $page.find('.rowsPerPage').text();
    const $pagination = $page.find('.pagination');
    const $pageTop = $tpPage.find('.page-top');
    const $pagePrev = $tpPage.find('.page-prev');
    const $pageNext = $tpPage.find('.page-next');
    const $pageEnd = $tpPage.find('.page-end');
    const pageLine = [];

    MachineData.map((data, index) => {
      const pageNumber = index / $rowsPerPage;
      const $pageItem = new Perpage(index, pageNumber, $rowsPerPage);
      if (index % $rowsPerPage === 0) {
        pageLine.push($pageItem.render());
      }
      return pageLine;
    });

    $pageTop.click(() => {
      $('.page-item.active').removeClass('active');
      $('.page-item').removeClass('active').first().addClass('active');
      this.changePage();
    });
    $pagePrev.click(() => {
      if ($('.page-item').first().hasClass('active')) return;
      $('.page-item.active').removeClass('active').prev().addClass('active');
      this.changePage();
    });
    $pageNext.click(() => {
      if ($('.page-item').last().hasClass('active')) return;
      $('.page-item.active').removeClass('active').next().addClass('active');
      this.changePage();
    });
    $pageEnd.click(() => {
      $('.page-item.active').removeClass('active');
      $('.page-item').removeClass('active').last().addClass('active');
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

  changePage() {
    console.log(MachineData);
    $('.grid-row').hide();
    const rowsPerPage = $($('#tp-page').html()).find('.rowsPerPage').text();
    const cardinal = parseInt($('.page-item.active').text(), 10);
    const end = cardinal * rowsPerPage;
    const start = end - rowsPerPage;
    for (let i = start; i < end; i++) {
      $($('.grid-row')[i]).show();
    }
  }

  render() {
    return this.Pagination;
  }
}
