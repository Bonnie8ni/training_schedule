import menuData from './menuData';

export default class Menu {
  constructor() {
    const $tpGroupCard = $($('#tp-group-card').html());
    // const $groupLink = $tpGroupCard.find('.group-link');

    this.Menu = $tpGroupCard;

    menuData.forEach((mainMenu) => {
      const $subMeun = $('<ul class="group-link">');
      $tpGroupCard
        .append($('<div class="group-card">')
          .append(`<div class="group-header"><a href="#"><i class="fa ${mainMenu.menuIcon}"></i>${mainMenu.menuName}</a></div>`)
          .append($subMeun));
      mainMenu.subMenu.forEach((subLink) => {
        $subMeun.append(`<li><a href="${subLink.subMenuUrl}">${subLink.subMenuName}</a></li>`);
      });
    });
  }

  render() {
    return this.Menu;
  }
}
