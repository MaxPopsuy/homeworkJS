let input;
const numbers = [];
let total = 0;



while (true){
    input = prompt("Введите число:");

    if (input === null){
        break;
    }


    if (isNaN(input)){
        alert("Было введено не число! Попробуйте ещё раз");
    }
    else{
        numbers.push(input);
    }
    
}

if (numbers.length === 0){
    alert("Невозможно сложить то чего нет");
}
else {
    for(let sum of numbers){
        total += Number(sum);
        console.log(total);
    }
    alert(`Сумма чисел: ${total}`);
}
