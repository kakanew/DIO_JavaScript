const coinFlip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve(true) : reject(false))

console.log('Begin')

(async function () {
  const result = await coinFlip
  .then(result => `O resultado é: ${result}`)
  .then(text => `Alguém disse que ${text}`)

new Promise((resolve) => setTimeout(() => resolve(), 2000)).then(() => console.log('Yay'))
})()