{
// Union Type

type FrontEndDeveloper = 'fakibazDeveloper' | 'juniorDeveloper' ;
type FullStackDeveloper = 'FrontEndDeveloper' | 'expertDeveloper' ;

type Developer = FrontEndDeveloper | FullStackDeveloper ;

const newDeveloper : FrontEndDeveloper = 'juniorDeveloper';

type User = {
 name: string;
 email?: string;
 gender: 'male' | 'female';
 bloodGroup : 'O+' | 'A+' | 'B+';
}

const user : User ={
 name: 'rakib',
 gender: 'male',
 bloodGroup: 'A+'
}

type WebDev = {
 skill : string[],
 designation1: 'FrontEndDeveloper'
}
type WebbDev = {
 skill : string[],
 designation2: 'BackEndDeveloper'
}

 type FullDev = WebDev & WebbDev 

 const expDev : FullDev ={
  skill: ['HTML', 'CSS', 'JS', 'EXPRESS'],
  designation1: 'FrontEndDeveloper',
  designation2: 'BackEndDeveloper'
 }











































}