export default class MenuItem {
  constructor(submenu) {
    const $groupItem = $($('#tp-group-card').html()).find('.group-li');
    const $elementItem = $groupItem.find('li');
    const $elementA = $elementItem.find('a').attr('href', `${submenu.subMenuUrl}`).text(`${submenu.subMenuName}`);

    this.MenuItem = $elementItem;

    $elementA.click(() => {
      $('a').removeClass('focus');
      $elementA.addClass('focus');
    });
  }

  render() {
    return this.MenuItem;
  }
}
