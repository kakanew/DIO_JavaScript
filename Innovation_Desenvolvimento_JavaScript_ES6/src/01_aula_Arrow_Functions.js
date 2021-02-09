// Caso a função seja apenas uma expressão é possível omitir o return
// Ao definir statements é necessário usar { }
// Caso tenha apenas um argumento é possível omitir os parenteses
// Função construtora não poder usar Arrow Functions
// Hoisting não funciona com Arrow Functions
// Arrow Function tem a propriedade de ter o mesmo contexto no qual ela está.

//arrow function
var sum = (a, b) => a + b;

var sum2 = (a, b) => {
  var x = 10;
  if (a > b) {
    return 10;
  }

  return a + b;
}

console.log(sum)
console.log(sum2)


//retorno implicito de objeto
var createObj = () => ({ name: 'Daniel' });
console.log(createObj());


 //Arrow Function tem a propriedade de ter o mesmo contexto no qual ela está.
var obj = {
  showContext: function showContext() {
    /*
    //erro
    setTimeout(function() => {
      this.log('after 1000ms');
    }, 1000);
    */

    //Arrow Function
    setTimeout(() => {
      this.log('after 1000ms');
    }, 1000);
  },
  log: function log(value) {
    console.log(value);
  }
};

obj.showContext();