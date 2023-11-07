"use strict";
{
    // getter setter 
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        // getter 
        get balance() {
            return this._balance;
        }
        // setter
        set deposit(amount) {
            this._balance = this.balance + amount;
        }
    }
    const goribManushAccount = new BankAccount(111, 'rakib', 20);
    goribManushAccount.deposit = 300;
    const myBalance = goribManushAccount.balance; // as like property 
    console.log(myBalance);
}
