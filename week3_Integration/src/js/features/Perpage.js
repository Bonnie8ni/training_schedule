export default class Perpage {
  constructor(pageNumber) {
    const $tpPage = $($('#tp-page').html());
    const $pageItem = $tpPage.find('.page-item');
    const $pageLink = $pageItem.find('.th-page-link');
    $pageLink.text(pageNumber + 1);

    if (pageNumber === 0) {
      $pageItem.addClass('active');
    }

    this.Perpage = $pageItem;
  }
  render() {
    return this.Perpage;
  }
}
