const fs = require('fs');
var colors = require('colors')


const crearArchivo = async ( num, listar= false, hasta=10 ) =>{

    try{
        let salida = ''
        let consola = ''

        for (let i=1; i<=hasta;i++){
            salida += `${num} ${'X'.green} ${i} ${'='.green} ${num*i}\n`;
            consola += `${num} ${'X'} ${i} ${'='} ${num*i}\n`;
        
        }
        if ( listar ){
            console.log('======================'.green);
            console.log('    Tabla del: '.green, colors.red(num));
            console.log('======================'.green);
            console.log(salida);
        }else{
            console.log('listar esta en falso madafaca');
        }
        
        fs.writeFileSync( `./salida/tabla-${num}.text`, consola)
        
        return `Tabla-${num}.txt creada`.underline.red;
    

    }catch(error){
        throw error;
    }
    
    
}

module.exports = {

    crearArchivo
}


