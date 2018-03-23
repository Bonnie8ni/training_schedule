import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/main.scss';
import Card from './menu/Card';
// import Li from './menu/Li';
import menuData from './menu/menuData';

// hot reload for development
if (process.env.NODE_ENV !== 'production') {
  require('../index.html');
}

$().ready(() => {
  menuData.forEach((menu) => {
    const $Card = new Card(menu);
    $('#menu').append($Card.render());
  });
});
