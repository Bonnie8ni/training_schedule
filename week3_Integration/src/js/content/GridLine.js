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
  constructor(lineData, PageStorage) {
    const {
      id, model, temperature, address, region,
    } = lineData;
    this.lineData = lineData;
    this.pageStorage = PageStorage;
    const $tpGridGroup = $($('#tp-grid-group').html());
    const $GridRow = $tpGridGroup.find('.grid-row');
    this.$GridRow = $GridRow;
    const $btnDetail = $GridRow.find('.btn-details');
    const $btnEdit = $GridRow.find('.btn-edit');
    const $btnDelete = $GridRow.find('.btn-delete');
    const $btnCancle = $GridRow.find('.btn-cancle');
    const $btnOk = $GridRow.find('.btn-check');
    const $rowAddress = $GridRow.find('.row-address');
    const $rowRegion = $GridRow.find('.row-region');
    this.$spanAddress = $rowAddress.find('.span-address');
    this.$editAddress = $rowAddress.find('.edit-address');
    this.$spanRegion = $rowRegion.find('.span-region');
    this.$editRegion = $rowRegion.find('.edit-region');

    // 變更Status顯示方式
    const { style, name } = STATUS[lineData.status];
    $GridRow.addClass(style);
    $GridRow.find('.row-status').addClass('light').text(name);
    $GridRow.find('.row-id').text(id);
    $GridRow.find('.row-model').text(model);
    $GridRow.find('.row-temp').text(temperature);
    this.$spanAddress.text(address);
    this.$editAddress.val(address).hide();
    this.$spanRegion.text(region);
    this.$editRegion.val(region).hide();
    $btnCancle.hide();
    $btnOk.hide();

    this.GridLine = $GridRow;
    // 按鈕是否 disable
    this.$inputDisplay = ((isShow = false) => {
      if (!isShow) {
        $btnDetail.show();
        $btnEdit.show();
        $btnDelete.show();
        $btnCancle.hide();
        $btnOk.hide();
        this.$spanAddress.show();
        this.$spanRegion.show();
        this.$editAddress.hide();
        this.$editRegion.hide();
        $('.btn-details').attr('disabled', false);
        $('.btn-edit').attr('disabled', false);
        $('.btn-delete').attr('disabled', false);
      } else {
        $btnDetail.hide();
        $btnEdit.hide();
        $btnDelete.hide();
        $btnCancle.show();
        $btnOk.show();
        this.$spanAddress.hide();
        this.$spanRegion.hide();
        this.$editAddress.show();
        this.$editRegion.show();
        $('.btn-details').attr('disabled', true);
        $('.btn-edit').attr('disabled', true);
        $('.btn-delete').attr('disabled', true);
      }
    });

    // 判斷按鈕顯示隱藏
    this.checkDisableFunc();

    // 明細功能
    $btnDetail.click(() => {
      this.showDetailsFunc();
    });

    // 編輯功能
    $btnEdit.click(() => {
      this.$inputDisplay(true);
    });

    // 編輯功能-確定
    $btnOk.click(() => {
      this.saveEditGridlineFunc();
    });

    // 編輯功能-取消
    $btnCancle.click(() => {
      this.cancleEditGridlineFunc();
    });

    // 刪除功能
    $btnDelete.click(() => {
      this.deleteGridlineFunc();
    });
  }

  // 判斷按鈕顯示隱藏
  checkDisableFunc() {
    const { lineData, $GridRow } = this;
    if (lineData.disable === true) {
      $GridRow.find('.btn-details').addClass('disabled').attr('disabled', true);
      $GridRow.find('.btn-edit').addClass('disabled').attr('disabled', true);
      $GridRow.find('.btn-delete').addClass('disabled').attr('disabled', true);
    }
  }

  // 顯示明細
  showDetailsFunc() {
    const { lineData } = this;
    $('.modal-title').text('Details');
    $('.btn-save').hide();
    const detailRow = Object.keys(lineData).map(key => (
      `<div class="detailRow">
        <p class="detailTitle">${key.toUpperCase()}：</p>
        <p class="detailText">${lineData[key]}</p>
      </div>`
    ));
    $('.modal-body').html(detailRow.join(''));
  }

  // 編輯-儲存
  saveEditGridlineFunc() {
    const {
      $spanAddress, $editAddress, $spanRegion, $editRegion, $inputDisplay, lineData, pageStorage,
    } = this;
    // 驗證編輯輸入框資料是否正確
    if (!this.verificationFunc()) return;

    // 確認按鈕狀態
    $inputDisplay(false);
    $spanAddress.text($editAddress.val());
    $spanRegion.text($editRegion.val());
    // 找尋修改id的位置
    const index = pageStorage.machineData.findIndex(line => line.id === lineData.id);
    // 將編輯的資料覆蓋原本的資料
    pageStorage.machineData[index].address = $editAddress.val();
    pageStorage.machineData[index].region = $editRegion.val();
  }

  // 編輯-取消
  cancleEditGridlineFunc() {
    const { $inputDisplay, $editAddress, $editRegion } = this;
    $inputDisplay(false);
    $editAddress.val(this.$spanAddress.text());
    $editRegion.val(this.$spanRegion.text());
  }

  // 刪除資料
  deleteGridlineFunc() {
    const { lineData, pageStorage } = this;
    // 刪除前詢問是否要刪除
    const confirm = window.confirm('Are you sure you want to delete this data?');
    if (!confirm) return;
    // 確定後將資料刪除
    pageStorage.machineData.splice(pageStorage.machineData.findIndex(alldata => alldata.id === lineData.id), 1);
    // 重新長出列表和分頁
    pageStorage.reloadRowPage();
  }

  // 驗證輸入資料
  verificationFunc() {
    const { $GridRow } = this;
    let isPass = true;
    // 輸入資料不可空白
    let allAddTitle = [];
    $GridRow.find('.edit-check').each((index) => {
      // 找出新增資料長度
      const checkItem = $($GridRow.find('.edit-check')[index]).val().length;
      // 若有資料
      if (checkItem === 0) {
        // 找出input的id(我將address,region 塞在input#id裡)
        const addTitle = $($GridRow.find('.edit-check')[index])[0].id;
        allAddTitle = [...allAddTitle, `${addTitle}：請輸入完整資料\n`];
        isPass = false;
      }
    });
    // 顯示在同個Alert裡
    if (allAddTitle.length !== 0) {
      alert(allAddTitle.join(''));
      isPass = false;
    }

    return isPass;
  }

  render() {
    return this.GridLine;
  }
}
