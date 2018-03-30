export default class GridGroup {
  constructor(PAGE_STORAGE) {
    const $tpGridGroup = $($('#tp-grid-group').html());
    const $GridGroup = $tpGridGroup.find('.grid-group');

    const pageLine = [];
    PAGE_STORAGE.reloadRowPage(pageLine);

    this.GridGroup = $GridGroup;
  }

  render() {
    return this.GridGroup;
  }
}
