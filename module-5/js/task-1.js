const Account = function (accountData) {
  this.login = accountData.login;
  this.email = accountData.email;
  this.getInfo = function () {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
  };
};

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});
const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

mango.getInfo();
poly.getInfo();