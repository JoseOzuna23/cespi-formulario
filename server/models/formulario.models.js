const db = require('../server');

const TodoModel = {
    create: (todo, callback) => {     
      console.log("Contenido del objeto todo:", todo);
        db.query('INSERT INTO formulario SET ?', todo, (error, results, fields) => {
            if (error) {
                callback(error, null);
                return;
            }
            callback(null, results);
        });
    },
};

module.exports = TodoModel;
