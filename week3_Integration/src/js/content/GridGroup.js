import MachineData from '../../api/MachineData';
import GridLine from './GridLine';

export default class GridGroup {
  constructor(PER_PAGE_STORAGE) {
    const $tpGridGroup = $($('#tp-grid-group').html());
    const $GridGroup = $tpGridGroup.find('.grid-group');
    const $GridList = $tpGridGroup.find('.grid-list');

    const startPage = PER_PAGE_STORAGE.currentPage - 1;
    const endPage = PER_PAGE_STORAGE.pageSize;

    // 依照資料長度長出多少GridLine
    MachineData.forEach((lineData, index) => {
      if (index >= startPage && index < endPage) {
        const $GridLine = new GridLine(lineData);
        $GridList.append($GridLine.render());
      }
    });

    this.GridGroup = $GridGroup;
  }

  render() {
    return this.GridGroup;
  }
}
