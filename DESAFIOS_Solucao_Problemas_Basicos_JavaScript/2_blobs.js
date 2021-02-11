let quantCasos = parseInt(gets()); // Quantidade de casos

function calculoDias(quantComida) {
  if (quantComida <= 1) {
    return 0;
  }

  const metadeComida = quantComida / 2; // Blobs come metade da comida disponível no dia
  return 1 + calculoDias(metadeComida); 
}

while (quantCasos-- > 0) {
  const quantComida = parseFloat(gets());
  const quantDias = calculoDias(quantComida);
  console.log(quantDias, 'dias');
}