const credits = 23500;
const pricePerDroid = 3000;

const quantityDroids = prompt("Напишите количество дроидов: ")

const totalPrice = quantityDroids * pricePerDroid;

if (quantityDroids == null){
    console.log("Отменено пользователем!");
}
else if ( totalPrice > credits){
    console.log("Недостаточно средств на счету!")
}
else {
    const restOff = credits - totalPrice;
    console.log("Вы купили", quantityDroids, "дроидов, на счету осталось", restOff);
}