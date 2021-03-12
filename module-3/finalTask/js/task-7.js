/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};
/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 28,
  id: 1,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(id, type, amount) {
    let transAction = {
      id: id,
      type: type,
      amount: amount,
    };
    return transAction;
  },
  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    console.log(`Succed Deposit. Amount: ${amount}.`);
    this.transactions.push(
      this.createTransaction(this.id++, Transaction.DEPOSIT, amount)
    );
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    let stateBalance = this.balance - amount;

    if (stateBalance >= 0) {
      this.balance = stateBalance;
      console.log(`Succed Withdraw. Amount: ${amount}.`);
      this.transactions.push(
        this.createTransaction(this.id++, Transaction.WITHDRAW, amount)
      );
    } else {
      console.log("There's not enough funds in the account.");
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    console.log(`Total account balance: ${this.balance}`);
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let transaction of this.transactions) {
      if (transaction.id === id) {
        return console.log(transaction);
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (let transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return console.log(`Total ${type}'s: ${total}`);
  },
};
account.deposit(50);
account.deposit(23);
account.withdraw(12);
account.withdraw(25);
account.withdraw(150);
account.getBalance();
account.getTransactionDetails(2);
// console.log(account.transactions.length);
account.getTransactionTotal(Transaction.DEPOSIT);
account.getTransactionTotal(Transaction.WITHDRAW);
console.log(account.transactions);
