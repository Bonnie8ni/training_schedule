// import MachineData from '../../api/MachineData';
// import GridLine from '../content/GridLine';

export default class Pagination {
  constructor() {
    const $tpPage = $($('#tp-page').html());
    const $pagination = $tpPage.find('.pagination');
    const $rowsPerPage = $tpPage.find('.rowsPerPage');
    console.log($pagination, $rowsPerPage);
    // const $pagination = $tpPage.find('.pagination');

    this.Pagination = $tpPage;
  }
  render() {
    return this.Pagination;
  }
}
