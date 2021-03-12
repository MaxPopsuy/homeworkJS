const calculator = {

    read(a,b){
        calculator.firstNum = a;
        calculator.secondNum = b;
        this.sum();
        this.mult();
    },
    sum(){
        return console.log(`Сумма: ${this.firstNum+this.secondNum}`);
    },
    mult(){
        return console.log(`Произведение: ${this.firstNum*this.secondNum}`);
    }

};

calculator.read(5, 5);
calculator.read(6, 12);
calculator.read(2, 9);
calculator.read(7, 120);