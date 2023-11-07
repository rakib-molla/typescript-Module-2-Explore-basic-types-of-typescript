"use strict";
// class
class Animal {
    // constructor function // parameter properties 
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
}
// instance 
const dog = new Animal('german seprsd bahai', 'dog', 'chew');
const cat = new Animal('persial bhai', 'cat', 'mao mao');
cat.makeSound();
class RakibMolla {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    makeRakib() {
        console.log(`my name is ${this.name} age is ${this.age}`);
    }
}
const res = new RakibMolla('rakib', '500', 'rakib@gmail.com');
res.makeRakib();
