{// spread operator 
// rest operator
// destructuring 


// learning spread operator 

const bros1 : string[] = ['rakib', 'shisir','yasin', 'rabbi' ];

const bros2 : string[] = ['jalaliset', 'pathao','jack'];

bros1.push(...bros2)

const mentors1 = {
 typescript: 'Mezba',
 redux: 'Mir',
 dbms: 'Mizan'
}

const mentors2 = {
 prisma: 'firoz',
 next: 'Tonmoy',
 cloud:'nahid'
}

const mentorList = {
 ...mentors1,
 ...mentors2
}

// learning rest operator
const getFriends=(...friends: string[])=>{
 // console.log(`hi ${friend1} ${friend2}, ${friend3} ${friend4}`);
 friends.forEach((friend)=> console.log(`hi ${friend}`))
}

getFriends('rakib', 'yasin', 'rabbi', 'shisir', 'jack');

const allData = (...allFriend: string[])=>{
 allFriend.forEach((friend)=>(console.log(`hello ${friend}`)))
}
allData('rakib', 'yasin', 'mehedi')


// learning destructuring

const user ={
 id: 123,
 name:{
  firstName: 'Md',
  middleName: "rakib",
  lastName:'Molla'
 },
 contactNumber: '01755300722',
 address: 'Dhaka'
}

const {
 id,
 name:{firstName : prothomName },  // firstName to give  prothomName it's call Alice 
 contactNumber 
} = user;

// array destructuring 
const myFriend = ['rakib', 'yasin', 'rabbi', 'shisir', 'mamun', 'antor'];
const [a,b,c, ...rest] = myFriend;











}