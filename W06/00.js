// objeto y metodo (funcion)
console.log('Hola!');
console.log('Como estas?');
console.log(42);

// variable = referencia a memoria (caja con un valor) 'contenedor'

// var
var foo; // definicion
foo = 'El valor que yo quiera'; // asignacion
foo = 140;
console.log(foo);

var bar = 'Asignando un valor en creacion';
console.log(bar);
bar = foo;
console.log(bar);

// let
let foo2; // definicion
foo2 = 'El valor que yo quiera'; // asignacion
foo2 = 140;
console.log(foo2);

let bar2 = 'Asignando un valor en creacion';
console.log(bar2);
bar2 = foo2;
console.log(bar2);

// const
const foo3 = 'El valor que yo quiera';
console.log(foo3);

/*

Este codigo da error:

const foo4;
foo4 = 'El valor que yo quiera';
console.log(foo3);

*/

// booleans
let yo = true;
let lorem = false;

// undefined
let mentira = undefined;

// null
let nada = null;
