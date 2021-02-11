//objeto literal normal
var prop = 'Value 1';
var prop2 = 'Value 2';

function method2() {
  console.log('call method2');
}

//podemos omitir o valor de uma propriedade ou método ao definir um objeto literal quando o valor vier de uma variável com o mesmo nome da propriedade ou método
var obj = {
  prop: prop, //objeto literal normal
  prop2, //es6, podemos omitir o valor de uma propriedade ou método
  method2,
  method3: function () {
    console.log('call method3');
  },
  method4() {
    console.log('call method4');
  }
};

console.log(obj)
obj.method2()
obj.method3()
obj.method4()


//Nome das propriedades
//modo tradicional
var propName1 = 'propName1';
var obj2 = {}
obj2[propName1] = 'Cássia Maciel'

console.log(obj2);


//es6
var propName2 = 'propName2: ';
var obj3 = {
  [propName2 + ' Cássia ']: 'Watakabe'
}

console.log(obj3);