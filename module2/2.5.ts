{
 // function with generics 

 const createArray = (params: string): string[] => {
  return [params]
 }

 const createArrayWithGeneric = <T>(params: T): T[] => {
  return [params]
 }

 const createWithTuple = <T, Q>(param: T, param2: Q): [T, Q] => {
  return [param, param2]
 }

 const res10 = createWithTuple<string, number>('Bangladesh', 22);

 const resGeneric = createArrayWithGeneric<string>('Bangladesh');

 type User = { id: number; name: string }

 const resGenericObj = createArrayWithGeneric<User>({
  id: 123,
  name: 'Mir pashan'
 })

 const res11 = createWithTuple<string, { name: string }>('bangladesh', { name: 'asia' })


 const addCourseToStudent = <T>(student: T) => {
  const course = "next level development ";
  return {
   ...student,
   course
  }
 }

 const student1 = addCourseToStudent({
  name: 'mrx',
  email: 'rakib@gmial.com',
  devType: 'ya@gmail.com'
 })
 const student2 = addCourseToStudent({
  name: 'mrx',
  email: 'rakib@gmial.com',
  devType: 'ya@gmail.com',
  watch: 'apple'
 })














































}