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
    const $editAddress = $rowAddress.find('.edit-address');
    const $rowRegion = $GridRow.find('.row-region');
    const $spanRegion = $rowRegion.find('.span-region');
    const $editRegion = $rowRegion.find('.edit-region');

    // 變更Status顯示方式
    const { style, name } = STATUS[lineData.status];
    $GridRow.addClass(style);
    $GridRow.find('.row-status').addClass('light').text(name);

    $GridRow.find('.row-id').text(id);
    $GridRow.find('.row-model').text(model);
    $GridRow.find('.row-temp').text(temperature);
    $spanAddress.text(address);
    $editAddress.val(address).hide();
    $spanRegion.text(region);
    $editRegion.val(region).hide();

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
        $editAddress.hide();
        $editRegion.hide();
        $('.btn-details').removeClass('disabled').attr('disabled', false);
        $('.btn-edit').removeClass('disabled').attr('disabled', false);
        $('.btn-delete').removeClass('disabled').attr('disabled', false);
      } else {
        $btnDetail.hide();
        $btnEdit.hide();
        $btnDelete.hide();
        $btnCancle.show();
        $btnOk.show();
        $spanAddress.hide();
        $spanRegion.hide();
        $editAddress.show();
        $editRegion.show();
        $('.btn-details').addClass('disabled').attr('disabled', true);
        $('.btn-edit').addClass('disabled').attr('disabled', true);
        $('.btn-delete').addClass('disabled').attr('disabled', true);
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
          <p class="detailTitle">${key.toUpperCase()}：</p>
          <p class="detailText">${lineData[key]}</p>
        </div>`
      ));
      $('.modal-body').html(detailRow.join(''));
    });

    // 編輯功能
    $btnEdit.click(() => {
      $inputDisplay(true);
    });

    // 編輯功能-取消
    $btnCancle.click(() => {
      $inputDisplay(false);
      $editAddress.val($spanAddress.text());
      $editRegion.val($spanRegion.text());
    });

    // 編輯功能-確定
    $btnOk.click(() => {
      if ($editAddress.val().trim().length === 0) {
        alert('【Address 錯誤】請輸入完整資料');
        return;
      }
      if ($editRegion.val().trim().length === 0) {
        alert('【Region 錯誤】請輸入完整資料');
        return;
      }
      $inputDisplay(false);
      $spanAddress.text($editAddress.val());
      $spanRegion.text($editRegion.val());

      // 找尋修改id的位置
      const index = MachineData.findIndex(line => line.id === id);
      // 將編輯的資料覆蓋原本的資料
      MachineData[index].address = $editAddress.val();
      MachineData[index].region = $editRegion.val();
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
