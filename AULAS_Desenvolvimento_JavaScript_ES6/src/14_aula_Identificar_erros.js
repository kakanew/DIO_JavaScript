// Uma maneira de capturar erros no javascript é utilizando try/catch e 
// também impede que o programa pare sua execução caso ocorra algum erro

// erro-1.js

// erro: hoisting para constantes não existe
console.log('Start')
try {
  console.log(name);
  const name = 'Daniel';
} catch (err) {
  console.log('Error: ', err)
}
console.log('End')
// erro-2.js

// customizando mensagens de erro
try {
  const myError = new Error('Custom message');
  throw myError;
} catch (err) {
  console.log('Error: ', err)
}
// erro-3.js

// extendendo classe de erro
class CustomError extends Error {
  constructor({message, data}) {
    super(message);
    this.data = data;
  }
}
try {
  const myCustomError = new CustomError({
    message: 'Custom message',
    data: {
      type: 'Server error'
    }
  });

  throw myCustomError;
} catch (err) {
  if (err.data.type === 'Server error') {
    console.log('Error: ', err)
    console.log('Error Data: ', err.data)
  } else {
    console.log('Generic Error: ', err)
  }
}