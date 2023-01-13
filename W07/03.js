// Hoisting (var --> let, const **no funciona)
x = 5;
console.log(x + 3);
var x;

// var y = 'Hola';
// console.log(y + ' ' + z);
// var z = 'como estas?';

var y = 'Hola';
var z;
console.log(y + ' ' + z);
z = 'como estas?';

// w = 5;
// console.log(w + 3);
// let w;

// var y = 'Hola';
// z = 'bien y tu?';
// console.log(y + ' ' + z);
// console.log(z);
// var z = 'como estas?';

var z;
var y = 'Hola';
z = 'bien y tu?';
console.log(y + ' ' + z);
z = 'como estas?';
console.log(z);

// Array
// Arreglo vacio
let a = [];
console.log(a.length);

// Arreglo con datos
// Acceso por indices
let b = [1, 2, 3, 4, 5];
console.log(b[1]);
let c = ['hola', true, 'que', 45, { name: 'yosef' }, 3];
console.log(c[5]);
console.log(c[c.length - 1]);
console.log(c[4].name);
console.log(c[4]['name']);
console.log(c[c.length - 2]['name']);

// Propiedad length
let d = [1, 2, 3, 'yosef', false, false, true];
console.log(d.length);

// arreglo multidimensional
let e = [1, [3, 5, 6, [7, 8, [8.5, 9, 9.5], 10]]];
console.log(e[1][0]);
console.log(e[1][3][2][1]);

// this
let user = {
  name: 'Yosef',
  age: 20,
  isLegal: function () {
    return this.age >= 21;
  },
  showThis: function () {
    console.log(this);
  },
};

this.secret = 'Hola!!!';

user.showThis();
console.log(user.isLegal());
console.log(this);

function something() {
  console.log(this);
}

something();

// constructor objects
function User(p_name, p_age) {
  this.nombresito = p_name;
  this.age = p_age;
}

User.prototype.isLegal = function () {
  return this.age >= 19;
};

let u = new User('Yosef', 27);
console.log(u);
console.log(u.isLegal());
let t = new User('Jonathan', 20);
console.log(t);
console.log(t.isLegal());
console.log(t.nombresito);
