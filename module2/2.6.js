"use strict";
{
    // constrains 
    const addCourseToStudent = (student) => {
        const course = 'next web development';
        return Object.assign(Object.assign({}, student), { course });
    };
    const student3 = addCourseToStudent({
        emni: 'asdfads',
        id: 555,
        name: 'rakib',
        email: 'ra',
    });
    const student1 = addCourseToStudent({
        id: 222,
        name: 'rakib',
        email: 'rakib@gmail.com',
        devType: 'js'
    });
    const student2 = addCourseToStudent({
        id: 333,
        name: 'shisir',
        email: 'almamunshisir@gmail.com',
        devType: 'nextjs',
    });
}
