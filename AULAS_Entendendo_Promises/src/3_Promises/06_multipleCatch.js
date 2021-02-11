const coinFlip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve(true) : reject(false))

console.log('Begin')

// A primeira captura irá capturar o erro do primeiro 'then', a última captura irá capturar os erros do próximo 'then'
coinFlip.then((data) => console.log('Yay 1'))
  .catch(() => console.log('First catch'))
  .then(() => console.log('Result'))
  .catch((err) => console.error('Error in last then'))
  .then(() => console.log('End1'))


// Ambas as capturas serão executadas
coinFlip.then((data) => console.log('Yay 1'))
  .then(() => console.log('Result'))
  .then(() => console.log('End1'))

coinFlip.catch(() => console.log('First catch'))
  .catch((err) => console.error('Error in first case, next then will not execute'))


// Ambas as capturas serão executadas
coinFlip.then((data) => console.log('Yay 1'))
  .catch((err) => console.error('Catch after then'))
  .then(() => console.log('Result'))
  .then(() => console.log('End1'))

coinFlip.catch(() => console.log('First catch'))

// Catch de coinFlip será executado apenas quando o primeiro 'then' falhar, o segundo catch sempre será executado
coinFlip.then((data) => console.log('Yay 1'))
  .then(() => { throw new Error() })
  .catch((err) => console.error('Error in last then'))
  .then(() => console.log('End1'))

coinFlip.catch(() => console.log('First catch'))