let N = 576 //  Entrada para Teste na IDE
let cedulas = [100,50,20,10,5,2,1]
let quantidade = []

// let N = parseInt(gets()); // Comentar para Testes na IDE
let resto = N

while (resto > 0)
{
  for (var i = 0; i <= cedulas.length - 1; i++)
  {
    quantidade.push(parseInt(resto / cedulas[i]));
    resto = resto % cedulas[i];
  }
}

console.log(N);

for(var n in quantidade)
  console.log(quantidade[n] + " nota(s) de R$ " + parseFloat(cedulas[n]).toLocaleString("pt-BR", {currency: 'BRL', minimumFractionDigits: 2}));