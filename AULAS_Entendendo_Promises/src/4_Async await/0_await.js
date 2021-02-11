const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const basePath = './assets/'
const readFileAsync = promisify(fs.readFile);

// 'Await' só pode ser chamado de uma função assíncrona
(async function () {
  console.log('Begin')
  const poem = await readFileAsync(path.resolve(basePath, 'invictus.txt'), { encoding: 'utf-8' })
  console.log(poem)
})()