import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/main.scss';

import Button from './Button';

// hot reload for development
if (process.env.NODE_ENV !== 'production') {
  require('../index.html');
}

$().ready(() => {
  const $button1 = new Button();
  const $button2 = new Button('danger');

  const $buttons = $('<div>')
    .append($button1.render())
    .append($button2.render());

  $('#app')
    .append($('<div>').html('This is Jquery Webpack'))
    .append($buttons);
});
