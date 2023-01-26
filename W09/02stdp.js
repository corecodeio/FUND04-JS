// split , join

// split --> String prototype
// string ---> array

const str = 'Hola como estas el dia de hoy?';

console.log(str.split(' '));

console.log(str.split('o'));

console.log(str.split('Yosef'));

console.log(str.split(''));

console.log(str.split());

// join
// join --> Array prototype
// array --> string

const arr = ['Hola', 'que', 'tal', '?'];

console.log(arr.join());

console.log(arr.join(' '));

console.log(arr.join('-'));

const arr2 = [1, 'que', false, '?', 9999];

console.log(arr2.join('-'));

// map
// Array prototype

const numbers = [1, 2, 3, 4, 5, 6]; // [10, 20, 30, 40, 50, 60]

const newNumbers = numbers.map((n) => n * 10);

console.log(newNumbers);

const strs = ['yosef', 'bootcamp', 'comida'];

const newStrs = strs.map((s) => s.toUpperCase());

console.log(newStrs);
