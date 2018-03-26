import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/main.scss';
import MenuData from '../api/MenuData';
import MenuCard from './menu/MenuCard';
import Featurs from './featurs/Featurs';
import GridGroup from './content/GridGroup';

// hot reload for development
if (process.env.NODE_ENV !== 'production') {
  require('../index.html');
}

$().ready(() => {
  // 帶入選單
  MenuData.forEach((menu) => {
    const $MenuCard = new MenuCard(menu);
    $('#menu').append($MenuCard.render());
  });

  // 帶入功能區
  const $Featurs = new Featurs();
  $('#content').append($Featurs.render());

  // 帶入列表
  const $GridGroup = new GridGroup();
  $('#content').append($GridGroup.render());
});

