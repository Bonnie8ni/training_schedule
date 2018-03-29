export default class Perpage {
  constructor(index, pageNumber, rowsPerPage) {
    const $tpPage = $($('#tp-page').html());
    const $pageItem = $tpPage.find('.page-item');
    const $pageLink = $pageItem.find('.th-page-link');
    $pageLink.text(pageNumber + 1);

    if (index === 0) {
      $pageItem.addClass('active');
    }

    $pageItem.click(() => {
      $('.page-item').removeClass('active');
      $pageItem.addClass('active');
      $('.grid-row').hide();
      const pageCount = parseInt(index, 10) + parseInt(rowsPerPage, 10);
      for (let i = index; i < pageCount; i++) {
        $($('.grid-row')[i]).show();
      }
    });

    this.Perpage = $pageItem;
  }
  render() {
    return this.Perpage;
  }
}
