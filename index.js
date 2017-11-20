const { send } = require('micro');
const { get, router } = require('microrouter');

// funcion para manejar el endpoint principal
function index (req, res){
    send(res, 200, {message: 'hola FCC'});
}

// funcion de /saludar del microrouter
function saludo (req, res){
    send(res, 200, {message: 'saludar microrouter'});
}


//module.exports = index;

module.exports = router(

    get('/', index),
    get('/saludar', saludo),
);
