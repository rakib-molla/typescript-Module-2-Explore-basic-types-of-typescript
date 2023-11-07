{
// instance of Guard

class Animal {
 name: string;
 species: string;

 constructor(name: string, species: string){
  this.name = name;
  this.species = species;
 }
 makeSound(){
  console.log('i am making sound');
 }
}

class Dog extends Animal{
 constructor(name: string, species: string){
  super(name, species)
 }
 makeBark(){
  console.log('dog is barking');
 }
}
class Cat extends Animal{
 constructor(name: string, species: string){
  super(name, species)
 }
 makeMeaw(){
  console.log('dog is meaw');
 }
}

// smart way tge handle of instance  of type guard
const isDog = (animal: Animal): animal is Dog =>{
 return animal instanceof Dog;
}

const isCat = (animal: Animal): animal is Cat =>{
 return animal instanceof Cat;
}

const getAnimal = (animal: Animal)=>{
 if(isDog(animal)){
  animal.makeBark()
 }else if(animal instanceof Cat){
  animal.makeMeaw()
 }else{
  animal.makeSound()
 }
};

const dog = new Dog('dog bhai', 'dog')
const cat = new Cat('cat bhai', 'cat')

getAnimal(dog)












































}