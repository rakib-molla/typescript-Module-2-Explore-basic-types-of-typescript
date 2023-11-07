// class

class Animal {

 // constructor function // parameter properties 
 constructor(public name: string, public species: string, public sound: string) { }

 makeSound() {
  console.log(`The ${this.name} says ${this.sound}`)
 }
}

// instance 

const dog = new Animal('german seprsd bahai', 'dog', 'chew');
const cat = new Animal('persial bhai', 'cat', 'mao mao');
cat.makeSound()

class RakibMolla {
 constructor (public name: string, public age: string, public email: string){

 }

 makeRakib(){
  console.log(`my name is ${this.name} age is ${this.age}`);
 }

}
const res = new RakibMolla('rakib', '500', 'rakib@gmail.com');
res.makeRakib();
