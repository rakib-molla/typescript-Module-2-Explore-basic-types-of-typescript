{
// ternary operator | optional chaining | nullish coalescing operator

const age = 18;
if( age <= 17){
 console.log('adult');
}else{
 console.log('not adult');
}

const isAdult = age <= 18 ? 'adult': 'not adult'
console.log({isAdult});

// nullish operator
const isAuthenticated = '';
const result1 = isAuthenticated ?? 'Guest';
const result2 = isAuthenticated ? isAuthenticated : 'Guest'
console.log({result1}, {result2});

type Users = {
 name: string;
 address:{
  city: string;
  road: string;
  presentAddress: string;
  permanentAddress?: string
 }
}

const userss : Users ={
 name : 'rakib',
 address:{
  city: 'dhaka',
  road: '60',
  presentAddress:'dhaka mirpur'
 }
}
const permanentAddress = userss?.address?.permanentAddress ?? 'No permanent Address';
console.log({permanentAddress});



















}