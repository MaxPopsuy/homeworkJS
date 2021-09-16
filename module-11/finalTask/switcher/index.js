const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const bodyRef = document.querySelector('body');
const startBtnRef = document.querySelector('button[data-action = "start"]');
const stopBtnRef = document.querySelector('button[data-action = "stop"]');

let isBtnActive = false;
let interval;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const onClickBtnStart = () => {
    if(isBtnActive) {
        return;
    }
    interval = setInterval(()=> {
        bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(1, 6)];
    }, 1000)
    isBtnActive = true;
};

const onClickBtnStop = () => {
    clearInterval(interval);
    isBtnActive = false;
};

startBtnRef.addEventListener('click', onClickBtnStart);
stopBtnRef.addEventListener('click', onClickBtnStop);