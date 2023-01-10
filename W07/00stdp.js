function normalize(str) {
  //return str.replace(/-/g, '/');
  return str.replace('-', '/').replace('-', '/');
}

let result = normalize('20-05-2017');
// '20/05/2017'
console.log(result);
