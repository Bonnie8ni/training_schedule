import MachineData from './MachineData';
import GridLine from './GridLine';

export default class GridGroup {
  constructor() {
    const $tpGridGroup = $($('#tp-grid-group').html());
    const $GridGroup = $tpGridGroup.find('.grid-group');
    const $GridList = $tpGridGroup.find('.grid-list');

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
