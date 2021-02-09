// Symbols são maneiras de gerar identificadores únicos
// Symbols são invocados como se chama uma função
// Propriedades de objetos criadas usando identificadores únicos 
// podem ser descobertas usando o symbol utilizado como 
// identificador ou o método Object.getOwnPropertySymbols.
// Symbol
const uniqueHello1 = Symbol('Hello');
const uniqueHello2 = Symbol('Hello');

// false, Symbol são sempre diferentes uns dos outros
console.log(uniqueHello1 === uniqueHello2);
console.log(uniqueHello1);
// Well known Symbols
// Com esse tipos podemos usar para adicionar propriedades ao objeto
// Symbol.iterator
// Symbol.split
// Symbol.toStringTag

// Alguns elementos já possuem a propriedade Symbol.iterator que permite realizar iterações, como os arrays
// "for of" é utilizado para obter os valores gerados através do iterador em um objeto ou tipo iterável.
// Ao consumir um iterador, sabemos se a iteração finalizou através da propriedade done no objeto retornado na iteração.
// Ao invocar o método next de um iterador, o seu retorno é um objeto contendo um método next e uma propriedade done.
// Iterators
const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator]();

// exemplo de iterador, modo tradicional
while (true) {
  let { value, done } = it.next();

  if (done) {
    break;
  }
  console.log(value);
}

// exemplo de iterador, modo ES6
for (let value of arr) {
  console.log(value)
}

// exemplo de iterador, modo ES6
const str = 'Cássia Maciel Watakabe';
for (let value of str) {
  console.log(value);
}

// Iterators e Objetos
// adicionando propriedade (Symbol.iterator, Well known Symbols) ao objeto para torná-lo iterável
const obj = {
  values: [1, 2, 3, 4],
  [Symbol.iterator]() {
    let i = 0;

    return {
      next: () => {
        i++;

        return {
          value: this.values[i - 1],
          done: i > this.values.length
        };
      }
    };
  }
};

// iteração em objetos
// const it = obj[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// iteração em objetos
for (let value of obj) {
  console.log(value)
}

// spread com objeto
const arr2 = [...obj];
console.log(arr2);