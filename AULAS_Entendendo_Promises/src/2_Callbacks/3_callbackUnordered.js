  
const fs = require('fs')
const path = require('path')
const basePath = './assets/'

console.log('Begin')

// Pegar todos os arquivos da pasta
const files = fs.readdirSync(path.resolve(basePath))

// Filtrar o que precisa
const sentences = files.filter((file) => /s[1-4].txt/gi.test(file))

// Leitura de todos os arquivos sincronicamente
for (const file of sentences) {
  fs.readFile(path.resolve(basePath, file), { encoding: 'utf-8' }, cb)
}

console.log('End')

function cb (err, data) {
  if (err) throw err
  console.log(data)
}