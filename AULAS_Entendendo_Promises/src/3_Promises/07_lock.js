const coinFlip = new Promise((resolve, reject) => setTimeout(() => Math.random() > 0.5 ? resolve(true) : reject(false), 2000))
let p = Promise.resolve('Yay').then(coinFlip)

// 'p' será resolvido imediatamente para 'Yay', mas não será resolvido até que a segunda promessa resolva com o coinflip
p.then(console.log).catch(() => console.log('error'))