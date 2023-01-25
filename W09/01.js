/**
 * string literals
 * rest/spread operator
 * destructuring assignment
 * short circuit evaluation
 */

const other = ' is a string 3';

const str1 = 'This is a string 1';
const str2 = 'This is a string 2';
const str3 = `This ${other}`;

console.log(str1);
console.log(str2);
console.log(str3);

const greetings = (name) => `Buenas tardes ${name}`;

const complexGreetings = (name) =>
  `${greetings(name)}, como se encuentra el dia de hoy?`;

console.log(complexGreetings('Yosef'));

// rest parameters operator
function sum(...params) {
  console.log(params);
  return params.reduce((acc, curr) => acc + curr, 0);

  /*
      params = [1,2,3]
      
      1. 
        acc === initValue , acc === 0
        curr === params[0], curr === 1
        
        return acc + curr ==> 0 + 1 === 1
        
      2. 
        acc === returnLastIteration, acc === 1
        curr === actualValue, curr === 2
        
        return acc + curr ===> 1 + 2 === 3
        
      3. 
        acc === returnLastIteration, acc === 3
        curr === actualValue, curr === 3
        
        return acc + curr ===> 3 + 3 === 6
  
  */
  /*
  
    SOLO PARA LA PRIMERA ITERACION 
    
    acc --> initValue si initValue existe
    acc --> a[0] si initValue no existe
    
    curr --> a[0] si initValue existe
    curr --> a[1] si initValue no existe
  
  
  */

  // reduce
  // parameters of reduce
  // 1. function
  // 	1.1 parameters of function
  //      PARA TODAS LAS ITERACIONES DESPUES DE LA PRIMERA
  //      1.1.1 acc  --> resultado de la iteracion anterior
  //      1.1.2 curr --> valor actual a[i]
  // 2. initValue
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

const mult = (m, ...jose) => {
  return m * jose.reduce((acc, curr) => acc + curr, 0);
};

console.log(mult(6, 2));
console.log(mult(7, 2, 3));
console.log(mult(8, 2, 3, 4, 5, 6, 7, 8, 9));

// spread operator
const numbers1 = [1, 2, 3, 4, 5];
const numbers0 = [-3, -2, -1, 0];
const numbers2 = [6, 7, 8, 9, 10];

// form 1
const numbers = [];

function pushArrays(src, des) {
  for (let i = 0; i < src.length; i++) {
    des.push(src[i]);
  }
}
pushArrays(numbers0, numbers);

pushArrays(numbers1, numbers);

pushArrays(numbers2, numbers);

console.log(numbers);

// form 2
console.log(numbers0.concat(numbers1).concat(numbers2));

// form 3
console.log([...numbers0, ...numbers1, ...numbers2]);

// ejemplo mult
const mult2 = (m, ...jose) => {
  return m * sum(...jose);
};

console.log(mult2(6, 2));
console.log(mult2(7, 2, 3));
console.log(mult2(8, 2, 3, 4, 5, 6, 7, 8, 9));
