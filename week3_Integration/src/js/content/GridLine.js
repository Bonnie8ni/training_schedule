import MachineData from '../../api/MachineData';

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
  constructor(lineData) {
    const {
      id, model, temperature, address, region, disable,
    } = lineData;
    const $tpGridGroup = $($('#tp-grid-group').html());
    const $GridRow = $tpGridGroup.find('.grid-row');
    const $btnDetail = $GridRow.find('.btn-details');
    const $btnDelete = $GridRow.find('.btn-delete');

    // 變更Status顯示方式
    const { style, name } = STATUS[lineData.status];
    $GridRow.addClass(style);
    $GridRow.find('.row-status').addClass('light').text(name);

    $GridRow.find('.row-id').text(id);
    $GridRow.find('.row-model').text(model);
    $GridRow.find('.row-temp').text(temperature);
    $GridRow.find('.row-address').text(address);
    $GridRow.find('.row-region').text(region);

    this.GridLine = $GridRow;

    // 依照狀態鎖定按鈕
    if (disable === true) {
      $GridRow.find('.btn-details').addClass('disabled').attr('disabled', true);
      $GridRow.find('.btn-edit').addClass('disabled').attr('disabled', true);
      $GridRow.find('.btn-delete').addClass('disabled').attr('disabled', true);
    }

    // 明細點擊後
    $btnDetail.click(() => {
      $('.modal-title').text('Details');
      $('.btn-primary').hide();
      const detailRow = Object.keys(lineData).map(key => (
        `<div class="detailRow"><p class="detailTitle">${key}：</p><p class="detailText">${lineData[key]}</p></div>`
      ));
      $('.modal-body').html(detailRow.join(''));
    });

    // 刪除點擊後
    $btnDelete.click(() => {
      console.log(MachineData);
      const confirm = window.confirm('Are you sure you want to delete this data?');
      if (!confirm) return;
      MachineData.splice(MachineData.findIndex(alldata => alldata.id === id), 1);
      console.log(MachineData);

      // 清空現有列表畫面
      $('.grid-list').html('');

      // 重長GridRow
      MachineData.forEach((line) => {
        const $GridLine = new GridLine(line);
        $('.grid-list').append($GridLine.render());
      });
    });
  }

  render() {
    return this.GridLine;
  }
}
