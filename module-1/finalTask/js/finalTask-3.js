const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt("Enter password:");

if (message == null){
    message = "Отменено пользователем!";
} 
else if (message === ADMIN_PASSWORD){
    message = "Добро пожаловать!";
}
else {
    message = "Неверный пароль, доступ запрещен!";
}

alert(message);