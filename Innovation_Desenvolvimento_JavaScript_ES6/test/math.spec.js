const assert = require('assert');
const Math = require('../math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

let value = 0;

describe('math class', function() {
    //hooks
    // permitir reiniciar uma variável antes de cada teste
    beforeEach(function() {
        value = 0;
    });
    // para validação de código assincrono, adicionamos o done no it para aguardar o processamento.
    // mocha não recomenda utilizar arrow functions e sim fuction para ter o controle de escopo.
    it('Sum two numbers', function(done) {
        const math = new Math();
    // é possível alterar o timeout do mocha, o padrão é 2000ms.
        this.timeout(3000);

        value = 5;

        math.sum(value, 5, (value) => {
      // assert
      // assert.equal(value, 10);

            //chai
            expect(value).to.equal(10);
            done();
        });
    });
    // mocha permite deixar anotado os testes futuros
    it('Multiply numbers');
        
    it('Multiply two numbers', function() {
        const math = new Math();

        expect(math.multiply(value, 5)).to.equal(0);
    });
    // chai comparando propriedades de objetos
    it('Compare property name of objects', function() {
        const math = new Math();
        const obj = {
           name: 'Cássia'
        };

        // const obj2 = obj;
        const obj2 = {
            name: 'Cássia'
        };

        // expect(obj).to.equal(obj2);
        expect(obj).to.deep.equal(obj2);
    });

    it.only('Calls res with sum and index values', function() {
        const req = {};
        const res = {
            load: function load() {
                console.log('Called!');               
            }
        };

        sinon.stub(res, 'load').returns('xpto');

        const math = new Math();

        math.printSum(req, res, 5, 5);

             // expect(res.load.calledOnce).to.be.true;
        expect(res.load.args[0][0]).to.equal('index');
        // expect(res.load.args[0][1]).to.equal(10);
    });
});
// const assert = require('assert');
// const Math = require('../math.js');
// const expect = require('chai').expect;
// const sinon = require('sinon');

// let value = 0;

// describe('math class', function() {
//     //hooks
//     // permitir reiniciar uma variável antes de cada teste
//     beforeEach(function() {
//         value = 0;
//     });
//     // para validação de código assincrono, adicionamos o done no it para aguardar o processamento.
//     // mocha não recomenda utilizar arrow functions e sim fuction para ter o controle de escopo.
//     it('Sum two numbers', function(done) {
//         const math = new Math();
//     // é possível alterar o timeout do mocha, o padrão é 2000ms.
//         this.timeout(3000);

//         value = 5;

//         math.sum(value, 5, (value) => {
//       // assert
//       // assert.equal(value, 10);

//             //chai
//             expect(value).to.equal(10);
//             done();
//         });
//     });
//     // mocha permite deixar anotado os testes futuros
//     it('Multiply numbers');
        
//     it('Multiply two numbers', function() {
//         const math = new Math();

//         expect(math.multiply(value, 5)).to.equal(0);
//     });
//     // chai comparando propriedades de objetos
//     it('Compare property name of objects', function() {
//         const math = new Math();
//         const obj = {
//            name: 'Cássia'
//         };

//         // const obj2 = obj;
//         const obj2 = {
//             name: 'Cássia'
//         };

//         // expect(obj).to.equal(obj2);
//         expect(obj).to.deep.equal(obj2);
//     });

//     it.only('Calls res with sum and index values', function() {
//         const req = {};
//         const res = {
//             load: function load() {
//                 console.log('Called!');               
//             }
//         };

//         sinon.spy(res, 'load');

//         const math = new Math();

//         math.printSum(req, res, 5, 5);

//         // expect(res.load.calledOnce).to.be.true;
//         expect(res.load.args[0][0]).to.equal('index');
//         // expect(res.load.args[0][1]).to.equal(10);
//     });
// });
////////////////////////////////////////////////
// const assert = require('assert');
// const Math = require('../math.js');
// const expect = require('chai').expect;
// const sinon = require('sinon');

// let value = 0;

// describe('math class', function() {
//     //hooks
//     // permitir reiniciar uma variável antes de cada teste
//     beforeEach(function() {
//         value = 0;
//     });
//     // para validação de código assincrono, adicionamos o done no it para aguardar o processamento.
//     // mocha não recomenda utilizar arrow functions e sim fuction para ter o controle de escopo.
//     it('Sum two numbers', function(done) {
//         const math = new Math();
//     // é possível alterar o timeout do mocha, o padrão é 2000ms.
//         this.timeout(3000);

//         value = 5;

//         math.sum(value, 5, (value) => {
//       // assert
//       // assert.equal(value, 10);

//             //chai
//             expect(value).to.equal(10);
//             done();
//         });
//     });
//     // mocha permite deixar anotado os testes futuros
//     it('Multiply numbers');
        
//     it('Multiply two numbers', function() {
//         const math = new Math();

//         expect(math.multiply(value, 5)).to.equal(0);
//     });
//     // chai comparando propriedades de objetos
//     it('Compare property name of objects', function() {
//         const math = new Math();
//         const obj = {
//            name: 'Cássia'
//         };

//         // const obj2 = obj;
//         const obj2 = {
//             name: 'Cássia'
//         };

//         // expect(obj).to.equal(obj2);
//         expect(obj).to.deep.equal(obj2);
//     });

//     it.only('Calls res with sum and index values', function() {
//         const req = {};
//         const res = {
//             load: sinon.spy()
//         };

//         const math = new Math();

//         math.printSum(req, res, 5, 5);

//         // expect(res.load.calledOnce).to.be.true;
//         expect(res.load.args[0][0]).to.equal('index');
//         // expect(res.load.args[0][1]).to.equal(10);
//     });
// });
//////////////////////////////////////////////////////////////
// const assert = require('assert');
// const Math = require('../math.js');
// const expect = require('chai').expect;
// const sinon = require('sinon');

// let value = 0;

// describe('math class', function() {
//     //hooks
//     // permitir reiniciar uma variável antes de cada teste
//     beforeEach(function() {
//         value = 0;
//     });
//     // para validação de código assincrono, adicionamos o done no it para aguardar o processamento.
//     // mocha não recomenda utilizar arrow functions e sim fuction para ter o controle de escopo.
//     it('Sum two numbers', function(done) {
//         const math = new Math();
//     // é possível alterar o timeout do mocha, o padrão é 2000ms.
//         this.timeout(3000);

//         value = 5;

//         math.sum(value, 5, (value) => {
//       // assert
//       // assert.equal(value, 10);

//             //chai
//             expect(value).to.equal(10);
//             done();
//         });
//     });
//     // mocha permite deixar anotado os testes futuros
//     it('Multiply numbers');
        
//     it('Multiply two numbers', function() {
//         const math = new Math();

//         expect(math.multiply(value, 5)).to.equal(0);
//     });
//     // chai comparando propriedades de objetos
//     it('Compare property name of objects', function() {
//         const math = new Math();
//         const obj = {
//            name: 'Cássia'
//         };

//         // const obj2 = obj;
//         const obj2 = {
//             name: 'Cássia'
//         };

//         // expect(obj).to.equal(obj2);
//         expect(obj).to.deep.equal(obj2);
//     });

//     it.only('Calls res with sum and index values', function() {
//         const req = {};
//         const res = {
//             load: sinon.spy()
//         };
//         const math = new Math();

//         math.printSum(req, res, 5, 5);

//         // expect(res.load.calledOnce).to.be.true;
//         // expect(res.load.args[0][0]).to.equal('index');
//         expect(res.load.args[0][1]).to.equal(10);
//     });
// });
/////////////////////////////////////////////////
// const assert = require('assert');
// const Math = require('../math.js');
// const expect = require('chai').expect;

// let value = 0;

// describe('math class', function() {
//     //hooks
//     // permitir reiniciar uma variável antes de cada teste
//     beforeEach(function() {
//         value = 0;
//     });
//     // para validação de código assincrono, adicionamos o done no it para aguardar o processamento.
//     // mocha não recomenda utilizar arrow functions e sim fuction para ter o controle de escopo.
//     it('Sum two numbers', function(done) {
//         const math = new Math();
//     // é possível alterar o timeout do mocha, o padrão é 2000ms.
//         this.timeout(3000);

//         value = 5;

//         math.sum(value, 5, (value) => {
//       // assert
//       // assert.equal(value, 10);

//             //chai
//             expect(value).to.equal(10);
//             done();
//         });
//     });
//     // mocha permite deixar anotado os testes futuros
//     it('Multiply numbers');
        
//     it('Multiply two numbers', function() {
//         const math = new Math();

//         expect(math.multiply(value, 5)).to.equal(0);
//     });
//     // chai comparando propriedades de objetos
//     it('Compare property name of objects', function() {
//         const math = new Math();
//         const obj = {
//            name: 'Cássia'
//         };
//         expect(obj)
//             .to.have.property('name')
//             .equal('Cássia');
//     });
// });

///////////////////////////////////////
// const assert = require('assert');
// const Math = require('../math.js');

// let value = 0;

// describe('math class', function() {
//     //hooks
//     beforeEach(function() {
//         value = 0;
//     });

//     it('Sum two numbers', function(done) {
//         const math = new Math();
//         this.timeout(3000);

//         value = 5;

//         math.sum(value, 5, (value) => {
//             assert.equal(value, 10);
//             done();
//         })
//     });

//     it('Multiply numbers');
//         it('Multiply two numbers', function() {
//         const math = new Math();

//         assert.equal(math.multiply(value, 5), 0);
//     });


//////////////////////////////////////////////
// const assert = require('assert');
// const Math = require('../math.js');

// describe('math class', function() {
//     it('Sum two numbers', function(done) {
//         const math = new Math();
//         this.timeout(3000);

//         math.sum(5, 5, (value) => {
//             assert.equal(value, 10);
//             done();
//         })
//     });

//     it('Multiply numbers');
//         it('Multiply two numbers', function() {
//         const math = new Math();

//         assert.equal(math.multiply(5, 5), 25);
//     });

    // it.skip('Multiply two numbers', function() {
    //     const math = new Math();

    //     assert.equal(math.multiply(5, 5), 25);
    // });
    // it.only('Multiply two numbers', function() {
    //     const math = new Math();

    //     assert.equal(math.multiply(5, 5), 25);
    // });
// });


///////////////////////////////////////////////
// const { strict } = require('assert');
// const assert = require('assert');
// const Math = require('../math.js');

// describe('math class', function() {
//     it('Sum two numbers', function(done) {
//         const math = new Math();
//         this.timeout(3000);

//         math.sum(5, 5, (value) => {
//             assert.equal(value, 10);
//             done();
//         })
//     });
// });

/////////////////////////////////////
// const { strict } = require('assert');
// const assert = require('assert');
// const Math = require('../math.js');

// describe('math class', function() {
//     it('Sum two numbers', function(done) {
//         const math = new Math();

//         math.sum(5, 5, (value) => {
//             assert.equal(value, 10);
//             done();
//         })
//     });
// });

/////////////////////////////////////
// const { strict } = require('assert');
// const assert = require('assert');
// const Math = require('../math.js');

// describe('math class', function() {
//     it('Sum two numbers', function(done) {
//         const math = new Math();

//         math.sum(5, 5, (value) => {
//             assert.equal(value, 15);
//             done();
//         })
//     });
// });

///////////////////////////////////////
// const { strict } = require('assert');
// const assert = require('assert');
// const Math = require('../math.js');

// describe('math class', function() {
//     it('Sum two numbers', function() {
//         const math = new Math();

//         throw new Error('Ohhh nooo Errorrrr!');
//         assert.equal(math.sum(5, 5), 10);
//     });
// });

////////////////////////////////////////////
// const { strict } = require('assert');
// const assert = require('assert');
// const Math = require('../math.js');

// describe('math class', function() {
//     it('Sum two numbers', function() {
//         const math = new Math();

//         try {
//         assert.equal(math.sum(5, 5), 10);
//         } catch(err) {
//             console.log(err)
//         }
//     });
// });


//////////////////////////////////////////
// const { strict } = require('assert');
// const assert = require('assert');
// const Math = require('../math.js');

// describe('math class', function() {
//     it('Sum two numbers', function() {
//         const math = new Math();

//         assert.equal(math.sum(5, 5), 10);

//     });
// });
//////////////////////////////////////////////