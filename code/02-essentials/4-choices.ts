// possible values of a variable

// enum Role {
//   Admin,
//   Editor,
//   Guest,
// }

// alternatives to using ENUMS => Literal type + union type

// literal type

// let userRole: 'admin' | 'editor' | 'guest' | 'admin';
// userRole = 'guest';
// userRole = 'john'

// let possibleResults: [1 | -1, 1 | -1]
// possibleResults = [1, -1]
// possibleResults = [1, 5] // not-ok // Type '5' is not assignable to type '-1 | 1'.

// let userRole: 'admin' | 'editor' | 'guest' | 'admin';
// supoose you have to use the same types for different variable
// then you will have to again rewrite the same literal types for that
// variable. it violates 'dry'. and there are chances of mistakes.

// Solution -> custom types / type aliases

// type MyNumber = number;
type Role = 'admin' | 'editor' | 'guest' | 'reader';

type User = {
  name: string;
  age: number;
  role: Role;
  permissions: string[];
};

let userRole: Role = 'admin';

// ...

userRole = 'guest';

let possibleResults: [1 | -1, 1 | -1]; // [1, -1]

possibleResults = [1, -1];

function access(role: Role) {
  // ...
}