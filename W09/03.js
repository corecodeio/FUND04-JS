/**
 * destructuring assignment
 * short circuit evaluation
 * try/catch
 * setTimeout
 * promises
 * - then/catch
 * - async/await
 */

// React hooks  useState

// const [state, setState] = useState({ send: false });

// Destructuring assignment (Arrays)

const arr = ['Diego', 'Alex', 'Jonatan', 'Manuel', 'Yosef', 'Carlos'];

// const user1 = arr[0];
// const user2 = arr[1];

const [user1, , user2, ...nombrecitos] = arr;

console.log(user1);
console.log(user2);
console.log(nombrecitos);

// Destructuring assignment (Objects)
const user = {
  name: 'Alex',
  age: 21,
  admin: true,
};

// const username = user.name;
// const age = user.age;
// const admin = user.admin
// console.log(username);

let { name: username, age, admin } = user;
console.log(username);
console.log(age);

console.log(user);

// short circuit evaluation

function trueReturn() {
  console.log('trueReturn');
  return true;
}

function falseReturn() {
  console.log('falseReturn');
  return false;
}

if (trueReturn() || falseReturn()) {
  console.log('OR -> Es verdadero');
} else {
  console.log('OR -> Es falso');
}

if (falseReturn() && trueReturn()) {
  console.log('AND -> Es verdadero');
} else {
  console.log('AND -> Es falso');
}

// default values
const config = {
  server_port: 80,
  secret: '#sdfH6@3!',
};
const port = config.server_port || 3000;
console.log(port);

// conditional assigment
let userValue = 20;
let number = 0;
if (userValue) {
  number = 90;
}
console.log(number);

let userValue2 = -1;
let number2 = userValue2 && 90;
console.log(number2);

function loginDB(username, password) {
  // proceso real de autenticacion....
  console.log('Doing proces...');
  if (username === 'admin' && password === 'admin123') {
    return true;
  }
  return false;
}

let db_username = '';
let db_password = 'admin123';
let process = db_username && db_password && loginDB(db_username, db_password);

if (process) {
  console.log('Authentication OK');
} else {
  console.log('Authentication Fail');
}

// try/catch

//const sum = (a,b) => a+b;

function operation(a, b) {
  try {
    let result = a * b + sum(a, b);
    return result;
  } catch (e) {
    console.log(e.message);
    console.log('Catch');
    return a * b;
  }
}

const important = operation(2, 2);

console.log('Important code....');

console.log(important);
