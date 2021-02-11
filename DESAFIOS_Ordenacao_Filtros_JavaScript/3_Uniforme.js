const dados = [ //  Entrada para Teste na IDE
    '9',
    'Maria Jose',
    'branco P',
    'Mangojata Mancuda',
    'vermelho P',
    'Cezar Torres Mo',
    'branco P',
    'Baka Lhau',
    'vermelho P',
    'JuJu Mentina',
    'branco M',
    'Amaro Dinha',
    'vermelho P',
    'Adabi Finho',
    'branco G',
    'Severina ',
    'branco G',
    'Carlos Chade ',
    'vermelho P',
    '0'
]

// const uniformes = parseInt(gets()); // Comentar para Testes na IDE
const uniformes = parseInt(dados[0]); // Testes na IDE
let i = 1; // Testes na IDE
let alunos = [];

while (true) {
    // let nome = gets(); // Comentar para Testes na IDE
    let nome = dados[i++]; // Testes na IDE
    if (parseInt(nome) === 0) break;

    // let [cor, tamanho] = gets().split(' '); //  Comentar para Testes na IDE
    let [cor, tamanho] = dados[i++].split(' '); // Testes na IDE

    alunos = [...alunos, { nome, cor, tamanho }]
}

alunos
    .sort((a, b) => {
        for (let [testCase, sortCase] of [
            [a.cor > b.cor, 1],
            [a.cor < b.cor, -1],
            [a.tamanho > b.tamanho, -1],
            [a.tamanho < b.tamanho, 1],
            [a.nome > b.nome, 1],
            [a.nome < b.nome, -1],
        ]) {
            if (testCase) return sortCase;
        }
    })

alunos.map(({ nome, cor, tamanho }) => {
    console.log(`${cor} ${tamanho} ${nome}`);
})