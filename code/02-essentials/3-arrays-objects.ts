// list of strings
let hobbies = ['Sports', 'Cooking'];

// hobbies.push(10);


// can an array have more than one value type
// let users: (string | number)[];
let users: Array<string | number>;

users = [1, 'Max'];
users = [5, 1];
users = ['Max', 'Anna'];

// tuple of two numbers
let possibleResults: [number, number]; // [1, -1]

possibleResults = [1, -1];
// possibleResults = [5, 10, 12];

let user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  }
} = {
  name: 'Max',
  age: 38,
  hobbies: ['Sports', 'Cooking'],
  role: {
    description: 'admin',
    id: 5
  }
};

// nullish -> undefined or null
// {} => empty object type => non-nullish value
let value: {};

value = { name: "Alice" }; // OK
value = "Hello";           // OK
value = 42;                // OK
value = true;              // OK

// value = null;              // Error (if strictNullChecks is enabled)
// value = undefined;         // Error (if strictNullChecks is enabled)

// in js {} is an empty object
const someObj = {};

// when you don't know about how many keys in an object. you can use Record to tell keys data type and values data type.
let data: Record<string, number | string>;

data = {
  entry1: 1,
  entry2: 'some string'
};