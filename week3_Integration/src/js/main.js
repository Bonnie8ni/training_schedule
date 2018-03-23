import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/main.scss';
import Menu from './menu/Menu';

// hot reload for development
if (process.env.NODE_ENV !== 'production') {
  require('../index.html');
}

$().ready(() => {
  const $Menu = new Menu();

  $('#container')
    .append($Menu.render());
});
