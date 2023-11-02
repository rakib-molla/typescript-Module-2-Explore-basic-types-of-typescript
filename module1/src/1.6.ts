/// normal function 

// arrow function

function add(num1 : number ,num2 : number = 100) : number {
 return num1+num2;
}

add(2,5)

const addArrow = (num1: number , num2: number): number => num1+ num2

// object er vitore kono function thakle sei function ke bole method  exmple: 
const poorUser ={
 name: "Hello",
 amount: 0,
 addBalance(balance: number): string{
  return `My new Balance is: ${this.amount + balance}`;
 },
}

const arr: number[] =[1,2,3,4,5,6,7,8];

const newArr: number[] = arr.map((ele: number): number=> ele*ele )
