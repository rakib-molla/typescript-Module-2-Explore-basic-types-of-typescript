{
 // Asynchronous Typescript

 // Promise 
 type ToDo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean
 }

 const getTodo = async () => {
  try {
   const response = await fetch('https://jsonplaceholder.typicode.com/todos')
   const data = await response.json();
   // return data
   console.log(data);
  } catch (error) {
   console.log(error);
  }
 }
 getTodo()


 // simulate
 type Something = { something: string }

 const createPromise = (): Promise<Something> => {
  return new Promise<Something>((resolve, reject) => {
   const data: Something = { something: "Web Development" };
   if (data) {
    resolve(data)
   } else {
    reject('Fail Data')
   }
  })
 }

 const showData = async (): Promise<Something> => {
  const data = await createPromise();
  console.log(data);
  return data
 }
 showData();



























}