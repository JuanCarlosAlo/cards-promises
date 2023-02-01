const clickedElement = (clickedElement, cardList) => {
  const cardListArray = [...cardList.children];

  cardListArray.forEach(element => {
    element.classList.remove('card__list-item--selected');
  });
  clickedElement.classList.add('card__list-item--selected');
};

export { clickedElement };
