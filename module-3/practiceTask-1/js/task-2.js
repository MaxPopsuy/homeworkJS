const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
const salarie = Object.entries(salaries);

let total = 0;

for(let i=0; i < salarie.length; i++){
    total += salarie[i][1];
    console.log(`Name: ${salarie[i][0]}; Salarie: ${salarie[i][1]}`);
}

console.log(`Сумма: ${total}`);