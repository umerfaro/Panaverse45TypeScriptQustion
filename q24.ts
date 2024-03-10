
console.log("Equality with strings: 'hello' == 'hello'? I predict True.");
console.log('hello' == 'hello'); 

console.log("Inequality with strings: 'hello' != 'hello'? I predict False.");
console.log('hello' != 'hello'); 


let greeting = 'Hello';
console.log("Using lower case function: greeting.toLowerCase() == 'hello'? I predict True.");
console.log(greeting.toLowerCase() == 'hello'); 
console.log("Using lower case function: greeting.toLowerCase() == 'HELLO'? I predict False.");
console.log(greeting.toLowerCase() == 'HELLO'); 


let num = 10;
console.log("Numerical equality: num == 10? I predict True.");
console.log(num == 10); 
console.log("Numerical inequality: num != 10? I predict False.");
console.log(num != 10); 

console.log("Greater than: num > 5? I predict True.");
console.log(num > 5); 

console.log("Less than: num < 5? I predict False.");
console.log(num < 5); 

console.log("Greater than or equal to: num >= 10? I predict True.");
console.log(num >= 10); 

console.log("Less than or equal to: num <= 5? I predict False.");
console.log(num <= 5); 

// Tests using "and" and "or" operators
console.log("Using 'and' operator: num > 5 && num < 15? I predict True.");
console.log(num > 5 && num < 15); 

console.log("Using 'or' operator: num < 5 || num > 15? I predict False.");
console.log(num < 5 || num > 15); 


let fruits = ['apple', 'banana', 'cherry'];
console.log("Item in array: fruits.includes('banana')? I predict True.");
console.log(fruits.includes('banana')); 

console.log("Item in array: fruits.includes('mango')? I predict False.");
console.log(fruits.includes('mango')); 


console.log("Item not in array: !fruits.includes('mango')? I predict True.");
console.log(!fruits.includes('mango')); 

console.log("Item not in array: !fruits.includes('banana')? I predict False.");
console.log(!fruits.includes('banana'));
