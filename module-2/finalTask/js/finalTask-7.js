const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let message;

const isLoginValid = function (login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } 
  else {
   message = "Логин должен быть от 4 до 16 символов!";
  }
};

const isLoginUnique = function (allLogins, login) {
  if(allLogins.includes(login)) {
    message = "Такой логин уже используется";
    return false;
  }
  return true;
};

const addLogin = function (allLogins, login) {
  if (isLoginValid(login) && isLoginUnique(logins, login)) {
    allLogins.push(login);
    message = "Логин успешно добавлен!";
  }
  return message;  
};

//Правильно задокументированный баг становится фичей.

console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
