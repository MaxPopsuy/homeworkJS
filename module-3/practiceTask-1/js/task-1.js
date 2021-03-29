const user = {};
user.userName = 'Max';
user.age = 11;

user.showUserName = () => {
    console.log(user.userName);
};
user.updateAge = () => {
    user.age += 1;
    console.log(user.age);
};

user.showUserName();
user.updateAge();
