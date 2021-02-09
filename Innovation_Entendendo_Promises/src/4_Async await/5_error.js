function coinFlip () { return new Promise((resolve, reject) => Math.random() > 0.5 ? resolve('Yay') : reject('Oops')) }

// 'return' e 'await' resolverá a promessa internamente e tratará o erro dentro do bloco catch
async function start () {
  try {
    return await coinFlip()
  } catch (error) {
    console.log('Await error')
  }
}

// It is the equivalent of
// async function start () {
//   try {
//     const result = await coinFlip()
//     return result
//   } catch (error) {
//     console.log('Await error')
//   }
// }

start().then(console.log).catch((err) => console.log('Promise error:', err))