/**
 * Session
 *
 * break, continue
 * comma operator
 * Unary Op (+)
 * Arrow function
 * Array Methods
 *  map
 *  reduce
 *  filter
 */

// Break
for (let i = 0; i < 10; i++) {
  if (i != 5) {
    console.log(i);
  }
}

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

let str = 'Hola Yosef como estas?';
for (let i = 0; i < str.length; i++) {
  if (str[i] === 'o') {
    continue;
  }
  console.log(str[i]);
}

// break
let verif = 'Ivan';
switch (verif) {
  case 'Ivan':
    console.log('Ivan hola');
    break;
  case 'Yosef':
    console.log('Yosef hola');
    break;
  default:
    console.log('Hola desconocido');
}

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}

// + - ++ --
let n = '30.5';
let b = 10;
let c = 20;
let d = 10;
let e = 20;
let x = true;
let arr = [1, 'hola', true];
console.log(typeof n);
console.log(typeof Number(n));
console.log(typeof +n, +n);
console.log(typeof -n, -n);
console.log(typeof x);
console.log(typeof arr);

// post increment/decrement
console.log(b++);
console.log(c++);
console.log(b);
console.log(c);

// pre increment/decrement
console.log(++d);
console.log(--e);
console.log(d);
console.log(e);

// Comma operator

function sum(a, b) {
  return (a = 90), a + b;
}

console.log(sum(8, 9));

// Arrow function
function mult(a, b) {
  console.log(arguments);
  return a * b;
}

const div = function (a, b) {
  console.log(arguments);
  return a / b;
};

function User(name, age) {
  this.name = name;
  this.age = age;
}

mult(5, 3);
div(100, 10);

const Yosef = new User('Yosef', 27);
console.log(Yosef);

function a1() {
  console.log(this);
}

function A2() {
  console.log(this);
}

a1();
new A2();

// Arrow functions

// implicit return

const sumA1 = (a, b) => {
  return a + b;
};

console.log(sumA1(4, 5));

const multA1 = (a, b) => a * b;

console.log(multA1(40, 10));

const simpleArray = () => [1, 2, 3, 4];

console.log(simpleArray());

const simpleObject = () => ({ name: 'Yosef', age: 27 });

console.log(simpleObject());

const double = (i) => i * 2;

console.log(double(100));

function callbackCaller(f) {
  console.log(f(300));
}

callbackCaller((i) => i * 3);

// this
let obj = {
  k: 'hey',
  method: function () {
    console.log(this);
  },
};

obj.method();

let obj2 = {
  k: 'hey',
  method: function () {
    function x() {
      console.log(this);
    }
    x();
  },
};

obj2.method();

this.name = 'Yosef';

let obj3 = {
  k: 'hey',
  method: () => {
    console.log(this);
  },
};

obj3.method();

let obj4 = {
  k: 'hey',
  method: () => {
    const x = () => {
      console.log(this);
    };
    x();
  },
};

obj4.method();

// arguments

const divA1 = (a, b) => {
  console.log(arguments);
  return a + b;
};

function div1(a, b) {
  console.log(arguments);
  return a + b;
}

divA1(1, 2);
div1(1, 2);

// Array Method (map)

// [a] --> f --> [a*]
const arr1 = [1, 2, 3, 4, 5];

const result = [];
for (i = 0; i < arr1.length; i++) {
  result.push(arr1[i] * 10);
}
console.log(result);

const mapResult = arr1.map((n, i, a) => n * 10).map((n) => ++n);

const mapResult1 = arr1.map((n, i, a) => {
  n = n + 'Hola';
  n = n.toUpperCase();
  return n;
});

console.log(mapResult);
console.log(mapResult1);

// Array Method (filter)
// [A] --> f --> [a]
const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];

const filterResult = words.filter((w) => w.length > 6);

console.log(filterResult);

const filterResult1 = arr1.filter((n) => n % 2 === 0);
console.log(filterResult1);

// Array Method (Reduce)
// [a] --> f --> b
const arr2 = [1, 2, 3, 4, 5]; //

// Si existe un initialValue acc = initValue
// Si no existe un initValue acc = a[0]

// Si existe un initialValue curr = a[0]
// Si no existe un initialValue curr = a[1]

// sin initialValue :
const result1 = arr2.reduce((acc, curr) => {
  return acc + curr;
});

console.log(result1);

const result2 = arr2.reduce((acc, curr) => {
  return acc + curr;
  // -1 + 1 = 0
  // 0 + 2 = 2
  // 2 + 3 = 5
  // 5 + 4 = 9
  // 9 + 5 = 14
}, -1);

console.log(result2);

// 1-2-3-4-5
const result3 = arr2.reduce((acc, curr, i) => {
  if (i > 0) return acc + '-' + curr;
  return acc + curr;
}, '');

console.log(result3);

// [10, 20, 30, 40, 50]
const result4 = arr2.reduce((acc, curr) => {
  acc.push(curr * 10);
  return acc;
}, []);

console.log(result4);

const result5 = arr2.reduce((acc, curr) => {
  if (acc) acc.push(curr * 10);
  return false;
}, []);

console.log(result5);
