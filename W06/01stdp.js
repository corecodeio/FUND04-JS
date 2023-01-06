// Ejemplo 1
// 0 --> n
// 5 = 0 + 1 + 2 + 3 + 4 + 5 = 15

function rec(n) {
  // caso base
  if (n === 0) return 0;
  // logica
  return n + rec(n - 1);
}

console.log(rec(5));

// Ejemplo 2

function parImpar(numero) {
  if (numero === 0) {
    return 'Par';
  } else if (numero === 1) {
    return 'Impar';
  } else {
    return parImpar(numero - 2);
  }
}

// let parImpar = (numero) => {
//   if (numero === 0) {
//     return 'Par';
//   } else if (numero === 1) {
//     return 'Impar';
//   } else {
//     return parImpar(numero - 2);
//   }
// };

// overflow
// console.log(parImpar(40000000));
console.log(parImpar(4));
