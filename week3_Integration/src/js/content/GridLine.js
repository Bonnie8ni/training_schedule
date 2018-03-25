export default class GridLine {
  constructor(MachineData) {
    const $btnDetail = $('<button class="btn btn-primary btn-details" data-toggle="modal" data-target="#exampleModalCenter"><i class="fas fa-file-alt"></i></button>');
    const $btnEdit = $('<button class="btn btn-edit"><i class="fas fa-pencil-alt"></i></button>');
    const $btnDelete = $('<button class="btn btn-delete"><i class="fas fa-trash-alt"></i></button>');
    const $tpGridGroup = $($('#tp-grid-group').html());
    const $GridRow = $tpGridGroup.find('.grid-row');
    if (MachineData.status === 0) {
      $GridRow.addClass('status-online');
      $GridRow.find('.row-status').addClass('light').text('Online');
    } else if (MachineData.status === 1) {
      $GridRow.addClass('status-offline');
      $GridRow.find('.row-status').addClass('light').text('Offline');
    } else {
      $GridRow.addClass('status-error');
      $GridRow.find('.row-status').addClass('light').text('Error');
    }
    $GridRow.find('.row-id').text(`${MachineData.id}`);
    $GridRow.find('.row-model').text(`${MachineData.model}`);
    $GridRow.find('.row-temp').text(`${MachineData.temperature}`);
    $GridRow.find('.row-address').text(`${MachineData.address}`);
    $GridRow.find('.row-region').text(`${MachineData.region}`);
    $GridRow.find('.row-details').append($btnDetail);
    $GridRow.find('.row-steup').append($btnEdit).append($btnDelete);

    this.GridLine = $GridRow;

    $btnDetail.click(() => {
      $('.modal-body').text($GridRow.text());
    });
  }

  render() {
    return this.GridLine;
  }
}
