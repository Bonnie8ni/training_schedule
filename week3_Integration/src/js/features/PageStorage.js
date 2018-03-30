import MachineData from '../../api/MachineData';
import GridLine from '../content/GridLine';
import Perpage from '../features/Perpage';

const PageStorage = {
  pageSize: 8,
  currentPage: 1,
  allDataLength: MachineData.length,
  totalPage: () => Math.ceil(PageStorage.allDataLength / PageStorage.pageSize),
  startPage: () => (PageStorage.pageSize * PageStorage.currentPage) - PageStorage.pageSize,
  endPage: () => PageStorage.pageSize * PageStorage.currentPage,
  reloadRowPage: () => {
    $('.grid-row').remove();
    $('.page-item').remove();
    // 重長page
    const pageLine = [];
    MachineData.map((data, index) => {
      if (index + 1 > PageStorage.totalPage()) return false;
      const $pageItem = new Perpage(index);
      pageLine.push($pageItem.render());
      return pageLine;
    });
    // 重長Row
    MachineData.forEach((lineData, index) => {
      if (index >= PageStorage.startPage() && index < PageStorage.endPage()) {
        const $GridLine = new GridLine(lineData);
        $('.grid-list').append($GridLine.render());
      }
    });
    // 重新帶入資料總筆數
    $('.rowsPerPage').text(PageStorage.allDataLength);
    $('.page-next').before(pageLine);
    return pageLine;
  },
};
export default PageStorage;
