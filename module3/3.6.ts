{
 // getter setter 
 
 class BankAccount{
  public readonly id: number;
  public name: string;
  protected _balance: number
 
  constructor(id: number, name: string, balance: number){
   this.id = id;
   this.name = name;
   this._balance = balance;
  }
 
  // getter 
  get balance(){
   return this._balance
  }

// setter
set deposit(amount: number){
  this._balance = this.balance + amount ; 
}

  // public addDeposit(amount: number){
  //  this._balance = this._balance + amount
  // }
  // public getBalance(){
  //  return this._balance
  // }

 }
 
 
 
 const goribManushAccount = new BankAccount(111, 'rakib', 20);
  goribManushAccount.deposit = 300
  const myBalance = goribManushAccount.balance; // as like property 

  console.log(myBalance);
 
 
 
 
 
 }