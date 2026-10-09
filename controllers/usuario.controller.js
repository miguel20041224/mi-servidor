const usuarioService = require('../services/usuario.service');

exports.getAll = async (req, res) => {
    try {
        const usuarios = await usuarioService.getAll();
        res.json(usuarios);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getById = async (req, res) => {
    try {
        const usuario = await usuarioService.getById(req.params.id);

        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        res.json(usuario);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.create = async (req, res) => {
    try {
        const usuario = await usuarioService.create(req.body);
        res.json(usuario);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.update = async (req, res) => {
    try {
        const usuario = await usuarioService.update(req.params.id, req.body);

        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        res.json({ mensaje: 'Usuario actualizado' });
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.delete = async (req, res) => {
    try {
        const eliminado = await usuarioService.delete(req.params.id);

        if (!eliminado) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        res.json({ mensaje: 'Usuario eliminado' });
    } catch (err) {
        res.status(500).json(err);
    }
};
