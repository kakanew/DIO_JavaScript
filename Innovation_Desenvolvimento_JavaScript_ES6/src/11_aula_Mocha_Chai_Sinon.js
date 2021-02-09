// Mocha
// // inicializando
// // criando o projeto testes
// npm init -y
// // adicionando o mocha
// npm i --save-dev mocha
// // alterar o package.json scripts.test para "mocha"
// // para executar os testes
// npm run test
// // criar o diretório src
// // criar o arquivo math.js

// math.js
class Math {
  sum = function sum(a, b) {
    return a + b;
  }

  multiply = function multiply(a, b) {
    return a * b;
  }
}

module.exports = Math;
// math.spec.js
// Não possui uma ferramenta de *assert*
// E o *assert* é um pouco limitado, como alternativa temos o *chai*
const assert = require('assert');
const Math = require('../src/math.js');

let value = 0;

describe('Math class', function() {
  // hooks
  // permitir reiniciar uma variável antes de cada teste
  beforeEach(function() {
    value = 0;
  })

  // para validação de código assincrono, adicionamos o done no it para aguardar o processamento.
  // mocha não recomenda utilizar arrow functions e sim fuction para ter o controle de escopo.
  it('Sum two numbers', function(done) {
    const math = new Math();

    // é possível alterar o timeout do mocha, o padrão é 2000ms.
    this.timeout(3000);

    value = 0;

    math.sum(value, 5, value => {
      assert.equal(value, 10);
      done();
    });
  });

  // mocha permite deixar anotado os testes futuros
  // it('Multiply two numbers');
  
  // mocha executa apenas esse teste
  // it.only('Multiply two numbers', function() {});

  // mocha desconsidera esse teste
  // it.skip('Multiply two numbers', function() {});

  it('Multiply two numbers', function() {
    const math = new Math();

    assert.equal(math.multiply(value, 5), 0);
  });
});
