const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define(
    'Usuario',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipoDocumento: {
            type: DataTypes.STRING(5),
            allowNull: false
        },
        numeroDocumento: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        nombres: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        apellidos: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        direccion: {
            type: DataTypes.STRING(150)
        },
        ciudad: {
            type: DataTypes.STRING(50)
        },
        fechaNacimiento: {
            type: DataTypes.DATEONLY
        },
        correo: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    },
    {
        tableName: 'usuarios',
        timestamps: false
    }
);

module.exports = Usuario;
