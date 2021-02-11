let atendimento = gets();
let clientes = [];
let SMS = [];
let Ordenado = [];
let naoTrocarLugar = [];

for(let i = 0; i < atendimento; i++){
  clientes[i] = gets();
  SMS[i] = gets().split(" ");
  Ordenado[i] = SMS[i].map((num) => Number(num));
}

for(let i = 0; i < atendimento; i++){
  Ordenado[i].sort((a, b) => a - b).reverse();
}

for(let i = 0; i < atendimento; i++){
  let contador = 0;
  for(let j = 0; j < SMS[i].length; j++){
    if(parseInt(SMS[i][j]) === Ordenado[i][j]){
      contador++;
    }
  }
  naoTrocarLugar.push(contador);
}

console.log(naoTrocarLugar.join('\n'));
