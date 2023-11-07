{
// type guards 

// typeof --> type guard

type Alfaneumeric = string | number;

const add = (param1: Alfaneumeric, param2: Alfaneumeric): Alfaneumeric =>{

 if(typeof param1 === 'string' && typeof param2 === 'number'){
return param1+param2
 }else{
  return param1.toString()+ param2.toString();
 }
}

const result1 = add('2', '3')
console.log(result1)

// in guard
type NormalUser = {
 name: string;
}
type AdminUser = {
 name: string;
 role: 'admin';
}
const getUser = (user: NormalUser | AdminUser)=>{
 if('role' in user ){
  console.log(` my name is ${user.name} my role is ${user.role} `);
 }else{
  console.log(` my name is ${user.name}  `)
 }
}

const normalUser : NormalUser = {
 name: 'rakib molla vai'
}
const adminUser: AdminUser = {
 name: 'rakib vai admin',
 role: 'admin',
}

getUser(adminUser)




























}