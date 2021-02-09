// No javascript é comum usar funções de callback para executar algo após alguma tarefa assíncrona ter sido executada.

// // callback
// // maneira tradicional de callback
// function doSomething(callback) {
//   setTimeout(function() {
//     // did something
//     callback('First data');
//   }, 1000);
// }

// function doOtherThing(callback) {
//   setTimeout(function() {
//     // did other thing
//     callback('Second data');
//   }, 1000);
// }

// // execução de maneira sequencial das funções com callback (callback hell)
// function doAll() {
//     try {
//     doSomething(function(data) {
//       var processedData = data.split('');

//         try {
//         doOtherThing(function(data2) {
//         var processedData2 = data2.split('');

//           try {
//           setTimeout(function() {
//               console.log(processedData, processedData2)
//             }, 1000);
//             } catch(err) {
//             // handle error     
//          }
//         });
//         } catch(err) {
//            // handle error     
//         }
//     });
//     } catch(err) {
//         // handle error
//     }
// }
// // chamando as funções
// doAll();

// // Promises
// new Promise((resolve, reject) => {})

// // Um objeto promise guarda a promessa de que a função que gerou ele irá em 
// // algum momento no futuro terminar e te retornar um resposta.
// // Ela pode ser uma resposta positiva ou negativa.
// // O promise pode ser passado para outras funções ou retornado.
// // Para evitar os diversos callback usamos promises.
// // Os estados de uma promises são:
// // Pending: Quando está em execução
// // Fulfilled: Quando terminou de executar
// // Rejected: Quando ocorreu algum erro
// // Para tratar os erros usamos o método .catch que irá receber uma função para o tratamento
// // Promise.race: cria uma Promise contendo diversas Promise e trazer o retorno da primeira que resolver entre elas.
// // Promise.all: Processa múltiplas Promise de maneira paralela e tratar o retorno de todas posteriormente

const doSomethingPromise = () => 
    new Promise((resolve, reject) => {
    // simulando retorno de erro
    // throw new Error('something went error');
    setTimeout(function() {
     // did something
      resolve('First data');
    }, 1000);
  });

const doOtherThingPromise = () => 
    new Promise((resolve, reject) => {
    // simulando retorno de erro
    // throw new Error('otherthing went error');
  setTimeout(function() {
    // did other thing
    resolve('Second data');
  }, 1000);
});

// Pending
// Fulfilled
// Rejected

// doSomethingPromise()
//   .then(data => {
//     console.log(data.split(''));
//     return doOtherThingPromise();
//   }) // sequenciando a segunda promisse para ser executada após a primeira
//   .then(data2 => console.log(data2.split('')))
//   .catch(error => console.log('Ops', error));


// // chamando as funções sequencialmente
// doSomethingPromise()
//   .then(data => {
//     console.log(data.split(''));
//     return doOtherThingPromise();
//   }) // sequenciando a segunda promisse para ser executada após a primeira
//   .then(data2 => console.log(data2.split('')))
//   .catch(error => console.log('Ops', error));


// // chamando as funções em paralelo e realizando algo após a execução de ambas
// Promise.all([doSomethingPromise(), doOtherThingPromise()])
//   .then(data => {
//     console.log(data[0].split(''));
//     console.log(data[1].split(''));
//   })
//   .catch(error => console.log('Ops', error));

// Executando todas as promises, mas retornando a primeira que conseguir resolver
Promise.race([doSomethingPromise(), doOtherThingPromise()])
  .then(data => {
    console.log(data);
  })
  .catch(error => console.log('Ops', error));