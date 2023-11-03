{
// interface 



type User2 = {
 name: string;
age: number;
}

type UserWithRole1 = User2 & { role: string}
interface UserWithRole2 extends User2{
 role: string
}

const user1: UserWithRole2={
 name : 'rakib',
 age: 20,
 role: 'manager' 
}

// js -> object, array-> object function -> object 

type Roll = number[]

interface Roll2 {
 [index: number]: number
}


const rollNumber: Roll2= [1,2,3,4,5,6];

type add1 = (num1:number, num2: number)=> number

interface add2{
 (num1: number, num2: number): number
}

const add: add2 =( num1 , num2 )=> num1+num2 






















}