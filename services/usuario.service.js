const Usuario = require('../models/usuario.model');

exports.getAll = (cb) => {
    Usuario.findAll()
        .then((usuarios) => cb(null, usuarios))
        .catch((err) => cb(err));
};

exports.getById = (id, cb) => {
    Usuario.findByPk(id)
        .then((usuario) => cb(null, [usuario]))
        .catch((err) => cb(err));
};

exports.create = (usuario, cb) => {
    Usuario.create(usuario)
        .then((nuevo) => cb(null, { insertId: nuevo.id }))
        .catch((err) => cb(err));
};

exports.update = (id, usuario, cb) => {
    Usuario.update(usuario, { where: { id } })
        .then((result) => cb(null, result))
        .catch((err) => cb(err));
};

exports.delete = (id, cb) => {
    Usuario.destroy({ where: { id } })
        .then((result) => cb(null, result))
        .catch((err) => cb(err));
};
