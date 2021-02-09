const fs = require('fs')
const path = require('path')
const basePath = './assets/'

console.log('Begin')

// Este é um exemplo de um arquivo de sincronização lido, ele pausa o programa e lê o arquivo
const content = fs.readFileSync(path.resolve(basePath, 'invictus.txt'))

console.log(content.toString())

console.log('end')