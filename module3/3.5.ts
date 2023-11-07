{
// access modifier

class BankAccount{
 public readonly id: number;
 public name: string;
 protected _balance: number

 constructor(id: number, name: string, balance: number){
  this.id = id;
  this.name = name;
  this._balance = balance;
 }

 public addDeposit(amount: number){
  this._balance = this.balance + amount
 }
 public getBalance(){
  return this._balance
 }
}

 class StudentAccount extends BankAccount{
  test(){
   this._balance
  }
 }

const goribManushAccount = new BankAccount(111, 'rakib', 20);
 goribManushAccount.addDeposit(300)
 const myBalance = goribManushAccount.getBalance();
 console.log(myBalance);





}