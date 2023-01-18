const o = {
  name: 'Carlos',
  bootcamp: 'Fundamentals',
};

const a = ['AA', 'ZZ', 'QQ', 'WW'];

const str = 'Hola soy un string iterable';

// for ... in (identificadores)

for (const k in o) {
  console.log(o[k]);
}

for (const i in a) {
  console.log(a[i]);
}

// for ... of (valores)
for (const v of a) {
  console.log(v);
}

for (const c of str) {
  console.log(c);
}

function execute(f) {
  f('Yosef');
}

function greetings(name) {
  console.log('Hola,' + name);
}

execute(greetings);

// forEach

function printElements(e) {
  console.log(e);
}

a.forEach(printElements);

a.forEach(console.log);

function test(value, index, arr) {
  console.log(value, index, arr);
}

a.forEach(test);

a.forEach((word) => {
  console.log(word);
});
