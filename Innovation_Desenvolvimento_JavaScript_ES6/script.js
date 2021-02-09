class CustomError extends Error {
    constructor({ message, data }) {
        super(message);
        this.data = data;
    }
}

try {
    const name = 'Cássia Maciel';

    const myError = new CustomError({
        message: 'Custom message on custom error',
        data: {
            type: 'Server error'
        }
    });

    throw myError;
}   catch (err) {
    console.log(err);
   if (err.type === 'Server error') {
    } else {
    }
}   finally {
console.log('keep going...');
}


// try {
//     const name = 'Cássia Maciel';

//     const myError = new Error('Custom message');

//     throw myError;
// }   catch (err) {
//     console.log('Err: ', err);
// }   finally {
// console.log('keep going...');
// }

// try {
//     console.log(name);
//     const name = 'Cássia Maciel';
// }   catch (err) {
//     console.log('Err: ', err);
// }   finally {
// console.log('keep going...');
// }

// try {
//     console.log(name);
//     const name = 'Cássia Maciel';
// }   catch (err) {
//     console.log('Err: ', err);
// }
// console.log('keep going...');


// console.log(name);
// const name = 'Cássia Maciel';

// console.log('keep going...');