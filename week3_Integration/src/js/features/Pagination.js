import MachineData from '../../api/MachineData';
// import GridLine from '../content/GridLine';

export default class Pagination {
  constructor() {
    const $tpPage = $($('#tp-page').html());
    const $page = $tpPage.find('.page');
    const $pagination = $page.find('.pagination');
    const $pagePrev = $pagination.find('.page-prev');
    console.log($pagePrev);

    const pageSize = $page.find('.rowsPerPage').text();
    const pagesCount = MachineData.length;
    const totalPages = Math.ceil(pagesCount / pageSize);
    console.log(totalPages);

    this.Pagination = $page;
  }
  render() {
    return this.Pagination;
  }
}
