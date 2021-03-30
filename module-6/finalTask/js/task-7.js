import users from "./users.js";

const calculateTotalBalance = (users) => users.map(user => user.balance).reduce((accum, currentValue) => accum + currentValue);

console.log(calculateTotalBalance(users)); // 20916
