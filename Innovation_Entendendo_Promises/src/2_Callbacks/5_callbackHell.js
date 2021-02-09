const fs = require('fs')
const path = require('path')
const basePath = './assets/'

console.log('Begin')

// Pegar todos os arquivos da pasta
fs.readdir(path.resolve(basePath), (err, files) => {
  if (err) throw err
  files
    .filter((file) => /s[1-4].txt/gi.test(file)) // Filtra os arquivos
    .forEach((sentenceFile) => { // Para cada frase, lê e imprime (assíncrono)
      fs.readFile(path.resolve(basePath, sentenceFile), { encoding: 'utf-8' }, cb) // Imprimirá não ordenado
    })
})

console.log('End')

// este retorno de chamada é chamado toda vez que readFile executa
function cb (err, data) {
  if (err) throw err
  console.log(data)
}