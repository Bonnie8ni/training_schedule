import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/main.scss';
import MenuData from '../api/MenuData';
import MachineData from '../api/MachineData';
import MenuCard from './menu/MenuCard';
import Features from './features/Features';
import GridLine from './content/GridLine';
import GridGroup from './content/GridGroup';
import Pagination from './features/Pagination';
import Perpage from './features/Perpage';

// hot reload for development
if (process.env.NODE_ENV !== 'production') {
  require('../index.html');
}

const PAGE_STORAGE = {
  pageSize: 8,
  currentPage: 1,
  allDataLength: MachineData.length,
  totalPage: () => (Math.ceil(PAGE_STORAGE.allDataLength / PAGE_STORAGE.pageSize)),
  startPage: () => (PAGE_STORAGE.pageSize * PAGE_STORAGE.currentPage) - PAGE_STORAGE.pageSize,
  endPage: () => PAGE_STORAGE.pageSize * PAGE_STORAGE.currentPage,
  reloadRowPage: (pageLine) => {
    $('.grid-row').remove();
    $('.page-item').remove();
    // 重長page
    for (let number = 0; number < PAGE_STORAGE.totalPage(); number++) {
      const $pageItem = new Perpage(number, PAGE_STORAGE);
      pageLine.push($pageItem.render());
    }
    // 重長Row
    MachineData.forEach((lineData, index) => {
      if (index >= PAGE_STORAGE.startPage() && index < PAGE_STORAGE.endPage()) {
        const $GridLine = new GridLine(lineData, PAGE_STORAGE);
        $('.grid-list').append($GridLine.render());
      }
    });
    // 重新帶入資料總筆數
    $('.rowsPerPage').text(PAGE_STORAGE.allDataLength);
  },
};

$().ready(() => {
  // 帶入選單
  MenuData.forEach((menu) => {
    const $MenuCard = new MenuCard(menu);
    $('#menu').append($MenuCard.render());
  });

  // 帶入功能區
  const $Features = new Features(PAGE_STORAGE);
  $('#content').append($Features.render());

  // 帶入列表
  const $GridGroup = new GridGroup(PAGE_STORAGE);
  $('#content').append($GridGroup.render());

  // 帶入分頁
  const $Pagination = new Pagination(PAGE_STORAGE);
  $('#content').append($Pagination.render());
});

