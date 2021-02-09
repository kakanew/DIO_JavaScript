  
function coinFlip () { return new Promise((resolve, reject) => Math.random() > 0.5 ? resolve('Yay') : reject('Oops')) }

// retornar a 'promise' irá delegar o tratamento de erros ao chamador
async function start () {
  try {
    return coinFlip()
  } catch (error) {
    console.log('Await error')
  }
}

start().then(console.log).catch((err) => console.log('Promise error:', err))