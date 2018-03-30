
export default class GridGroup {
  constructor() {
    const $tpGridGroup = $($('#tp-grid-group').html());
    const $GridGroup = $tpGridGroup.find('.grid-group');
    this.GridGroup = $GridGroup;
  }

  render() {
    return this.GridGroup;
  }
}
