{
// Utility Types


type Person = {
 name: string;
 age: number;
 email?: string;
 contactNo: string;
}
// Pick
type NameAge = Pick<Person, "name" | 'age'>
// Omit 
type ContactInfo = Omit<Person, 'name' | 'age'>
// Require
type PersonRequire = Required<Person>

// Partial 
type PersonPartial = Partial<Person>

// Read Only
type PersonReadOnly = Readonly<Person>
const person1 : Person = {
 name: 'rakib',
 age: 20,
 contactNo: '017'
}
person1.name = 'Mrx'

// Record
type MyObj = Record<string, string>;
const EmptyObj : Record<string, unknown> = {}
const obj: MyObj = {
 a: 'asdf',
 b: 'adsf',
 d: 'asf',
 e: 'adsf'
}


































































}