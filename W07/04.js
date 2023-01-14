// Coersion
function sum(a, b) {
  return a + b;
}

console.log(sum(2, 4));

console.log(sum('10', 5));

console.log(sum(5, '10'));

console.log(sum(90, 'yosef'));

function mult(a, b) {
  return a * b;
}

console.log(mult(2, 4));

console.log(mult('10', 5));

console.log(mult(5, '10'));

console.log(mult(90, 'yosef'));

console.log(NaN * 40);

// Explicit conversion
function sum2(a, b) {
  return Number(a) + Number(b);
}

console.log(sum2(2, 4));

console.log(sum2('10', 5));

console.log(sum2(5, '10'));

console.log(sum2(5, '10.60'));

console.log(sum2(90, 'yosef'));

// Object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

let u = {
  a: true,
  b: 'lorem',
  c: 'Hola',
};

// get array of keys
let uKeys = Object.keys(u);
console.log(uKeys);

// to string
console.log(u.toString());

// check if key exists
console.log(Object.hasOwn(u, 'a'));
console.log('b' in u);
console.log(u['a'] != undefined);

for (let key in u) {
  console.log(key + '->' + u[key]);
}

// Date
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
let today = new Date();
console.log(today);
console.log(today.getMonth());
console.log(today.getDay());

// Math
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
let x = 90,
  y = 80,
  w = 30,
  r = 1;

console.log(Math.max(x, y, w, r));
console.log(Math.min(x, y, w, r));
console.log(Math.pow(2, 3));
console.log(Math.random() * 100);

// String
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
let str = '  hola  ';
console.log('Que tal' + str);
console.log('Que tal' + str.trim());

// Inmmutable
let myName = 'Yosef';
console.log(myName);
console.log(myName[2]);
myName[2] = 'p';
console.log(myName);
myName.toUpperCase();
console.log(myName);
let myName2 = myName.toUpperCase();
console.log(myName2);
