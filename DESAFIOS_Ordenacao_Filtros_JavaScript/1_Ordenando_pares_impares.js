let numeros = [10, 4, 32, 34, 543, 3456, 654, 567, 87, 6789, 98] //  Entrada para Teste na IDE
// let numeros = parseInt(gets()) // Comentar para Testes na IDE
let par = []
let impar = []


for (let i = 0; i < numeros; i++) {
  // let raw = parseInt(gets()) // Comentar para Testes na IDE
  if (raw % 2 == 0) {
    par.push(raw)
  } else {
    impar.push(raw)
  }
}

par.sort(function (a, b) {
  return a - b
});
impar.sort(function (a, b) {
  return b - a
});

let output = [...par, ...impar]

for (let num of output) {
  console.log(num)
}