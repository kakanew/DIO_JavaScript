// fetch só irá disparar um erro caso aconteça um erro de rede 
// e não seja possível realizar a requisição.
// O retorno da invocação da função fetch é uma Promise.

// data.json

{
  "data"; [1, 2, 3]
}
// exibe no catch apenas erros de rede
// retorno do fetch é uma promise
fetch('/data.json')
  .then(responseStream => {
    if (responseStream.status === 200) {
      return responseStream.json()
    } else {
      throw new Error('Request error')
    }
  })
  .then(data => console.log(data))
  .catch(error => {
    console.log('Erro: ', error)
  });

// // Async/Await

// // Async: Uma forma de criar promises mais fácil
// // Await: A palavra reservada await pode ser usada dentro de uma função criada utilizando 
// // a palavra async e para aguardar a resolução de uma promise.

// const simpleFunc = async () => {
//   // throw new Error('Error')
//   return 12345;
// }

// simpleFunc()
//   .then(data => {
//     console.log(data)
//   })
//   .cathc(error => {
//     console.log(error);
//   })

// // promise para teste de await
// const asyncTime = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(function() {
//       resolve(123456);
//     }, 1000);
//   });

// const simpleAsyncTime = async () => {
//   const data = await asyncTime();
//   return data;
// }

// // processamento assincrono como se fosse sincrono com o await
// const simpleAsyncFetch = async () => {
//   const data = await asyncTime();
//   console.log(data);

//   const dataJson = await fetch('/data.json')
//                         .then(responseStream => {
//                           if (responseStream.status === 200) {
//                             return responseStream.json()
//                           } else {
//                             throw new Error('Request error')
//                           }
//                         })
//                         .then(data => console.log(data))
//                         .catch(error => {
//                           console.log('Erro: ', error)
//                         });
//   return dataJson;
// }

// // usando promise.all, para executar em paralelo
// const simpleAsyncFetch = async () => {
//   const data = await Promise.all([
//     asyncTime(),
//     fetch('/data.json')
//     .then(responseStream => {
//       if (responseStream.status === 200) {
//         return responseStream.json()
//       } else {
//         throw new Error('Request error')
//       }
//     })
//     .then(data => console.log(data))
//     .catch(error => {
//       console.log('Erro: ', error)
//     });
//   ]);

//   return data;
// }

