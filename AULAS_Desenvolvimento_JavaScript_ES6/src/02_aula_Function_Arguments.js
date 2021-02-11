// Ao trabalhar com funções normais e não passar todos os parâmetros, 
// aquele que faltar será undefined.
// Com o ES6 é possível definir um parâmetro padrão para a função

//parâmetro padrão para a função
function mult(a, b = 1) {
    return a * b;
  }
  console.log(mult(5))
  
  
  //parâmetro padrão como referência a outro parâmetro
  function mult2(a, b = a) {
    return a * b;
  }
  console.log(mult2(5))
  
  
  //parâmetro padrão como função
  //lazy evaluation (A característica que permite podermos utilizar funções para 
  //definir valores de um argumento e a mesma só será invocada quando o argumento for indefinido.)
  function randomNumber() {
    return Math.random() * 10;
  }
  
  function mult3(a, b = randomNumber()) {
    return a * b;
  }
  console.log(mult3(5))