const TodoModel = require('../models/formulario.models');

const TodoController = {  
  createTodo: (req, res) => {
    const todo = req.body;
    TodoModel.create(todo, (err, result) => {
      if (err) {
        console.error('Error al crear formulario:', err);
        res.status(500).json({ error: 'Error al crear formulario' });
        return;
      }
      res.json(result);
    });
  }, 
};

module.exports = TodoController;
