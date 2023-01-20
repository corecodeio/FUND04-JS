/**
 * Session
 *
 * for ... in
 * for ... of
 * forEach
 * while
 * break, continue
 * comma operator
 * Unary Op (+)
 */

const o = {
  name: 'Yosef',
  age: 27,
  developer: true,
};

const a = ['AA', 'BB', 'CC', 'DD'];

const str = 'Hola como estan todos hoy?';

// for ... in (Iterarr sobre los identificadores)
for (const ident in o) {
  console.log(ident + ' ===> ' + o[ident]);
}

for (const ident in a) {
  console.log(ident + ' ===> ' + a[ident]);
}

for (const ident in str) {
  console.log(ident + ' ===> ' + str[ident]);
}

// for ... of (Iterar sobre los valores)
for (const val of a) {
  console.log(val);
}

for (const val of str) {
  console.log(val);
}

// Ejemplo callback

function greetings(message) {
  console.log(message);
}

function execute(f) {
  f('Running...');
}

execute(greetings);

function auth(user) {
  if (user) {
    return true;
  }
  return false;
}

function success() {
  console.log('Login successfull');
}

function error(code, message) {
  console.log('Error: [' + code + ']' + message);
}

function login(userId, auth, ok, err) {
  if (auth(userId)) {
    ok();
  } else {
    err('404', 'not found');
  }
}

login('', auth, success, error);

// forEach

// function printValues(val, i, arr) {
//   console.log(val);
//   console.log(i);
//   console.log(arr);
// }

let amin = [];
a.forEach(function (Jonathan) {
  // amin.push(val.toLowerCase())
  //amin[i] = val.toLowerCase();
  //arr[i] = 'Yosef';
  //console.log(miIndiceFavorito);
  console.log(Jonathan);
});
console.log(amin);

console.log(a);

// while

// while(<condicion>) { }

for (let k = 0; k <= 10; k++) {
  console.log(k);
}

let k = 1;
while (k <= 10) {
  console.log(k);
  k++;
}
