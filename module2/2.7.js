"use strict";
{
    const person1 = 'bike';
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: 'rakib',
        age: 26,
        address: 'ctg'
    };
    const result = getPropertyValue(user, 'address');
    const getRakib = (obj, key) => {
        return obj[key];
    };
    const student = {
        name: 'rakib',
        age: 23,
        bike: 'yes'
    };
    const result1 = getRakib(student, 'bike');
}
