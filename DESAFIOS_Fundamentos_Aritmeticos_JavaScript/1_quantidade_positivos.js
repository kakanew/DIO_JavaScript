var numero = [7, -5, 6, -3.4, 4.6, 12]; //  Entrada para Teste na IDE
var totalPositivos = 0;

for (var i = 0; i <= 6; i++) {
    // var numero = parseFloat(gets())  // Comentar para Testes na IDE
        { if (numero[i] > 0) // Testes na IDE
    //  { if (numero > 0)    // Comentar para Test na DE
            totalPositivos++;
    }
}
console.log(totalPositivos + " valores positivos");