// Recorrer un objeto
let data = {
  first: '1',
  second: '2',
  third: false,
  fourth: ['anytime', 2, 3, 4],
  fifth: null,
};

//console.log(typeof data.fourth);

function strCount(obj) {
  // 1. Recorrer el objeto para obtener las llaves
  // for ... in
  let value = null;
  let count = 0;
  for (let key in obj) {
    // 2. Obtener el valor de cada key dentro del objeto
    value = obj[key];
    // 3. Verificar si el valor (tipo de dato) es un string
    if (typeof value === 'string') {
      //count = count + 1;
      //count += 1;
      count++;
    } else if (typeof value === 'object') {
      // 4. Si es un objeto, verificar si ese objeto tiene dentro strings, y devolver esa cuenta
      count = count + strCount(value);
    }
  }
  // 5. retornar resultado
  return count;
}

let result = strCount(data);

console.log(result);
