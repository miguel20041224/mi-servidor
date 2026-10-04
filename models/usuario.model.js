const db = require('../config/db');

exports.getAll = (callback) => {
    db.query('SELECT * FROM usuarios', callback);
};

exports.getById = (id, callback) => {
    db.query('SELECT * FROM usuarios WHERE id = ?', [id], callback);
};

exports.create = (usuario, callback) => {
    db.query(
        `INSERT INTO usuarios
            (tipoDocumento, numeroDocumento, nombres, apellidos, direccion, ciudad, fechaNacimiento, correo)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            usuario.tipoDocumento,
            usuario.numeroDocumento,
            usuario.nombres,
            usuario.apellidos,
            usuario.direccion,
            usuario.ciudad,
            usuario.fechaNacimiento,
            usuario.correo
        ],
        callback
    );
};

exports.update = (id, usuario, callback) => {
    db.query(
        `UPDATE usuarios SET
            tipoDocumento=?, numeroDocumento=?, nombres=?, apellidos=?,
            direccion=?, ciudad=?, fechaNacimiento=?, correo=?
         WHERE id=?`,
        [
            usuario.tipoDocumento,
            usuario.numeroDocumento,
            usuario.nombres,
            usuario.apellidos,
            usuario.direccion,
            usuario.ciudad,
            usuario.fechaNacimiento,
            usuario.correo,
            id
        ],
        callback
    );
};

exports.delete = (id, callback) => {
    db.query('DELETE FROM usuarios WHERE id=?', [id], callback);
};
