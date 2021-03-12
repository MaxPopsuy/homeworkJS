const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

console.log(user);

const userKeys = Object.keys(user);

for( let keys of userKeys ){
    console.log(`Ключ: ${keys} Значение: ${user[keys]}`);
}