export default class ModalDialog {
  constructor(status, MachineData) {
    const $tpModalDialog = $($('#tp-modal-dialog').html());
    const $modalTitle = $tpModalDialog.find('.modal-title');
    const $modalBody = $tpModalDialog.find('.modal-body');
    const $modalFooter = $tpModalDialog.find('.modal-footer');
    const $btnSecondary = $modalFooter.find('.btn.btn-secondary');
    const $btnPrimary = $modalFooter.find('.btn.btn-primary');

    // 點入狀態若維明細按鈕
    if (status === 'detail') {
      $modalTitle.text('Details');
      $btnPrimary.hide();
      $.each(MachineData, (key, value) => {
        $modalBody.append($('<p>').append($('<span class="DetailTitle">').append(`${key.toUpperCase()}：${value}`)));
      });
    }
    console.log($modalTitle, $modalBody, $modalFooter, $btnSecondary, $btnPrimary);
    this.ModalDialog = $tpModalDialog;
  }
  render() {
    return this.ModalDialog;
  }
}
