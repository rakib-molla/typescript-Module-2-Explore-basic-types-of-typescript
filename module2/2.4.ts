{
// generic interface


interface Developer<T, X>{
 name: string;
 computer:{
  brand: string;
  model: string;
  releaseYear: number;
 },
 smartWatch: T ;
 bike?: X;
}

type EmiWatch = {
 brand: string;
 model: number;
 display: string;
}

const poorDeveloper: Developer <EmiWatch, undefined> ={
 name:'rakib',
 computer:{
  brand:'asus',
  model:'asdfaf',
  releaseYear:10
 },
 smartWatch:{
  brand:'emi',
  model:2000,
  display: 'amo',
 }
}

interface AppleWatch{
 brand:string;
 model:number;
 heartTrack: boolean;
 sleepTrack: boolean;
}

interface Yamaha{
 model: string;
 engine: string
}

const reachDeveloper: Developer<AppleWatch, Yamaha>={
 name:'rich Dev',
 computer:{
  brand:'apple',
  model:'asdfaf',
  releaseYear: 10
 },
 smartWatch:{
  brand:'emi',
  model:2015 ,
  heartTrack: true,
  sleepTrack: true,
 },
 bike:{
  model: 'yamha',
  engine:'yamaha'
 }
}



















}