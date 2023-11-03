{
// type assertion

let anything : any;

anything = "Next level web development";

 anything = 222;

 (anything as number)

 const kgToGm = ( value:string | number ): string | number | undefined =>{
  if( typeof value === 'string'){
   const convertedValue = parseFloat(value)*1000
   return `the converted value is: ${convertedValue}`
  }
  if(typeof value === 'number'){
   return value*1000
  }
 }
 const result1 = kgToGm(1000) as number ;
 const result2 = kgToGm('1000') as string;

 type CustomError = {
  message: string
 }
 try{

 }catch(error){
  console.log((error as CustomError).message);
 }

const convertData = (value: string | number): string | number | undefined =>{
 if( typeof value === 'string'){
  const data = parseFloat(value)*100
 }
 if(typeof value === 'number'){
  return value*1000
 }
}

const rak = convertData(1000) as number
const rak1 = convertData("1000") as string

type Er ={
 message: string;
}

try{

}catch(error){
 console.log((error as Er).message) 
}

}