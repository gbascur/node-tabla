
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear();


crearArchivo( argv.n, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch( err => console.log( err ));
 











