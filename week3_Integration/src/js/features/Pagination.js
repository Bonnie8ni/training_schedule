import MachineData from '../../api/MachineData';
import Perpage from '../features/Perpage';
import Features from '../features/Features';
import GridLine from '../content/GridLine';

export default class Pagination {
  constructor() {
    const $tpPage = $($('#tp-page').html());
    const $page = $tpPage.find('.page');
    const $pagination = $page.find('.pagination');
    const $pageTop = $page.find('.page-top');
    const $pagePrev = $page.find('.page-prev');
    const $pageNext = $page.find('.page-next');
    const $pageEnd = $page.find('.page-end');

    this.PageStorage = {
      pageSize: 8,
      currentPage: 1,
      machineData: MachineData,
      allDataLength: () => this.PageStorage.machineData.length,
      totalPage: () => Math.ceil(this.PageStorage.allDataLength() / this.PageStorage.pageSize),
      startPage: () => (this.PageStorage.pageSize * this.PageStorage.currentPage) - this.PageStorage.pageSize,
      endPage: () => {
        if (this.PageStorage.pageSize * this.PageStorage.currentPage > this.PageStorage.allDataLength()) return this.PageStorage.allDataLength();
        return this.PageStorage.pageSize * this.PageStorage.currentPage;
      },
      reloadRowPage: () => {
        $('.controls-box').remove();
        $('.grid-row').remove();
        $('.page-item').remove();

        // 帶入功能區
        const $Features = new Features(this.PageStorage);
        $('.controls').append($Features.render());

        // 重長page
        const pageLine = [];
        this.PageStorage.machineData.forEach((pagedata, index) => {
          if (index + 1 > this.PageStorage.totalPage()) return;
          const $pageItem = new Perpage(index, this.PageStorage);
          pageLine.push($pageItem.render());
        });
        // 重長Row
        if (this.PageStorage.machineData.length === 0) {
          $('.grid-list').append('<div class="grid-row">No data found!</div>');
        } else {
          this.PageStorage.machineData.forEach((lineData, index) => {
            if (index >= this.PageStorage.startPage() && index < this.PageStorage.endPage()) {
              const $GridLine = new GridLine(lineData, this.PageStorage);
              $('.grid-list').append($GridLine.render());
            }
          });
        }

        // 重新帶入資料總筆數
        $('.rowsPerPage').text(this.PageStorage.allDataLength);
        $('.page-next').before(pageLine);
      },
    };

    $pageTop.click(() => {
      this.PageStorage.currentPage = 1;
      this.PageStorage.reloadRowPage();
    });
    $pagePrev.click(() => {
      if (this.PageStorage.currentPage === 1) return;
      this.PageStorage.currentPage -= 1;
      this.PageStorage.reloadRowPage();
    });
    $pageNext.click(() => {
      if (this.PageStorage.currentPage === Math.ceil(this.PageStorage.machineData.length / this.PageStorage.pageSize)) return;
      this.PageStorage.currentPage += 1;
      this.PageStorage.reloadRowPage();
    });
    $pageEnd.click(() => {
      this.PageStorage.currentPage = Math.ceil(this.PageStorage.machineData.length / this.PageStorage.pageSize);
      this.PageStorage.reloadRowPage();
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
