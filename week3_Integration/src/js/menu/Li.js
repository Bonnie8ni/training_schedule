export default class Li {
  constructor(submenu) {
    const $groupLi = $($('#tp-group-card').html()).find('.group-li');
    const $li = $groupLi.find('li');
    const $a = $li.find('a').attr('href', `${submenu.subMenuUrl}`).text(`${submenu.subMenuName}`);

    this.Li = $li;

    $a.click(() => {
      $a.removeClass('focus');
    });
  }

  render() {
    return this.Li;
  }
}
