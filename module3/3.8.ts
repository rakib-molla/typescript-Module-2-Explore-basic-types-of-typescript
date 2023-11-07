{
// Polymorphisom

class Person{
 getSleep(){
  console.log('i am sleeping for 8 hrs per day');
 }
}
class Student extends Person{
 getSleep(){
  console.log('i am sleeping for 7 hrs per day');
 }
}

class Developer extends Person{
 getSleep(){
  console.log('i am sleeping for 5 hrs per day ');
 }
}

const getSleepingHours = (param: Person)=>{
 param.getSleep()
}
const person1 = new Person()
const person2 = new Student()
const Person3 = new Developer()


getSleepingHours(Person3)




















}