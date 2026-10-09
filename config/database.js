const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'demo',         // Base de datos
    'root',         // Usuario
    '123456',       // Contraseña
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    }
);

module.exports = sequelize;
