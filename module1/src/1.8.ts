{
// type alice 

type Student = {
 name : string;
 age : number;
 contactNumber?: string;
 gender: string;
 status: boolean
}

const student1 : Student ={
 name : 'rakib',
 age : 50,
 gender: 'male',
 status: true
}

const student2 : Student = {
 name: 'shisir',
 age: 20,
 gender: 'male',
 status: true
}
const student3 : Student = {
 name: 'mamun',
 age: 20,
 gender: 'male',
 status: true
}

type UserName = string;

type IsAdmin = boolean;
const userName : UserName =  'rakib';
const isAdmin : IsAdmin = true; 

type Add = (num1 : number, num2 : number, num3 : number)=> number;

const add : Add = (num1, num2, num3) => num1+num2+num3





























}