// console.log(1);
// // Log number
// console.log(100);

// // Log string
// console.log('Hello World');

// // Log multiple values
// console.log(20, 'Hello', true);

// // Log a variable
// const x = 100;
// console.log(x);

// // Console error & warning
// console.error('Alert');
// console.warn('Warning');

// // Log object as table
// console.table({ name: 'Brad', email: 'brad@gmail.com' });

// // Group console commands
// console.group('simple');
// console.log(x);
// console.error('Alert');
// console.warn('Warning');
// console.groupEnd();
// Ways to declare a variable
// `var`, `let`, & `const`

let firstName = 'John';
const lastName = 'Doe';
let age = 30;

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// We can re-assign `let` variables. If you change `age` to use `const`, you will get an error
age = 31;
console.log(age);

// With let, we can declare a value without assigning a value
let score;
score = 1;
console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;

// We can not re-assign a const variable
// x = 200 // Will result in an error

// We can still manipulate arrays and objects using const
const arr = ['a',1, 2, 3, 4];
// arr.push(5);
// console.log(arr);

// let person = {
//   name: 'Brad',
// };
// person.name = 'John';
// person.email = 'brad@gmail.com';
// person.address ="no biết"
// console.log(person);

// // Declare multiple values at once
// let a, b, c;

// const d = 10,
//   e = 20,
//   f = 30;

// console.log(d);
// console.log(a);
let y =arr.slice(1,3)
let z = arr.splice(1,3)
console.log(y);
console.log(z);