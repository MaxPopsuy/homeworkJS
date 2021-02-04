const userCountry = prompt("Введите страну для доставки:");
let price;

switch (userCountry.toLowerCase()){
    case "китай":
        price = 100;
        console.log("Доставка в Китай будет стоить", price, "кредитов");
        break;
    case "чили":
        price = 250;
        console.log("Доставка в Чили будет стоить", price, "кредитов");
        break;
    case "австралия":
        price = 170;
        console.log("Доставка в Австралию будет стоить", price, "кредитов");
        break;
    case "индия":
        price = 80;
        console.log("Доставка в Индию будет стоить", price, "кредитов");
        break;
    case "ямайка":
        price = 120;
        console.log("Доставка в Ямайку будет стоить", price, "кредитов");
        break;
    
    default:
        alert("В вашей стране доставка не доступна")
}