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
        `<div class="detailRow"><p class="detailTitle">${key}：</p><input class="input-${key} border-bottom"></input></div>`
      ));
      $('.modal-body').html(detailRow.join(''));
    });

    // 新增機台-儲存
    $('.btn-primary').click(() => {
      const machine = {
        id: $('.input-id').val(),
        model: $('.input-model').val(),
        status: $('.input-status').val(),
        temperature: $('.input-temperature').val(),
        address: $('.input-address').val(),
        region: $('.input-region').val(),
        disable: $('.input-disable').val(),
      };

      // 組出新的資料
      const NewMachineData = [...MachineData, machine];

      // 清空現有列表畫面
      $('.grid-list').html('');

      // 重長GridRow
      NewMachineData.forEach((lineData) => {
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
