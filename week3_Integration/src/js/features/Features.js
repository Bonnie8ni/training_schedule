import MachineData from '../../api/MachineData';
import Pagination from './Pagination';

export default class Features {
  constructor() {
    const $tpControls = $($('#tp-controls').html());
    const $addMachine = $tpControls.find('.add-machine');
    const $btnSearch = $tpControls.find('.btn-search');
    this.$inputKeyword = $tpControls.find('.input-keyword');

    // 新增機台
    $addMachine.click(() => {
      this.addMachineFunc();
    });

    // 新增機台-儲存
    $('.btn-save').click(() => {
      this.saveAddMachineFunc();
    });

    // 搜尋資料
    $btnSearch.click(() => {
      this.searchData();
    });

    this.Features = $tpControls;
  }

  // 新增機台
  addMachineFunc() {
    $('.btn-save').show();
    const detailRow = Object.keys(MachineData[0]).map(key => (
      `<div class="detailRow">
          <p class="detailTitle">${key.toUpperCase()}：</p>
          <input class="add-${key} add-check border" id="${key.toUpperCase()}"/>
        </div>`
    ));
    $('.modal-body').html(detailRow.join(''));
  }

  // 新增機台-儲存
  saveAddMachineFunc() {
    const $modalModel = $('.modal-model');
    const $addId = $modalModel.find('.add-id').val();
    const $addModel = $modalModel.find('.add-model').val();
    const $addTemperature = $modalModel.find('.add-temperature').val();
    const $addAddress = $modalModel.find('.add-address').val();
    const $addRegion = $modalModel.find('.add-region').val();
    this.addStatus = $modalModel.find('.add-status').val();
    this.addDisable = $modalModel.find('.add-disable').val();

    // 驗證編輯輸入框資料是否正確
    if (!this.verificationFunc()) return;

    // 新增資料結構
    const machine = {
      id: $addId,
      model: $addModel,
      status: this.addStatus,
      temperature: $addTemperature,
      address: $addAddress,
      region: $addRegion,
      disable: this.addDisable.toLowerCase() === 'true',
    };

    // 確定後將資料新增
    MachineData.push(machine);
    // 重新長出列表和分頁
    const pageStorage = new Pagination().PageStorage;
    pageStorage.reloadRowPage();
    // 關閉視窗新增視窗
    $('#exampleModalCenter').modal('hide');
  }

  // 搜尋資料
  searchData() {
    const $Pagination = new Pagination();
    const { $inputKeyword } = this;
    const newDataCombination = MachineData.filter(data => data.address.search($inputKeyword.val()) !== -1);
    console.log(newDataCombination);
    $Pagination.PageStorage.reloadRowPage();
  }

  // 驗證輸入資料
  verificationFunc() {
    const { addStatus, addDisable } = this;
    let isPass = true;

    // 輸入資料不可空白
    let allAddTitle = [];
    $('.add-check').each((index) => {
      // 找出新增資料長度
      const verificationItem = $($('.add-check')[index]).val().trim().length;
      // 若有資料
      if (verificationItem === 0) {
        // 找出input的id(我將id,model,status,temp,address,region,disable 塞在input#id裡)
        const addTitle = $($('.add-check')[index])[0].id;
        allAddTitle = [...allAddTitle, `${addTitle}：請輸入完整資料\n`];
        isPass = false;
      }
    });
    // Status輸入錯誤
    if (addStatus.match(/[0-2]/) === null || addStatus.length > 1) {
      allAddTitle = [...allAddTitle, 'STATUS：只可輸入0或1或2，字數只可輸入1位\n'];
      isPass = false;
    }
    // Disable輸入錯誤
    if (addDisable.toLowerCase() !== 'true' && addDisable.toLowerCase() !== 'false') {
      allAddTitle = [...allAddTitle, 'DISABLE：只可輸入 true or false\n'];
      isPass = false;
    }
    // 顯示在同個Alert裡
    if (allAddTitle.length !== 0) {
      alert(allAddTitle.join(''));
      isPass = false;
    }
    return isPass;
  }

  render() {
    return this.Features;
  }
}
