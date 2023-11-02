"use strict";
/// normal function 
// arrow function
function add(num1, num2 = 100) {
    return num1 + num2;
}
add(2, 5);
const addArrow = (num1, num2) => num1 + num2;
// object er vitore kono function thakle sei function ke bole method  exmple: 
const poorUser = {
    name: "Hello",
    amount: 0,
    addBalance(balance) {
        return `My new Balance is: ${this.amount + balance}`;
    },
};
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const newArr = arr.map((ele) => ele * ele);
