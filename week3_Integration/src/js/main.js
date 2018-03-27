import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/main.scss';
import MenuData from '../api/MenuData';
import MenuCard from './menu/MenuCard';
import Features from './features/Features';
import GridGroup from './content/GridGroup';
import Pagination from './features/Pagination';

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
  const $Features = new Features();
  $('#content').append($Features.render());

  // 帶入列表
  const $GridGroup = new GridGroup();
  $('#content').append($GridGroup.render());

  // 帶入分頁
  const $Pagination = new Pagination();
  $('#content').append($Pagination.render());
});

