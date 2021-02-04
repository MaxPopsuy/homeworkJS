let total = 0;

while (true){
    let input = prompt("Введите число:");

    if (input === null){
        break;
    }


    if (isNaN(input)){
        alert("Было введено не число! Попробуйте ещё раз");
    }
    else{
        total += Number(input);
    }
    
}

alert(`Сумма чисел: ${total}`);