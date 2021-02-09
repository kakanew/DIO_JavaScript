const fs = require('fs')
const path = require('path')
const basePath = './assets/'

console.log('Begin')

// Este é um processo assíncrono de fileRead, ele não irá parar o programa
// Observe a função no final, que é um retorno de chamada
fs.readFile(path.resolve(basePath, 'invictus.txt'), { encoding: 'utf-8' }, cb)

console.log('End')

function cb (err, data) {
// Esta é a maneira como lidamos com erros em retornos de chamada
  if (err) throw err
  console.log(data)
}