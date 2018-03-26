const STATUS = {
  0: {
    style: 'status-online',
    name: 'Online',
  },
  1: {
    style: 'status-offline',
    name: 'Offline',
  },
  2: {
    style: 'status-error',
    name: 'Error',
  },
};

export default class GridLine {
  constructor(MachineData) {
    const {
      id, model, temperature, address, region,
    } = MachineData;
    const $tpGridGroup = $($('#tp-grid-group').html());
    const $GridRow = $tpGridGroup.find('.grid-row');
    const $btnDetail = $GridRow.find('.btn-details');

    // 變更Status顯示方式
    const { style, name } = STATUS[MachineData.status];
    $GridRow.addClass(style);
    $GridRow.find('.row-status').addClass('light').text(name);

    $GridRow.find('.row-id').text(id);
    $GridRow.find('.row-model').text(model);
    $GridRow.find('.row-temp').text(temperature);
    $GridRow.find('.row-address').text(address);
    $GridRow.find('.row-region').text(region);

    this.GridLine = $GridRow;

    // 明細點擊後
    $btnDetail.click(() => {
      $('.modal-title').text('Details');
      $('.btn-primary').hide();
      const detailRow = Object.keys(MachineData).map(key => (
        `<div class="detailRow"><p class="detailTitle">${key}：</p><p class="detailText">${MachineData[key]}</p></div>`
      ));
      $('.modal-body').html(detailRow.join(''));
    });
  }

  render() {
    return this.GridLine;
  }
}
