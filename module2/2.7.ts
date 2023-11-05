{
// generic constraint with keyof operator 

type Vehicle = {
 bike: string;
 car: string;
 ship: string
}

type Owner = "bike" | 'car' | 'ship' // manually

type Owner2 = keyof Vehicle
const person1 : Owner2 = 'bike'

const getPropertyValue =<X , Y extends keyof X> ( obj: X , key: Y) =>{
 return obj[key]
}

const user = {
 name: 'rakib',
 age: 26,
 address: 'ctg'
}

const result = getPropertyValue(user, 'address')


const getRakib =< X, Y extends keyof X > (obj: X , key: Y ) =>{
 return obj[key]
}

const student = {
 name: 'rakib',
 age: 23,
 bike: 'yes'
}

const result1 = getRakib(student, 'bike')
















































}