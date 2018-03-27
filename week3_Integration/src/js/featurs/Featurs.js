import MachineData from '../../api/MachineData';
import GridLine from '../content/GridLine';

export default class Featurs {
  constructor() {
    const $tpControls = $($('#tp-controls').html());
    const $addMachine = $tpControls.find('.add-machine');

    // 新增機台
    $addMachine.click(() => {
      $('.modal-title').text('Add');
      $('.btn-primary').show();
      const detailRow = Object.keys(MachineData[0]).map(key => (
        `<div class="detailRow">
          <p class="detailTitle">${key.toUpperCase()}：</p>
          <input class="add-${key} border"></input>
        </div>`
      ));
      $('.modal-body').html(detailRow.join(''));
    });

    // 新增機台-儲存
    $('.btn-primary').click(() => {
      // 輸入資料不可空白
      if ($('.add-id').val().trim().length === 0 || $('.add-model').val().trim().length === 0 || $('.add-status').val().trim().length === 0 || $('.add-temperature').val().trim().length === 0 || $('.add-address').val().trim().length === 0 || $('.add-region').val().trim().length === 0 || $('.add-disable').val().trim().length === 0) {
        alert('請輸入完整資料');
        return;
      }

      // 狀態輸入0-2以外的錯誤
      if ($('.add-status').val().match(/[0-2]/) === null) {
        alert('【Status 錯誤】只可輸入 0 or 1 or 2');
        return;
      }

      // 狀態輸入超過1位數的錯誤
      if ($('.add-status').val().length > 1) {
        alert('【Status 錯誤】字數只可輸入1位');
        return;
      }

      // Status輸入錯誤
      if ($('.add-disable').val().toLowerCase() !== 'true' && $('.add-disable').val().toLowerCase() !== 'false') {
        alert('【Disable 錯誤】只可輸入 true or false');
        return;
      }

      // 轉換字串變成布林
      let stringToBoolen = Boolean();
      if ($('.add-disable').val().toLowerCase() === 'true') { stringToBoolen = true; }
      if ($('.add-disable').val().toLowerCase() === 'false') { stringToBoolen = false; }

      const machine = {
        id: $('.add-id').val(),
        model: $('.add-model').val(),
        status: $('.add-status').val(),
        temperature: $('.add-temperature').val(),
        address: $('.add-address').val(),
        region: $('.add-region').val(),
        disable: stringToBoolen,
      };

      // 將資料新增進API裡
      MachineData.push(machine);

      // 清空現有列表畫面
      $('.grid-list').html('');

      // 重長GridRow
      MachineData.forEach((lineData) => {
        const $GridLine = new GridLine(lineData);
        $('.grid-list').append($GridLine.render());
      });

      // 關閉視窗
      $('#exampleModalCenter').modal('hide');
    });

    this.Featurs = $tpControls;
  }

  render() {
    return this.Featurs;
  }
}
