const fetchData = url => fetch(url);
const cardCurrent = document.querySelectorAll('.card__current');
const cardsPrevious = document.querySelectorAll('.card__previous');

const changeText = dataset => {
  const phrasesRequest = fetchData('../data/data.json');
  phrasesRequest
    .then(response => response.json())
    .then(data => {
      data.forEach((element, index) => {
        cardCurrent[index].textContent =
          element.timeframes[dataset].current + 'hr';

        cardsPrevious[index].textContent =
          element.timeframes[dataset].previous + 'hr';
      });
    });
};

export { changeText };
