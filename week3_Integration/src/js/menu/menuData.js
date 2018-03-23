const uuidv4 = require('uuid/v4');

const menuData = [
  {
    menuId: uuidv4(),
    menuName: 'Dealer Management',
    menuIcon: 'fas fa-clipboard',
    subMenu: [
      {
        subMenuId: uuidv4(),
        subMenuName: 'Model List',
        subMenuUrl: '#',
      },
      {
        subMenuId: uuidv4(),
        subMenuName: 'Model List',
        subMenuUrl: '#',
      },
      {
        subMenuId: uuidv4(),
        subMenuName: 'Model List',
        subMenuUrl: '#',
      },
    ],
  }, {
    menuId: uuidv4(),
    menuName: 'User Management',
    menuIcon: 'fas fa-user',
    subMenu: [
      {
        subMenuId: uuidv4(),
        subMenuName: 'Model List',
        subMenuUrl: '#',
      },
      {
        subMenuId: uuidv4(),
        subMenuName: 'Model List',
        subMenuUrl: '#',
      },
      {
        subMenuId: uuidv4(),
        subMenuName: 'Model List',
        subMenuUrl: '#',
      },
    ],
  },
];

module.exports = menuData;
