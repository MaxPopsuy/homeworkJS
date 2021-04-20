const counterRef = document.querySelector("#counter");
const decrementRef = document.querySelector("#btnDecrement");
const incrementRef = document.querySelector("#btnIncrement");
const valueRef = document.querySelector("#value");
let counterValue = 0;

const decrement = () => {
  counterValue--;
  valueRef.textContent = counterValue;
};
const increment = () => {
  counterValue++;
  valueRef.textContent = counterValue;
};

decrementRef.addEventListener("click", decrement);
incrementRef.addEventListener("click", increment);
