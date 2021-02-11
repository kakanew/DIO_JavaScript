var totalItens = 2 //  Entrada para Teste na IDE
var totalItens = parseInt(gets())
var lista = []
var lista = [carne, laranja, suco, picles, laranja, picles, laranja, pera, laranja, pera, pera] //  Entrada para Teste na IDE

for (let i = 0; i < totalItens; i++) {
  lista.push(gets().split(' '));

}

for (let i = 0; i < totalItens; i++) {
  var txt = lista[i].sort()
  console.log(txt.filter((element, index, self) => {
    return index === self.indexOf(element)
  }).join(' '))
}