function saludar(){
    return 'HOLA DESDE LA FUNCION SALUDAR';
}

function HolaMundo(){
    return 'SALUDOS DESDE LA FUNCION HOLAMUNDO';
}
//aqui tengo dos formas de importar los modulos
/*
module.exports.saludar = saludar;
module.exports.HolaMundo = HolaMundo;
*/
module.exports = {
    saludar: saludar,
    HolaMundo: HolaMundo
};