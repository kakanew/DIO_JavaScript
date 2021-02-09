//Destructuring com arrays
//modo tradicional
var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];
var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

//Destructuring
var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];
console.log(apple, apple2)

console.log(tomato, tomato2)


//Destructuring com objects
var obj = {
  name: 'Cássia'
}
var name2 = obj.name;

//mesmo nome de variável
var { name } = obj;

console.log(name2, name)

//define nova variável
var { name: name3 } = obj;
console.log(name3)


//Destructuring com objects dentro de objetos
var obj2 = {
  name: 'Cássia',
  props: {
    age: 42,
    favoriteColors: ['green', 'red']
  }
}

//modo tradicional
var age = obj2.props.age;
console.log(age)

//Destructuring
var { props: { age: age2, favoriteColors: [color1, color2] } } = obj2;
console.log(age2)
console.log(color1)
console.log(color2)


//Destructuring com arrays
var arr = [{ name: 'Apple', type: 'fruit' }];
var [{ name: fruitName }] = arr
console.log(fruitName)


//Destructuring com functions, passando array como parâmetro + Default Values
function sum([a, b] = [0, 0]) {
  return a + b;
}
console.log(sum([5, 5]));


//Destructuring com functions, passando objeto como parâmetro
function sum({a, b}) {
  return a + b;
}
console.log(sum({a: 5, b: 5}));