"use strict";
{
    const add = (param1, param2) => {
        if (typeof param1 === 'string' && typeof param2 === 'number') {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    const result1 = add('2', '3');
    console.log(result1);
    const getUser = (user) => {
        if ('role' in user) {
            console.log(` my name is ${user.name} my role is ${user.role} `);
        }
        else {
            console.log(` my name is ${user.name}  `);
        }
    };
    const normalUser = {
        name: 'rakib molla vai'
    };
    const adminUser = {
        name: 'rakib vai admin',
        role: 'admin',
    };
    getUser(adminUser);
}
