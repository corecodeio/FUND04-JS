// condicionales
// instrucciones que nos permiten controlar el flujo
// instrucciones que evaluan booleanos

let edad = 20;
let condicion = edad > 21;

if (condicion) {
  // SI CONDICION ES VERDADERA
  console.log('CONDICION es verdadera');
} else {
  // SI CONDICION ES FALSA
  console.log('CONDICION es falsa');
}

console.clear();

let user = {
  name: 'Yosef',
  age: 22,
  admin: false,
  org: 'core-code',
};

if (user.age > 21) {
  if (user.admin) {
    if (user.org === 'core-code') {
      console.log(
        '1.Mi perfil\n2.Agregar amigos\n3.Ver mis amigos\n4.Eliminar usuario\n5.Configuracion de sitio'
      );
    } else {
      console.log('Porfavor contacte al administrador del sitio');
    }
  } else {
    console.log('1.Mi perfil\n2.Agregar amigos\n3.Ver mis amigos');
  }
} else {
  console.log('Usted debe ser mayor de edad para utilizar el sistema');
}

console.clear();

let actualYear = 2023;
let u = {
  name: 'Yosef',
  age: 20,
  year: 1991,
};

if (actualYear - u.year === u.age) {
  console.log('Su edad es correcta');
} else if (u.year === 1995) {
  console.log('Su edad es correcta');
} else {
  console.log('Su edad es incorrecta');
}

console.clear();

let age = 22;
console.log(age > 21 ? 'CONDITION IS TRUE' : 'CONDITION IS FALSE');

console.clear();

const numbers = [1, 10, 3, 50, 55, 20, 99, 42];

// [1, 3, 10, 20, 42, 50, 55, 99]
console.log(numbers.sort());

/*
  > 0	      sort a after b
  < 0	      sort a before b
  === 0	    keep original order of a and b
*/

console.log(
  numbers.sort((a, b) => {
    if (a > b) return -42;
    if (a < b) return 90;
    return 0;
  })
);

console.log(numbers.sort((a, b) => b - a));
