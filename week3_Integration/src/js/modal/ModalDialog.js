export default class ModalDialog {
  constructor(status, MachineData) {
    const $tpModalDialog = $($('#tp-modal-dialog').html());
    const $modalTitle = $tpModalDialog.find('.modal-title');
    const $modalBody = $tpModalDialog.find('.modal-body');
    const $modalFooter = $tpModalDialog.find('.modal-footer');
    const $btnPrimary = $modalFooter.find('.btn.btn-primary');
    // const $btnSecondary = $modalFooter.find('.btn.btn-secondary');

    // 點入狀態若維明細按鈕
    if (status === 'detail') {
      $modalTitle.text('Details');
      $btnPrimary.hide();
      $.each(MachineData, (key, value) => {
        $modalBody.append($('<div class="detailRow">')
          .append($('<p class="detailTitle">').append(`${key.toUpperCase()}：`))
          .append($('<p class="detailText">').append(`${value}`)));
      });
    }

    this.ModalDialog = $tpModalDialog;
  }
  render() {
    return this.ModalDialog;
  }
}
