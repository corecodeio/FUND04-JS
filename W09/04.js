/**
 * setTimeout
 * promises
 * - then/catch
 * - async/await
 */

console.log('Instruc 1');

setTimeout(() => {
  console.log('Instruc 2');
}, 3000);

console.log('Instruc 3');

console.log('Instruc 4');

console.log('Instruc 5');

// Promesa
function sum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(a + b);
    }, 3000);
  });
}

// const result = sum(90, 10);

// console.log(result);

sum(90, 10)
  .then((resul) => {
    // resolve
    console.log(`Promise result: ${resul}`);
  })
  .catch((e) => {
    // reject
    console.log(`REJECT: ${e}`);
  });

console.log('FIN DEL PROGRAMA');
