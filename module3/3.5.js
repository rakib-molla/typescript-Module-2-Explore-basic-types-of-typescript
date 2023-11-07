"use strict";
{
    // access modifier
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this.balance = balance;
        }
        addDeposit(amount) {
            this.balance = this.balance + amount;
        }
        getBalance() {
            return this.balance;
        }
    }
    const goribManushAccount = new BankAccount(111, 'rakib', 20);
    goribManushAccount.addDeposit(300);
    const myBalance = goribManushAccount.getBalance();
    console.log(myBalance);
}
