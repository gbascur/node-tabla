const { describe } = require('yargs');

const argv = require( 'yargs')
                .option('n', {
                    alias: 'num',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false,
                    describe: 'muestra la tabla en consola'

                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'numero hasta el cual se multiplicara'

                })
                .check((argv) =>{
                    if ( isNaN(argv.n)){
                        throw ' la base tiene que ser un numero'
                    }
                    return true;
                })
                .argv


module.exports = argv;