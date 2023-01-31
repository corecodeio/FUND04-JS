/*
  Para cambiar la posicióm de una letra de uno de los índices en un array 
  o quisiera eliminar índices en base a 1 solo caracter, la mejor opción seria forEach?
*/

let statement = 'Hola que tal';
let arrStatement = statement.split('');
console.log(arrStatement);

// const charBack = arrStatement[7];
// arrStatement[7] = arrStatement[1];
// console.log(arrStatement);
// arrStatement[1] = charBack;
// console.log(arrStatement);

const charBack = arrStatement[7];
[, arrStatement[7], , , , , , arrStatement[1]] = arrStatement;
arrStatement[1] = charBack;
console.log(arrStatement);

console.clear();

// for
const matrix = [
  [1, 2, 3, 4, 5, 6],
  [7, 8],
  [9, 10, 11, 12],
  ['A', 'B', 'W'],
];
// for-externo
for (let i = 0; i < matrix.length; i++) {
  console.log(`(i): ${i} ========================> [${matrix[i]}]`);
  // for-interno
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`\t(j): ${j} ========> ${matrix[i][j]}`);
  }
}

console.clear();

// Como podemos condicionar el indece en un array por la cantidad de caracteres que tiene? Por ejemplo, si una palabra tiene más de 3 letras hacer esto
const arrStatementWords = arrStatement.join('').split(' ');
arrStatementWords.forEach((word) => {
  if (word.length > 3) {
    console.log(word);
  }
});

console.clear();

// Podríamos darle un repaso a map method pls
// map ==> Array.prototype
// a --> f ---> new f(a)
const original = [42, 52, 62, 92, 102];
const resul1 = [];

console.log(`ORIGINAL  ===> [${original}]`);

function toDecimal(n, i, a) {
  return n / 10;
}

// MANUAL
for (let i = 0; i < original.length; i++) {
  resul1.push(toDecimal(original[i], i, original));
}
console.log(`RESULT (1) ===> [${resul1}]`);

// AUTO 1
const resul2 = original.map(toDecimal);
console.log(`RESULT (2) ===> [${resul2}]`);

// AUTO 2
const resul3 = original.map((n, i, a) => {
  return toDecimal(n);
});
console.log(`RESULT (3) ===> [${resul3}]`);

// AUTO 3
const resul4 = original.map((n, i, a) => toDecimal(n));
console.log(`RESULT (4) ===> [${resul4}]`);
