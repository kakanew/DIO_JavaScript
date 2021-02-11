let numeros = parseInt(gets())
let par = []
let impar = []


for(let i = 0; i < numeros; i++) {
  let raw = parseInt(gets())
  if(raw%2==0) {
    par.push(raw)
  } else {
    impar.push(raw)
  }
}

par.sort(function(a, b){return a - b});
impar.sort(function(a, b){return b - a});

let output = [...par, ...impar]

for(let num of output) {
  console.log(num)
}