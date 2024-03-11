const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// para localhost
app.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}))

// Conexión a la base de datos MYSQL
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'formulario-inscripcion'
});

db.getConnection((err, connection) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos MySQL establecida');
    connection.release();
});

module.exports = db;

// Importar las rutas de nuestro servidor backend
const Routes = require('./routes/routes.formulario');
Routes(app); 

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor corriendo en el puerto http://0.0.0.0:${PORT}`);
});
