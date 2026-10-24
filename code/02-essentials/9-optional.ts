function generateError(msg?: string) {
  throw new Error(msg);
}

generateError();

type User = {
  name: string;
  age: number;
  role?: 'admin' | 'guest'
};


let input1 = '';
const didProvideInput1 = input1 || false;
// `||` optr checks falsy values (0, false, undefined, null, NaN, '')
// note - [], {} are not falsy.

// nullish coalescing
let input = '';
const didProvideInput = input ?? false;
