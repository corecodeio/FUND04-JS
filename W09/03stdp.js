for (let i = 0; i < 10; i++) {
  console.log('===============================');
  console.log(`i: ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`\t\t - j: ${j}`);
  }
  console.log('===============================');
}

const arr = [
  [1, 2, 3, 4], // 10
  [5, 6, 7, 8], // 26
  [9, 10, 11, 12], // 42
];
// 1. ==>  78
let result1 = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    result1 += arr[i][j];
  }
}
console.log(result1);

// 2. ==> [10, 26, 42]
// resultArray.push(cada resultado)
// cada resultado = ??
let result2 = 0;
let resultArray = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    result2 += arr[i][j];
  }
  resultArray.push(result2);
  result2 = 0;
}
console.log(resultArray);

// 3. ==> Jonathan([10, 26, 42])
let jonathan = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    jonathan[i] = (jonathan[i] || 0) + arr[i][j];
  }
}
console.log(jonathan);
