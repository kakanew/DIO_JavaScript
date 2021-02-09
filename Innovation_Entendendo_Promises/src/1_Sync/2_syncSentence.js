const fs = require('fs')
const path = require('path')
const basePath = './assets/'

console.log('Begin\n')

// Pegar todos os arquivos da pasta
const files = fs.readdirSync(path.resolve(basePath))

// Filtrar o que precisa
const sentences = files.filter((file) => /s[1-4].txt/gi.test(file))

// Leitura de todos os arquivos sincronicamente
for (const file of sentences) {
  const sentence = fs.readFileSync(path.resolve(basePath, file)).toString()
  console.log(sentence, '\n')
}

console.log('end')