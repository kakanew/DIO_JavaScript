//Rest Operator
//Utilizado para parâmetros de função
//modo tradicional
//passagens de parâmetros limitados, usando a palavra reservada arguments, 
//cujo prototype é objeto
function sum(a, b) {
    var value =  0;
    for(var i = 0; i < arguments.length; i++) {
      value += arguments[i];
    }
  
    return value;
  }
  console.log(sum(5, 5, 5, 5))
  
  
  //passagens de parâmetros ilimitados
  //rest operator: ...
  //cujo prototype é array
  //Quando o rest operator é utilizado nos argumentos de uma função, 
  //além da lista de argumentos, ele também traz os métodos e 
  //propriedades de array por ser uma instância de um array
  function sum2(...args) {
    //soma utilizando os métodos de operação de array
    return args.reduce((acum, value) => acum + value, 0)
  }
  console.log(sum2(5, 5, 5, 5))
  
  
  //arrow function com rest operator
  const sum3 = (...args) => {
    return args.reduce((acum, value) => acum + value, 0);
  };
  
  console.log(sum3(5, 5, 5, 5))
  
  
  //primeiros parâmetros separados e demais como argumentos rest operator
  const sum4 = (a, b, ...args) => {
    return a + b + args.reduce((acum, value) => acum + value, 0);
  };
  
  console.log(sum4(5, 5, 5, 5))

  //Spread Operator
//Utilizado basicamente para quebrar os itens e passar para outro lugar
//pode-se utilizar em string, arrays, literal objects e objects iteraveis
//somente para criar novos objetos

//string
//quebra a string em caracteres
const str = 'Digital Innovation One';
function logArgs(...args) {
  console.log(args)
}
logArgs(...str)


//arrays
//quebra um array em itens
const arr = [1, 2, 3, 4]
function logArr(...args) {
  console.log(args)
}
logArr(...arr)

//construção de arrays
//modo tradicional
const arr2 = arr.concat([5, 6, 7]);
console.log(arr2)

//com spread operator
const arr3 = [...arr, 5, 6, 7];
console.log(arr3)

//clone de array
const arr4 = [...arr];
console.log(arr4)


//objects
const obj = {
  test: 123
}

const obj2 = {
  teste: 456
}

//merge de objetos
const obj3 = {
  ...obj,
  ...obj2
}
console.log(obj3)

//clone de objeto raso
const obj4 = {
  ...obj
}

console.log(obj4)

//cuidados na clonagem dessa maneira, pois os sub-objetos mantem 
//a referência do objeto original, sendo assim se alterar na 
//cópia o original também é alterado.
const obj5 = {
  test: 123,
  subObj: {
    teste: 123
  }
}

const obj6 = { ...obj5 };
obj6.subObj.teste = 456;
console.log(obj5)

//uma alternativa é gerar um sub-objeto com o spread operator
const obj7 = { ...obj5, subObj: { ...obj5.subObj} };
obj7.subObj.teste = 456;
console.log(obj5)