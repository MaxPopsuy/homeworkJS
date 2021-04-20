const numberRef = document.querySelector("#controls > input");
const renderRef = document.querySelector("[data-action=render]");
const destroyRef = document.querySelector("[data-action=destroy]");
const boxesRef = document.querySelector("#boxes");

const count = [+numberRef.value];

const createBoxes = (amount) => {
  let size = 30;
  let divStr = "";
  for (let i = 0; i < amount[0]; i++) {
    divStr = `<div style="width: ${size}px; height: ${size}px; background-color:rgb(${Math.round(
      Math.random() * 255
    )}, ${Math.round(Math.random() * 255)}, ${Math.round(
      Math.random() * 255
    )})"></div><br/>`;
    boxesRef.insertAdjacentHTML("beforeend", divStr);
    size += 10;
  }
};

const destroyBoxes = () => {
  [...boxesRef.children].forEach((child) => child.remove());
};
numberRef.addEventListener("input", () => {
  count[0] = +numberRef.value;
});
renderRef.addEventListener("click", createBoxes.bind({}, count));
destroyRef.addEventListener("click", destroyBoxes);
