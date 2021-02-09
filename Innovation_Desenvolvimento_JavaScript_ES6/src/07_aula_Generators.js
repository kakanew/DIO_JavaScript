// Generators pausa e despausa funções
// Se comunica através de iterações
// A forma de retornar um valor em cada iteração de uma função generator 
// é incluir o valor após a palavra yield.
// Generators podem receber valores em cada pausa para continuar sua execução, 
// podemos enviar valores de volta ao iterador passando o valor como parâmetro ao método next.
// Generators podem "pausar" sua execução através da palavra reservada yield
// Podemos utilizar generators para construir objetos iteráveis, 
// pois generators utilizam a mesma interface e podem ser utilizados 
// para construir o iterador de um objeto iterável.
// pausa na execução da função e passagem de parâmetros para cada retomada da execução

// function* hello() {
//   console.log('Hello');
//   yield 1; // pode-se passar um valor para o yield

//   console.log('From');
//   const value = yield 2;

//   console.log(value);
// }

// const it = hello();

// console.log(it.next())
// console.log(it.next())
// console.log(it.next('Outside!')) // passagem de parâmetros

// criação de uma função com números infinitos, mas chamados quando necessário
function* naturalNumbers() {
  let number = 0;
  while (true) {
    yield number;
    number++;
  }
}

// const it = naturalNumbers();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// podemos usar o generator para construir a interface de geração dos iterators.
// dessa for não é necessário criar o método next, pois o generator realiza
// o procedimento, ou seja, generator pode ser usado para criar iterator
const obj = {
  values: [1, 2, 3, 4],
  *[Symbol.iterator]() {
    for (var i = 0; i < this.values.length; i++) {
      yield this.values[i];
    }
  }
};

// iteração em objetos
for (let value of obj) {
  console.log(value)
}