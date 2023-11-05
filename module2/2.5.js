"use strict";
{
    // function with generics 
    const createArray = (params) => {
        return [params];
    };
    const createArrayWithGeneric = (params) => {
        return [params];
    };
    const createWithTuple = (param, param2) => {
        return [param, param2];
    };
    const res10 = createWithTuple('Bangladesh', 22);
    const resGeneric = createArrayWithGeneric('Bangladesh');
    const resGenericObj = createArrayWithGeneric({
        id: 123,
        name: 'Mir pashan'
    });
    const res11 = createWithTuple('bangladesh', { name: 'asia' });
    const addCourseToStudent = (student) => {
        const course = "next level development ";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
        name: 'mrx',
        email: 'rakib@gmial.com',
        devType: 'ya@gmail.com'
    });
    const student2 = addCourseToStudent({
        name: 'mrx',
        email: 'rakib@gmial.com',
        devType: 'ya@gmail.com',
        watch: 'apple'
    });
}
