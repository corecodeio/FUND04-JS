// string
let str = 'Hola que tal';

// number
let n = 42;

// booleans
let t = true;
let f = false;

// undefined
let u = undefined;

// null
let empty = null;

// Asignation (=)
let message = 'This is a secret message';

// Compare (==) Loosley
console.log(10 == '10');
console.log(10 == 10);

// Compare (===) Strict
console.log(10 === '10');
console.log(10 === 10);

// Functions
// function, identificador, (parametros) <-- firma de la funcion
// Definicion:
function foo() {
  console.log('foo');
}

// llamar a la funcion
// Invocar: nombre, (argumentos)
foo();

// function con parametros y argumentos
// enviando datos
function sum(miparametro, b) {
  let c = miparametro * b;
  c = c - 2;
  console.log((miparametro + b) * c);
}

sum(10, 3);
sum(-1, 4);
sum(6, 3);

// recibir datos o valores de una funcion

function mult(a, b) {
  console.log(a * b);
  let c = a * b;
  return c;
}

let result = mult(3, 8);
console.log(result);
mult(5, 5);

// ejemplo 2

function charCount(str) {
  return str.length;
}

console.log(charCount('Yosef'));

console.log(charCount('Another '));

function firstLastChar(str) {
  //return str[0] + str[str.length - 1];
  return str.charAt(0) + str.charAt(str.length - 1);
}

console.log(firstLastChar('Yosef'));
console.log(firstLastChar('Hola'));
console.log(firstLastChar('Diego'));

// ARGUMENTS...
function odd() {
  return arguments[2];
}

console.log(odd('AAA', 'BFF', 'DDSC', 'SDFD'));

// R: READ
// E: EVALUATE
// P: PRINT
// L: LOOP

// console.log(42)
// ---> 42
// ---> undefined
