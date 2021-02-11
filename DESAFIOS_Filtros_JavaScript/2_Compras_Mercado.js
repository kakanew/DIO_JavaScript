var totalItens = parseInt(gets())
var lista = []

for(let i = 0; i < totalItens; i++) {
  lista.push(gets().split(' '));

}

for(let i = 0; i < totalItens; i++) {
  var txt = lista[i].sort()
  console.log(txt.filter((element, index , self)=>{
    return index === self.indexOf(element)
  }).join(' '))
}