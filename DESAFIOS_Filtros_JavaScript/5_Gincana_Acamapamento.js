let quantidadeAlunos;
let infoAluno = [];
let vencedores = [];

while(true){
  quantidadeAlunos = gets();
  if(quantidadeAlunos === "0") break;
  
  if(quantidadeAlunos >= 1 && quantidadeAlunos <= 100){
    let dadosLinha = [];
    for(let i = 0; i < quantidadeAlunos; i++){
      let linha = gets().split(" ");
      dadosLinha.push({
        nome:  (linha[0].length > 30) ? linha[0].substring(0,30) : linha[0],
        ficha: (parseInt(linha[1]) > 500) ? 500 :  parseInt(linha[1])
      });
    }
    infoAluno.push(dadosLinha);
  }
}

for(let circ = 0; circ < infoAluno.length; circ++){
  let contadorFicha = infoAluno[circ][0].ficha;
  let indice = 0;
  let indiceMax = infoAluno[circ].length-1;
  let indiceMin = 0;

  while(infoAluno[circ].length > 1){
    for(let cont = 0; cont < contadorFicha; cont++){
      if(contadorFicha % 2 === 0){
        //sentido horário (do fim para o começo)
        indice--;
      }
      else{
        //sentido antí-horário (do começo para o fim)
        indice++;
      }
      
      if(indice > indiceMax){
        indice = indiceMin;
      }
      if(indice < indiceMin){
        indice = indiceMax;
      }
    }

    contadorFicha = infoAluno[circ][indice].ficha;
    infoAluno[circ].splice(indice,1);
    indiceMax = infoAluno[circ].length-1;

    if(contadorFicha % 2 === 0){
      if(indice > indiceMax) {
        indice = indiceMin;
      }
    }
    else{
      indice--;
    }
    if(indice > indiceMax) {
      indice = indiceMin;
    }
    if(indice < indiceMin){
      indice = indiceMax;
    }
  }
}

for(dado of infoAluno){
  console.log("Vencedor(a): " + dado[0].nome);
}
