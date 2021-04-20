const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");
const changeName = () => {
  outputRef.textContent = inputRef.value;
  if (inputRef.value.split(" ").join("") === "") {
    outputRef.textContent = "незнакомец";
  }
};

inputRef.addEventListener("input", changeName);