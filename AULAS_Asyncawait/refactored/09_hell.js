const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const basePath = './assets/'

const readFileAsync = promisify(fs.readFile)

console.log('Begin')
(async function (){

  try {
    const sentence1 = await readFileAsync(path.resolve(basePath, 's1.txt'), { encoding: 'utf-8' })
    console.log(sentence1, '\n')
  
    const sentence2 = await readFileAsync(path.resolve(basePath, 's2.txt'), { encoding: 'utf-8' })
    console.log(sentence2, '\n')
  
    const sentence3 = await readFileAsync(path.resolve(basePath, 's3.txt'), { encoding: 'utf-8' })
    console.log(sentence3, '\n')
  
    const sentence4 = await readFileAsync(path.resolve(basePath, 's4.txt'), { encoding: 'utf-8' })
    console.log(sentence4)
  
  }catch (err) {
    console.error(err)
  }
  console.log('End')
})()


console.log('Begin')
readFileAsync(path.resolve(basePath, 's1.txt'), { encoding: 'utf-8' })
  .then((sentence) => {
    console.log(sentence, '\n')
    return readFileAsync(path.resolve(basePath, 's2.txt'), { encoding: 'utf-8' })
  })
  .then((sentence) => {
    console.log(sentence, '\n')
    return readFileAsync(path.resolve(basePath, 's3.txt'), { encoding: 'utf-8' })
  })  
  .then((sentence) => {
    console.log(sentence, '\n')
    return readFileAsync(path.resolve(basePath, 's4.txt'), { encoding: 'utf-8' })
  })
  .then(console.log)
  .finally(() => console.log('End'))

    minhaFn((resultado) => {
      minhaOutraFunction(resultado, (resultad2) => {
        aindaOutraFunction(resultad2, (resultado3) => {
          maisUma(resultado3, () => {

          })
        })
      })
    })