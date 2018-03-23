export default class MenuLi {
  constructor(submenu) {
    const $groupLi = $($('#tp-group-card').html()).find('.group-li');
    const $elementLi = $groupLi.find('li');
    const $elementA = $elementLi.find('a').attr('href', `${submenu.subMenuUrl}`).text(`${submenu.subMenuName}`);

    this.MenuLi = $elementLi;

    $elementA.click(() => {
      $('a').removeClass('focus');
      $elementA.addClass('focus');
    });
  }

  render() {
    return this.MenuLi;
  }
}
