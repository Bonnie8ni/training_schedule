import MenuItem from './MenuItem';

export default class MenuCard {
  constructor(menu) {
    const $tpGroupCard = $($('#tp-group-card').html());
    const $groupCard = $tpGroupCard.find('.group-card');
    const $groupHeader = $groupCard.find('.group-header');
    const $groupLink = $tpGroupCard.find('.group-link');
    $groupHeader.find('i').addClass(`${menu.menuIcon}`);
    $groupHeader.find('.header-name').text(`${menu.menuName}`);

    menu.subMenu.forEach((submenu) => {
      const $MenuItem = new MenuItem(submenu);
      $groupLink.append($MenuItem.render());
    });

    this.MenuCard = $groupCard;

    $groupCard.click(() => {
      $('.group-card').removeClass('active');
      $groupCard.toggleClass('active');
    });

    $groupHeader.click(() => {
      $('a').removeClass('focus');
    });
  }

  render() {
    return this.MenuCard;
  }
}
