const dados = [ // Entrada para Teste na IDE
  '3',
  '3',
  '100 80 90',
  '4',
  '100 120 30 50',
  '4',
  '100 90 30 ',
]
let i = 0 // Testes na IDE

// const numeroAtendimentos = parseInt(gets()); // Comentar para Testes na IDE
const numeroAtendimentos = parseInt(dados[i++]); // Testes na IDE
let numeroClientes = [];
let senhas = [];

for (let n = 0; n < numeroAtendimentos; n++) {
  // numeroClientes[n] = parseInt(gets()); // Comentar para Testes na IDE
  numeroClientes[n] = parseInt(dados[i++]); // Testes na IDE

  // senhas[n] = gets().split(' '); // Comentar para Testes na IDE
  senhas[n] = dados[i++].split(' '); // Testes na IDE

  let senhasOrdenadas = Array.from(senhas[n]).sort((a, b) => b - a);

  let semTrocaLugar = 0;
  for (let i = 0; i < senhas[n].length; i++) {
    senhas[n][i] === senhasOrdenadas[i] && (semTrocaLugar++);
  }
  console.log(semTrocaLugar);
}