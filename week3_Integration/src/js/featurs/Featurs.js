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
          <p class="detailTitle">${key}：</p>
          <input class="add-${key} border"></input>
        </div>`
      ));
      $('.modal-body').html(detailRow.join(''));
    });

    // 新增機台-儲存
    $('.btn-primary').click(() => {
      console.log($('.add-id').val().length);
      if ($('.add-id').val().length === 0 || $('.add-model').val().length === 0 || $('.add-status').val().length === 0 || $('.add-temperature').val().length === 0 || $('.add-address').val().length === 0 || $('.add-region').val().length === 0 || $('.add-disable').val().length === 0) {
        alert('請輸入完整資料');
        return;
      }
      const machine = {
        id: $('.add-id').val(),
        model: $('.add-model').val(),
        status: $('.add-status').val(),
        temperature: $('.add-temperature').val(),
        address: $('.add-address').val(),
        region: $('.add-region').val(),
        disable: $('.add-disable').val(),
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
