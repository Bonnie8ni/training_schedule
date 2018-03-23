const uuidv4 = require('uuid/v4');

const MenuData = [
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
  }, {
    menuId: uuidv4(),
    menuName: 'Machine Management',
    menuIcon: 'fas fa-map-marker-alt',
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
    menuName: 'Merchandise Management',
    menuIcon: 'far fa-file-alt',
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
    menuName: 'Advertising Management',
    menuIcon: 'far fa-comments',
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
    menuName: 'Market Analysis',
    menuIcon: 'fas fa-chart-pie',
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
    menuName: 'System Setting',
    menuIcon: 'fas fa-sliders-h',
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

module.exports = MenuData;
