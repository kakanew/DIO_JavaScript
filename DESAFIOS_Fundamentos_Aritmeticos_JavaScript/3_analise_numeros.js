var numeros = [-5, 0, -3, -4, 12]; //  Entrada para Teste na IDE
// let numeros = []; // Comentar para Testes na IDE
let negativos = 0;
let positivos = 0;
let pares = 0;
let impares = 0;
for (i = 0; i < 5; i++) {
  // numeros[i] = parseInt(gets());  // Comentar para Testes na IDE
  if (numeros[i] < 0) {
    negativos++
  }
  if (numeros[i] > 0) {
    positivos++;
  }
  if (numeros[i] % 2 === 0) {
    pares++;
  }
  if (numeros[i] % 2 != 0) {
    impares++;
  }
}
console.log(pares + " valor(es) par(es)");
console.log(impares + " valor(es) impar(es)");
console.log(positivos + " valor(es) positivo(s)");
console.log(negativos + " valor(es) negativo(s)");