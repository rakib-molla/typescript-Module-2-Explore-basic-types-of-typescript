"use strict";
{
    // access modifier
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        addDeposit(amount) {
            this._balance = this.balance + amount;
        }
        getBalance() {
            return this._balance;
        }
    }
    class StudentAccount extends BankAccount {
        test() {
            this._balance;
        }
    }
    const goribManushAccount = new BankAccount(111, 'rakib', 20);
    goribManushAccount.addDeposit(300);
    const myBalance = goribManushAccount.getBalance();
    console.log(myBalance);
}
