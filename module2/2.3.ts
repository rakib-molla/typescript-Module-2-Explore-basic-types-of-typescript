{
 // generic type 

 type GenericArray<T> = Array<T>

 const rollNumber: number[] = [1, 2, 3, 4, 5];
 const rollNumber2: Array<number> = [1, 2, 3, 4, 5];

 const rollNumber3: GenericArray<number> = [1, 2, 3, 4, 5];


 const mentors: string[] = ['rakib', 'molla', 'yasin'];
 const mentors2: Array<string> = ['rakib', 'molla', 'yasin'];
 const mentors3: GenericArray<string> = ['rakib', 'molla', 'yasin'];

 const user : GenericArray<{ name:string, age: number }>= [
  {
   name: 'rakib',
   age: 20
  },
  {
   name: 'rakib',
   age: 20
  },
  
 ]

 // generic tuple 

 type GenericTuple<X , Y > = [X , Y ]

 const men : GenericTuple<string, string> = ['rakib', 'yasin']

const userWithId: GenericTuple<number, {name: string, email: string}> = [123, {name: 'persian', email: 'rakib@gmail.com'}]








































}