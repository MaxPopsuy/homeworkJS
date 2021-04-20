const categoriesRef = document.querySelector("#categories");
const itemRef = document.querySelectorAll(".item");
console.log(`В списке ${itemRef.length} категории`);
itemRef.forEach((item) => {
  if (item.querySelector(".item > h2")) {
    console.log(`Категория: ${item.querySelector(".item > h2").textContent}`);
    console.log(`Количество элементов: ${item.querySelectorAll("li").length}`);
  }
});