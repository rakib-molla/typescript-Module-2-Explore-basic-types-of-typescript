{
// constrains 

const addCourseToStudent =<T extends {id: number; name: string; email: string}> ( student: T )=>{
 const course = 'next web development';
 return{
  ...student,
  course
 }
}

const student3 = addCourseToStudent({
emni: 'asdfads',
id: 555, 
name: 'rakib',
email: 'ra',

})

const student1 = addCourseToStudent<{
 id: number;
 name: string;
 email: string;
 devType: string
}>({
 id: 222,
 name: 'rakib',
 email: 'rakib@gmail.com',
 devType: 'js'
})

const student2 = addCourseToStudent({
 id: 333,
 name: 'shisir',
 email:'almamunshisir@gmail.com',
 devType: 'nextjs',
})























































}