// EventEmitter
// Programação assíncrona com o node
// A diferença entre o método on e once de uma instância EventEmitter 
// é que um subscreve uma função a todas as ocorrências de um evento, 
// o outro apenas para a primeira ocorrência.

//node-script.js
// Instanciar ou extender o events

// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.on('User logged', data => {
//   console.log(data);
// });

// emitter.emit('User logged', { user: 'Cássia Maciel' });

// execute
// server node node-script.js

//node-script.js
const EventEmitter = require('events');

// class, extendendo e simplificando
class Users extends EventEmitter {
  userLogged(data) {
    setTimeout(() => {
        this.emit('User logged', data);
    }, 2000);
  }
}

const users = new Users();

users.on('User logged', data => {
  console.log(data);
});

users.userLogged({ user: 'Cássia Maciel' });
users.userLogged({ user: 'Cássia Watakabe' });

// execute
// server node node-script.js

