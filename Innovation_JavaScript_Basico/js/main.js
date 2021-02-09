function clicou() {
    document.getElementById("agradecimento").innerHTML = "<h3>Obrigado por clicar</h3>";
    // console.log(document.getElementById("agradecimento"));
}

function redirecionar() {
    // window.open("https://www.versosonline.com.br/");
    window.location.href = "https://www.versosonline.com.br/";
}

function trocar(elemento) {
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    // alert("trocar texto");
}

function voltar(elemento) {
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";

}

function load() {
    alert("Página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}

// function clicou() {
//     alert("Obrigado por clicar")
// }

// function validaIdade(idade) {
//     var validar;
//     if (idade >= 18) {
//         validar = true
//     }else {
//         validar = false
//     }
//     return validar;
// } =
// var idade = prompt("Qual sua idade");
// console.log(validaIdade(idade));

// function soma(n1, n2) {
//     return n1 +n2;
// }
// function setReplace(frase, nome, novo_nome){
//    return frase.replace(nome, novo_nome)
// }
// alert(soma(5, 10));
// alert(setReplace("Vai Japão", "Japão", "Brasil"));


// var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"laranja", cor:"amarela"}]
// console.log(frutas);
// alert(frutas[0].nome);
// alert(frutas[1].nome);

// var fruta ={nome:"maça", cor:"vermelha"}
// console.log(fruta.nome);
// alert(fruta.cor);

// var lista = ["maça", "pêra", "laranja"]
// lista.push("uva");
// console.log(lista);
// console.log(lista.toString());
// console.log(lista.join(" - "));
// console.log(lista.length);
// console.log(lista.reverse());
// console.log(lista);
// lista.pop();
// console.log(lista);
// console.log(lista[1]);
// alert(lista[1]);



// var d = new Date();
//     alert(d);
//     alert(d.getMonth()+1);
//     alert(d.getMinutes());
//     alert(d.getHours());

// var count;
// for (count = 0; count <= 6; count++){
//     alert(count);
// };


// var count = 0;
// while (count <= 5) {
//     console.log(count);
//     count++;
// }

// var idade = prompt("Qual a sua idade?");
// if (idade >= 18) {
//     alert("Maior de idade");
// }else {
//     alert("Menor de idade");
// }

// var nome = "Cassia Maciel";
// var idade = 42;
// var idade2 = 10;
// var frase = "Brasil é o melhor time do mundo!"
// // alert(nome + " tem " + idade + " anos" );
// // alert(idade + idade2);
// console.log(nome);
// console.log(idade + idade2);
// console.log(frase);
// console.log(frase.replace("Brasil", "Inglaterra"));
// // alert(frase.replace("Brasil", "Inglaterra"));
// console.log(frase.toUpperCase());
// console.log(frase.toLowerCase());

