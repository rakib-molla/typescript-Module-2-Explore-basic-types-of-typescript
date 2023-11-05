{
// Conditional Type
type a1 = number;
type b1 = string

type x = a1 extends null ? true : false // conditional type

type y = a1 extends null ? true : b1 extends undefined ? undefined : any ;

type Shekh ={
 bike: string;
 car: string;
 ship: string;
}
// keyOf Sheikh 
type CheckVehicle<T> = T extends keyof Shekh ? true : false ;

type HasTractor = CheckVehicle <"bike">







































}