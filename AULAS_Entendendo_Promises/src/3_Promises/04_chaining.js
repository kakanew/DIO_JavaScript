const coinFlip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve(true) : reject(false))

console.log('Begin')

// Primeiro caso, se tivermos um erro, o último 'then' não será executado
coinFlip.then((data) => console.log('Yay 1'))
  .then(() => console.log('End1'))
  .catch((err) => console.error('Error in first case, then will not execute'))

// Segundo caso, em uma exceção, o último será executado
coinFlip.then((data) => console.log('Yay 2'))
coinFlip.catch((err) => console.error('Next then will execute'))
coinFlip.then(() => console.log('End2'))

// Mesma coisa
coinFlip
  .then((success) => console.log('Yay 3'), (fail) => console.log('Error in third case'))
  .then(() => console.log('End3'))