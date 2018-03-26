import ModalDialog from '../modal/ModalDialog';

const STATUS = {
  0: {
    light: 'status-online',
    data: 'Online',
  },
  1: {
    light: 'status-offline',
    data: 'Offline',
  },
  2: {
    light: 'status-error',
    data: 'Error',
  },
};

export default class GridLine {
  constructor(MachineData) {
    const $tpGridGroup = $($('#tp-grid-group').html());
    const $GridRow = $tpGridGroup.find('.grid-row');
    const $btnDetail = $GridRow.find('.btn-details');
    const $btnEdit = $GridRow.find('.btn-edit');
    const $btnDelete = $GridRow.find('.btn-delete');

    // 變更Status顯示方式
    const { light, data } = STATUS[MachineData.status];
    $GridRow.addClass(light);
    $GridRow.find('.row-status').addClass('light').text(data);

    $GridRow.find('.row-id').text(MachineData.id);
    $GridRow.find('.row-model').text(MachineData.model);
    $GridRow.find('.row-temp').text(MachineData.temperature);
    $GridRow.find('.row-address').text(MachineData.address);
    $GridRow.find('.row-region').text(MachineData.region);
    $GridRow.find('.row-details').append($btnDetail);
    $GridRow.find('.row-steup').append($btnEdit).append($btnDelete);

    this.GridLine = $GridRow;

    // 明細點擊後
    $btnDetail.click(() => {
      $('.modal').remove();
      const $ModalDialog = new ModalDialog('detail', MachineData);
      $('#content').append($ModalDialog.render());
    });
  }

  render() {
    return this.GridLine;
  }
}
