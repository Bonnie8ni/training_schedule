import MachineData from '../../api/MachineData';

export default class Features {
  constructor(PageStorage) {
    this.pageStorage = PageStorage;
    const $tpControls = $($('#tp-controls').html());
    const $addMachine = $tpControls.find('.add-machine');
    const $modalModel = $tpControls.find('.modal-model');
    this.$btnSave = $modalModel.find('.btn-save');
    this.$modalBody = $modalModel.find('.modal-body');
    this.$modalTitle = $modalModel.find('.modal-title');

    const $search = $tpControls.find('.search');
    const $btnSearch = $search.find('.btn-search');
    const $advancedSearch = $search.find('.advanced-search');
    this.$inputKeyword = $search.find('.input-keyword');
    this.$inputKeyword.val(this.pageStorage.inputKeyword);
    const $advancedSearchBox = $search.find('.advanced-search-box');
    this.$inputAdvanceKeyword = $search.find('.input-advanced-keyword');
    this.$selectSearch = $search.find('.select-search');
    const $btnAdvancedClose = $search.find('.btn-advanced-close');
    const $btnAdvancedSearch = $search.find('.btn-advanced-search');

    // 新增機台
    $addMachine.click(() => {
      this.addMachineFunc();
    });

    // 新增機台-儲存
    this.$btnSave.click(() => {
      this.saveAddMachineFunc();
    });

    // 搜尋資料
    $btnSearch.click(() => {
      this.searchData();
    });

    // 進階搜尋
    $advancedSearch.click(() => {
      $advancedSearchBox.show();
      this.$inputAdvanceKeyword.val(this.pageStorage.inputKeyword);
    });

    this.$selectSearch.change(() => {
      this.selectedValue = this.$selectSearch.val();
    });

    // 進階搜尋-關閉
    $btnAdvancedClose.click(() => {
      this.$inputAdvanceKeyword.val('');
      $advancedSearchBox.hide();
    });

    // 進階搜尋-搜尋
    $btnAdvancedSearch.click(() => {
      this.searchAdvancedData();
      this.$inputKeyword.val(this.pageStorage.inputKeyword);
      this.$inputAdvanceKeyword.val(this.pageStorage.inputKeyword);
    });

    this.Features = $tpControls;
  }

  // 新增機台
  addMachineFunc() {
    const { $modalTitle, $btnSave, $modalBody } = this;
    $modalTitle.text('Add');
    $btnSave.show();
    const detailRow = Object.keys(MachineData[0]).map(key => (
      `<div class="detailRow">
          <p class="detailTitle">${key.toUpperCase()}：</p>
          <input class="add-${key} add-check border" id="${key.toUpperCase()}"/>
        </div>`
    ));
    $modalBody.html(detailRow.join(''));
  }

  // 新增機台-儲存
  saveAddMachineFunc() {
    const { pageStorage } = this;
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
      status: parseInt(this.addStatus, 10),
      temperature: $addTemperature,
      address: $addAddress,
      region: $addRegion,
      disable: this.addDisable.toLowerCase() === 'true',
    };

    // 確定後將資料新增
    let newDataCombination = [];
    if (pageStorage.status !== 'defult') {
      if (pageStorage.selectedValue !== undefined) pageStorage.selectedValue = '';
      MachineData.push(machine);
      pageStorage.machineData.push(machine);
      newDataCombination = pageStorage.machineData.filter(data => data.status.toString() === pageStorage.selectedValue || (data.address.search(pageStorage.inputAdvanceKeyword) !== -1 || data.region.search(pageStorage.inputAdvanceKeyword) !== -1));
    } else {
      MachineData.push(machine);
      newDataCombination = [...MachineData, machine];
    }
    pageStorage.machineData = newDataCombination;

    // 重新長出列表和分頁
    pageStorage.reloadRowPage();
    // 關閉視窗新增視窗
    $('#exampleModalCenter').modal('hide');
    $('body').removeAttr('class').removeAttr('style');
    $('.modal-backdrop').hide();
  }

  // 搜尋資料
  searchData() {
    const { pageStorage, $inputKeyword } = this;
    pageStorage.inputKeyword = $inputKeyword.val();
    pageStorage.inputAdvanceKeyword = pageStorage.inputKeyword;
    let newDataCombination = [];
    if (pageStorage.status !== 'defult') {
      newDataCombination = MachineData.filter(data => data.address.search(pageStorage.inputKeyword) !== -1 || data.region.search(pageStorage.inputKeyword) !== -1);
    } else {
      newDataCombination = pageStorage.machineData.filter(data => data.address.search(pageStorage.inputKeyword) !== -1 || data.region.search(pageStorage.inputKeyword) !== -1);
    }
    pageStorage.status = 'search';
    pageStorage.machineData = newDataCombination;
    pageStorage.reloadRowPage();
  }

  // 搜尋進階資料
  searchAdvancedData() {
    const { $inputAdvanceKeyword, pageStorage, selectedValue } = this;
    pageStorage.inputAdvanceKeyword = $inputAdvanceKeyword.val();
    pageStorage.inputKeyword = pageStorage.inputAdvanceKeyword;
    pageStorage.selectedValue = selectedValue;
    let newDataCombination = [];
    if (pageStorage.status !== 'defult') {
      if (pageStorage.selectedValue !== undefined) {
        newDataCombination = MachineData.filter(data => data.status.toString() === pageStorage.selectedValue && (data.address.search(pageStorage.inputAdvanceKeyword) !== -1 || data.region.search(pageStorage.inputAdvanceKeyword) !== -1));
      } else {
        newDataCombination = MachineData.filter(data => data.status.toString() === pageStorage.selectedValue || (data.address.search(pageStorage.inputAdvanceKeyword) !== -1 || data.region.search(pageStorage.inputAdvanceKeyword) !== -1));
      }
    } else if (pageStorage.selectedValue !== undefined) {
      newDataCombination = pageStorage.machineData.filter(data => data.status.toString() === pageStorage.selectedValue && (data.address.search(pageStorage.inputAdvanceKeyword) !== -1 || data.region.search(pageStorage.inputAdvanceKeyword) !== -1));
    } else {
      newDataCombination = pageStorage.machineData.filter(data => data.status.toString() === pageStorage.selectedValue || (data.address.search(pageStorage.inputAdvanceKeyword) !== -1 || data.region.search(pageStorage.inputAdvanceKeyword) !== -1));
    }
    pageStorage.status = 'searchAdvanced';
    pageStorage.machineData = newDataCombination;
    pageStorage.reloadRowPage();
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
