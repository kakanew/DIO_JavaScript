let alunos = gets();
let infoAlunos = [];

for (let i = 0; i < alunos; i++) {
    let nomeAluno = gets();
    let infoUniforme = gets().split(" ");

    infoAlunos.push({
        nome: nomeAluno,
        cor: infoUniforme[0],
        tamanho: infoUniforme[1]
    });
}

let Ordenados = infoAlunos.sort((a, b) => {
  if(a.cor > b.cor){
    return 1;
    }
    else {
        if (a.cor === b.cor) {
            if (a.tamanho < b.tamanho) {
                return 1;
            }
            else {
                if (a.cor === b.cor && a.tamanho === b.tamanho) {
                    if (a.nome > b.nome) {
                        return 1;
                    }
                    else {
                        return -1;
                    }
                }
                else {
                    return -1;
                }
            }
        }
        else {
            return -1;
        }
    }
});

Ordenados.map(aluno => console.log(aluno.cor, aluno.tamanho, aluno.nome));
