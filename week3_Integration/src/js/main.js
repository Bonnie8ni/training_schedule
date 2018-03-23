import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/main.scss';
import MenuCard from './menu/MenuCard';
import menuData from './menu/MenuData';

// hot reload for development
if (process.env.NODE_ENV !== 'production') {
  require('../index.html');
}

$().ready(() => {
  menuData.forEach((menu) => {
    const $MenuCard = new MenuCard(menu);
    $('#menu').append($MenuCard.render());
  });
});
