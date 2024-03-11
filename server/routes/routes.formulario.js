const Formulario = require('../controllers/formulario.controllers')


module.exports = (app) =>{        
    app.post('/api/formulario', Formulario.createTodo )               
}