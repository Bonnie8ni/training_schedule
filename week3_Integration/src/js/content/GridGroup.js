import MachineData from '../../api/MachineData';
import GridLine from './GridLine';

export default class GridGroup {
  constructor() {
    const $tpGridGroup = $($('#tp-grid-group').html());
    const $GridGroup = $tpGridGroup.find('.grid-group');
    const $GridList = $tpGridGroup.find('.grid-list');

    // 依照資料長度長出多少GridLine
    MachineData.forEach((lineData) => {
      const $GridLine = new GridLine(lineData);
      $GridList.append($GridLine.render());
    });


    $GridList.children().hide();
    const rowsPerPage = $($('#tp-page').html()).find('.rowsPerPage').text();
    for (let i = 0; i < rowsPerPage; i++) {
      $($GridList.children()[i]).show();
    }

    this.GridGroup = $GridGroup;
  }

  render() {
    return this.GridGroup;
  }
}
