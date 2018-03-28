import MachineData from '../../api/MachineData';
import GridLine from '../content/GridLine';

let verificationResult;
export default class Features {
  constructor() {
    const $tpControls = $($('#tp-controls').html());
    const $addMachine = $tpControls.find('.add-machine');

    // 新增機台
    $addMachine.click(() => {
      $('.modal-title').text('Add');
      $('.btn-save').show();
      const detailRow = Object.keys(MachineData[0]).map(key => (
        `<div class="detailRow">
          <p class="detailTitle">${key.toUpperCase()}：</p>
          <input class="add-${key} add-check border" id="${key.toUpperCase()}"/>
        </div>`
      ));
      $('.modal-body').html(detailRow.join(''));
    });

    // 新增機台-儲存
    $('.btn-save').click(() => {
      const $addId = $('.add-id').val();
      const $addModel = $('.add-model').val();
      const $addTemperature = $('.add-temperature').val();
      const $addAddress = $('.add-address').val();
      const $addRegion = $('.add-region').val();
      this.addStatus = $('.add-status').val();
      this.addDisable = $('.add-disable').val();

      // 驗證編輯輸入框資料是否正確
      this.verification();
      // 確認verificationResult值
      if (verificationResult) return;

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
      // 確定後將物件新增
      const $GridLine = new GridLine(machine);
      $('.grid-list').append($GridLine.render());
      // 關閉視窗新增視窗
      $('#exampleModalCenter').modal('hide');
    });

    this.Features = $tpControls;
  }

  // 驗證輸入資料
  verification() {
    const { addStatus, addDisable } = this;

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
      }
    });
    // Status輸入錯誤
    if (addStatus.match(/[0-2]/) === null || addStatus.length > 1) {
      verificationResult = true;
      allAddTitle = [...allAddTitle, 'STATUS：只可輸入0或1或2，字數只可輸入1位\n'];
    }
    // Disable輸入錯誤
    if (addDisable.toLowerCase() !== 'true' && addDisable.toLowerCase() !== 'false') {
      verificationResult = true;
      allAddTitle = [...allAddTitle, 'DISABLE：只可輸入 true or false\n'];
    }
    // 顯示在同個Alert裡
    if (allAddTitle.length !== 0) {
      verificationResult = true;
      alert(allAddTitle.join(''));
    }
  }
  render() {
    return this.Features;
  }
}
