const textRef = document.querySelector('#text');
const inputControlRef = document.querySelector('#font-size-control');

const changeFontSize = () => {textRef.style.fontSize = `${+inputControlRef.value / 2}px`};

inputControlRef.addEventListener("input", changeFontSize);