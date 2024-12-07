//                                             Answer No 1

// const array = [42, true, "hello, world!", { name: "john", age: 25, isStudent: false }, false, 3.14, "Javascript is fun!"];
// const stringArray = array.map(element => String(element));
// console.log(stringArray);   
// Output is: ["42","true","hello, world!", "[object Object]",false",  "3.14",  "Javascript is fun!" ]

//                                           Answer No 2

// const array = [42, true, "hello, world!", { name: "john", age: 25, isStudent: false }, false, 3.14, "Javascript is fun!"];
// const numbers = array.filter(item => typeof item === "number");
// console.log(numbers);   
//Output is: [42, 3.14]

//                                         Answeer No 3

// const array = [42, true, "hello, world!", { name: "john", age: 25, isStudent: false }, false, 3.14, "Javascript is fun!"];
// array.forEach(item => {
//     console.log(typeof item);
// });      
// Output is: number,boolean,string,object,boolean,number,string
  
//                                        Answer No 4

// const array = [42, true, "hello, world!", { name: "john", age: 25, isStudent: false }, false, 3.14, "Javascript is fun!"];
// const sum = array.reduce((acc, item) => {
//     return typeof item === "number" ? acc + item : acc;
//   }, 0);
//   console.log(sum); 
 // Output is: 45.14

//                                             Answer No 5

// const array = [42, true, "hello, world!", { name: "john", age: 25, isStudent: false }, false, 3.14, "Javascript is fun!"];
// const firstBoolean = array.find(item => typeof item === "boolean");
// console.log(firstBoolean); 
// Output is: true

//                                            ANswer No 6


//const array = [42, true, "hello, world!", { name: "john", age: 25, isStudent: false }, false, 3.14, "Javascript is fun!"];
//const firstObjectIndex = array.findIndex(item => typeof item === "object");
 //console.log(firstObjectIndex); 
 // Outputc is: 3

//                                              Answer No 7

 //const array = [42, true, "hello, world!", { name: "john", age: 25, isStudent: false }, false, 3.14, "Javascript is fun!"];
 //const containsNumber = array.some(element => typeof element === 'number');
 //console.log(containsNumber); 
 // Output is: true

//                                             Answer No 8

// const array = [42, true, "hello, world!", { name: "john", age: 25, isStudent: false }, false, 3.14, "Javascript is fun!"];
// const allStrings = array.every(element => typeof element === 'string');
// console.log(allStrings);
// Output is: false
 
 