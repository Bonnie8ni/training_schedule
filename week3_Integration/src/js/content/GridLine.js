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
    const $btnEdit = $GridRow.find('.btn-edit');
    const $btnDelete = $GridRow.find('.btn-delete');
    const $btnCancle = $GridRow.find('.btn-cancle');
    const $btnOk = $GridRow.find('.btn-check');
    const $rowAddress = $GridRow.find('.row-address');
    const $spanAddress = $rowAddress.find('.span-address');
    const $inputAddress = $rowAddress.find('.input-address');
    const $rowRegion = $GridRow.find('.row-region');
    const $spanRegion = $rowRegion.find('.span-region');
    const $inputRegion = $rowRegion.find('.input-region');

    // 變更Status顯示方式
    const { style, name } = STATUS[lineData.status];
    $GridRow.addClass(style);
    $GridRow.find('.row-status').addClass('light').text(name);

    $GridRow.find('.row-id').text(id);
    $GridRow.find('.row-model').text(model);
    $GridRow.find('.row-temp').text(temperature);
    $spanAddress.text(address);
    $inputAddress.val(address).hide();
    $spanRegion.text(region);
    $inputRegion.val(region).hide();

    this.GridLine = $GridRow;

    // 按鈕是否 disable
    const $inputDisplay = ((isShow = false) => {
      if (!isShow) {
        $btnDetail.show();
        $btnEdit.show();
        $btnDelete.show();
        $btnCancle.hide();
        $btnOk.hide();
        $spanAddress.show();
        $spanRegion.show();
        $inputAddress.hide();
        $inputRegion.hide();
        $('.btn-details').removeClass('disabled');
        $('.btn-edit').removeClass('disabled');
        $('.btn-delete').removeClass('disabled');
      } else {
        $btnDetail.hide();
        $btnEdit.hide();
        $btnDelete.hide();
        $btnCancle.show();
        $btnOk.show();
        $spanAddress.hide();
        $spanRegion.hide();
        $inputAddress.show();
        $inputRegion.show();
        $('.btn-details').addClass('disabled');
        $('.btn-edit').addClass('disabled');
        $('.btn-delete').addClass('disabled');
      }
    });

    // 按鈕初始值
    $inputDisplay();

    // 依照狀態鎖定按鈕
    if (disable === true) {
      $GridRow.find('.btn-details').attr('disabled', true);
      $GridRow.find('.btn-edit').attr('disabled', true);
      $GridRow.find('.btn-delete').attr('disabled', true);
    }

    // 明細功能
    $btnDetail.click(() => {
      $('.modal-title').text('Details');
      $('.btn-primary').hide();
      const detailRow = Object.keys(lineData).map(key => (
        `<div class="detailRow">
          <p class="detailTitle">${key}：</p>
          <p class="detailText">${lineData[key]}</p>
        </div>`
      ));
      $('.modal-body').html(detailRow.join(''));
    });

    // 編輯功能
    $btnEdit.click(() => {
      $inputDisplay(true);
    });

    // 取消編輯功能
    $btnCancle.click(() => {
      $inputDisplay(false);
      $inputAddress.val($spanAddress.text());
      $inputRegion.val($spanRegion.text());
    });

    // 確定編輯功能
    $btnOk.click(() => {
      $inputDisplay(false);
      $spanAddress.text($inputAddress.val());
      $spanRegion.text($inputRegion.val());

      // 找尋修改id的位置
      const index = MachineData.findIndex(line => line.id === id);
      // 將編輯的資料覆蓋原本的資料
      MachineData[index].address = $inputAddress.val();
      MachineData[index].region = $inputAddress.val();
    });

    // 刪除功能
    $btnDelete.click(() => {
      // 刪除前詢問是否要刪除
      const confirm = window.confirm('Are you sure you want to delete this data?');
      if (!confirm) return;
      // 確定後將資料刪除
      MachineData.splice(MachineData.findIndex(alldata => alldata.id === id), 1);

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
