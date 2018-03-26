export default class ModalDialog {
  constructor() {
    const $tpModalDialog = $($('#tp-modal-dialog').html());
    const $modalTitle = $tpModalDialog.find('.modal-title');
    const $modalBody = $tpModalDialog.find('.modal-body');
    const $modalFooter = $tpModalDialog.find('.modal-footer');
    const $btnPrimary = $modalFooter.find('.btn.btn-primary');

    console.log($modalTitle, $modalBody, $modalFooter, $btnPrimary);
    this.ModalDialog = $tpModalDialog;
  }
  render() {
    return this.ModalDialog;
  }
}
