const user = {

    showUserName(){
        console.log(this.userName);
    },
    updateAge(){
        console.log(this.age+1);
    }
};

user.userName = "Max";
user.age = 11;

user.showUserName();
user.updateAge();
