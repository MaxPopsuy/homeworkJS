const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsRef = document.querySelector("#ingredients");
ingredients.forEach((ingredient) => {
  if (typeof ingredient === "string") {
    const liElem = document.createElement("li");
    liElem.textContent = ingredient;
    ingredientsRef.appendChild(liElem);
  }
});
