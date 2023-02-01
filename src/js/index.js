// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { changeText } from '../js/changeText.js';
import { clickedElement } from '../js/clickedElement.js';

const cardList = document.getElementById('card-list');

changeText('daily');

cardList.addEventListener('click', e => {
  if (e.target.dataset.filter) {
    changeText(e.target.dataset.filter);
    clickedElement(e.target, cardList);
  }
});
