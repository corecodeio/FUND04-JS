/** OBJETOS
 *
 * POO: Objeto es un repositorio de datos (instancia de una clase)
 * Objeto (Javascript): Estructura de datos, forma llave --> valor
 *
 */

console.log('Hello World');

// Objeto vacio (definicion)
let user = {};
console.log(user);

// Objeto con valores (definicion)
let student = { name: 'Yosef', age: 27, reading: false };
let copyOfStudent = { name: 'Eduardo', age: 20, reading: true };
student.average = 100;
console.log(student);

function carlos() {
  return 'name';
}

let something = 'reading';

// Objeto Obtener valores
// 1. Propiedad de corchetes
console.log(student['age']);
console.log(copyOfStudent['age']);
console.log(student[carlos()]);
console.log(copyOfStudent[carlos()]);
console.log(copyOfStudent[something]);
// 2. Propiedad de punto
console.log(student.age);
console.log(student.name);

// Creating keys
let user2 = {};
console.log(user2);
user2['ipsum'] = 42;
console.log(user2);
user2.lorem = 'Hola que tal';
console.log(user2);

// Modify
let yetAnotherStudent = { name: 'Eduardo', age: 20, reading: true };
console.log(yetAnotherStudent);
yetAnotherStudent.name = 'Manuel';
yetAnotherStudent['age'] = 21;
console.log(yetAnotherStudent);

// Key as functions
// Greetings
let greetings = {
  secret: 'This is a secret message',
  spanish: function () {
    return 'Hola!';
  },
  english: function () {
    return 'Hello!';
  },
  speak: function (message) {
    return message.toUpperCase();
  },
};

console.log(greetings.spanish());
console.log(greetings.english());
console.log(greetings.secret);
console.log(greetings.speak(greetings.secret));

// object in object
let complexUser = {
  name: 'Yosef',
  age: 27,
  songs: {
    rap: 'lorem reap',
    pop: 'lorem pop',
    trap: {
      indie: 'trap indie',
      comercial: 'trap comercial',
    },
  },
};

console.log(complexUser.songs.trap.indie);
console.log(complexUser['songs']['trap']['indie']);

// Valor y Referencia
function change(message) {
  message = 'hola que tal';
}

let anotherMessage = 'hola';

change(anotherMessage);

console.log(anotherMessage);

//primitive types

let x = 9;
let a = x;
x = 100;

console.log(a);

let b = 'Hola';
let c = b;
b = 'Adios';

console.log(c);

// no primitive

let s = { name: 'Yosef', age: 27, reading: false };
let t = s;
console.log(t);
s.name = 'Daniel';
s.reading = true;
console.log(t);
