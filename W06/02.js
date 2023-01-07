// string
let message = 'Hola';

/**
 * Concatener:
 * 1. concat() ==> string
 * 2. + ==> string
 */

let newMessage = message.concat(' que tal').concat(', como estas?');

console.log(newMessage);

let anotherMessage = message + ' que tal' + ', como estas?';

console.log(anotherMessage);

/**
 * Includes
 * 1. includes ==> boolean
 */

let secret = 'My name is YoSef';

let isIncluded = secret.includes('yosef');

console.log(isIncluded);

/**
 * Split
 * 1. split ==> Array
 */

let myMessage = 'Hola que tal buenos dias!';

let words = myMessage.split('que');

console.log(words);
console.log(words[0].toUpperCase());
console.log(words[1].concat(' yosef'));
console.log(words[2]);

/**
 * Character selection
 * 1. charAt ==> string
 */

let myName = 'Yosef';

console.log(myName.charAt(2));
console.log('Benneth'.charAt(2));

/**
 * Slice
 * 1. slice ==> string
 */

let cake = 'This is a cake';

console.log(cake.slice(5, 7));
console.log(cake.slice(-4));

/**
 * IndexOf
 * 1. indexOf ==> number
 */

let findSecret = 'This is a secret 0103';

console.log(findSecret.indexOf('s'));
console.log(findSecret.charAt(3));

/**
 * Mayuscula & Minuscula
 * 1. toUpperCase()  ==> string
 * 3. toLowerCase()  ==> string
 */

let scream = 'This is a message';

console.log(scream.toUpperCase());

let inUpperCase = 'HOLA QUE TAL COMO ESTA?';

console.log(inUpperCase.toLowerCase());

/**
 * replace
 * 1. replace ==> string
 */

let myTemplate = 'Buenos dias nombre, como esta nombre?';

console.log(myTemplate.replace('nombre', 'Yosef'));

// expresiones regulares
console.log(myTemplate.replace(/nombre/g, 'Yosef'));

// number

// Math.floor ==> number
console.log(Math.floor(3.5));
console.log(Math.floor(3.3));
console.log(Math.floor(3.9));

// Math.round ==> number
console.log(Math.round(3.5));
console.log(Math.round(3.3));
console.log(Math.round(3.9));

// Math.abs ===> number
console.log(Math.abs(9 - 100));

// +, - , * , / ==> number
console.log(2 + 2);
console.log(9 - 100);
console.log(5 * 5);
console.log(23 / 4);
console.log(2 + 2 - (100 * 50) / 2);

// % ==> number
console.log(4 % 2);
console.log(3 % 2);

// booleans

// NOT ( ! )  ==> boolean
let x = true;
console.log(!x);
console.log(!false);

// AND ( && ) ==> boolean
let y = false;
let z = true;

console.log(y && z);
console.log(z && y);
console.log(y && y);
console.log(z && z);

// OR ( || ) ==> boolean

let w = false;
let v = true;

console.log(w || v);
console.log(v || w);
console.log(w || w);
console.log(v || v);

console.log(!((x && z) || v));

// ==, ===, !==  ==> boolean

console.log(10 == 9);
console.log(10 !== 9);
console.log(10 == '10');
console.log(10 !== '10');

console.log(10 === '10');
console.log(10 !== '10');
