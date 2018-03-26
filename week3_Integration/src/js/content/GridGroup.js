import MachineData from './MachineData';
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

    this.GridGroup = $GridGroup;
  }

  render() {
    return this.GridGroup;
  }
}
