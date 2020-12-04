import itemsTemplate from '../templates/galery-items.hbs';
import menu from '../menu.json';
console.log(menu);

const markup = itemsTemplate(menu);

const listMenuRef = document.querySelector('.js-menu');

listMenuRef.insertAdjacentHTML('beforeend', markup);