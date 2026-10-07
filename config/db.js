const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('demo', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

sequelize.authenticate()
    .then(() => {
        console.log('Conectado a MySQL');
    })
    .catch((err) => {
        console.error('Error de conexión:', err);
    });

module.exports = sequelize;
