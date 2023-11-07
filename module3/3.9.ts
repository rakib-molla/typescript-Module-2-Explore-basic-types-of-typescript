{
 // abstraction : 
 // 1 interface 
 // 2 abstract


 // interface 
 interface Vehicle1 {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
 }

 class Car implements Vehicle1 {
  startEngine(): void {
   console.log(`i am starting the car engine`)
  }
  stopEngine(): void {
   console.log(`i am stopping the car engine`)
  }
  move(): void {
   console.log(`i am moving in the car`);
  }
  test() {
   console.log(`i am test`);
  }
 }

 const toyotaCar = new Car();
 toyotaCar.startEngine()

 // abstract 
 interface Vehicle2 {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
 }

 abstract class Car2 {
  abstract startEngine(): void
  abstract stopEngine(): void
  abstract move(): void
 }

 class honda extends Car2{
  startEngine(): void {
   console.log(`car start`);
  }
  stopEngine(): void {
   console.log(`car stop`);
  }
  move(): void {
   console.log(`car move`);
  }
 }























}