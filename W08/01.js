// Random
let loteryNumber = Math.floor(Math.random() * 11);

console.log(Math.floor(5.9));
console.log(Math.floor(-5.2));

// if
// condicional simple
function lotery(number) {
  if (number === 7) {
    return '🎇Ganaste la loteria';
  }
  return '😢 Sigue participando';
}

console.log(lotery(loteryNumber));

// condicional con alternativa
function lotery2(number) {
  if (number === 7) {
    return '🎇Ganaste la loteria';
  } else {
    console.log('Participando con: ' + number);
  }
  return '😢 Sigue participando';
}

console.log(lotery2(loteryNumber));

function lotery3(number) {
  if (number === 7) {
    return '🎇Ganaste la loteria';
  } else if (number % 2 !== 0) {
    console.log('Participando con: ' + number);
    return '🌗Ganaste la mitad de la loteria';
  }
  return '😢 Sigue participando';
}

console.log(lotery3(loteryNumber));

// switch
function rgbColor(color) {
  if (color === 'Red') {
    return '#ff0000';
  } else if (color === 'Green') {
    return '#00ff00';
  } else if (color === 'Blue') {
    return '#0000ff';
  } else {
    return 'Not a valid rgb color';
  }
}

console.log(rgbColor('Blue'));

function rgbColorSwitch(color) {
  let result = '';
  switch (color) {
    case 'Red':
      result = '#ff0000';
      break;
    case 'Green':
      result = '#00ff00';
      break;
    case 'Blue':
      result = '#0000ff';
      break;
    default:
      result = 'Not a valid rgb color';
  }
  return result;
}

console.log(rgbColorSwitch('Green'));

// ternary operator

function loteryTernary(number) {
  return number === 7 ? '🎇Ganaste la loteria' : '😢 Sigue participando';

  // if (number === 7) {
  //   return '🎇Ganaste la loteria';
  // } else {
  //   return '😢 Sigue participando';
  // }
}

console.log(loteryTernary(7));

function loteryTernary2(number) {
  return number === 7
    ? '🎇Ganaste la loteria'
    : number % 2 !== 0
    ? '🌗Ganaste la mitad de la loteria'
    : '😢 Sigue participando';
  // if (number === 7) {
  //   return '🎇Ganaste la loteria';
  // } else if (number % 2 !== 0) {
  //   console.log('Participando con: ' + number);
  //   return '🌗Ganaste la mitad de la loteria';
  // } else {
  //   return '😢 Sigue participando';
  // }
}

console.log(loteryTernary2(4));

// for
let a = ['A', 'b', 'RR', 'hOLA', 345];

// for(init; condition; step) { }

for (let i = 0; i < 11; i++) {
  console.log(i);
}

for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}

let cond1 = true;
let cond2 = !cond1;

if (cond1) {
  if (cond2) {
  }
}

let x = 0;

x = x + 1;
x += 1;
x++;

// for ... in
// for ... of
// forEach
