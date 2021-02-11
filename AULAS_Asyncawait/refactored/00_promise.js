const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('End'), 5000)
})

(async function () {
  console.log('Begin')
  const text = await promise
  console.log(text)

  // Ou
  console.log(await promise)

  try {
    const res = await promise
    setTimeout(() => console.log(res), 5000)
  } catch (rej) {
    console.error(rej)
  }
})()


// // IIFE
// (async function () {

// })()

// (function () {
//   return new Promise((resolve, reject) => {
//     console.log('Olá MMundo')
//     resolve()
//   })
// })()


// // OU
// const algummaCoisa = function () {

// }
// algummaCoisa()