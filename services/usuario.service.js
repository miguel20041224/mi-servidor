const Usuario = require('../models/Usuario');

exports.getAll = async () => {
    return await Usuario.findAll({
        order: [
            ['nombres', 'ASC']
        ]
    });
};

exports.getById = async (id) => {
    return await Usuario.findByPk(id);
};

exports.create = async (usuario) => {
    return await Usuario.create({
        tipoDocumento: usuario.tipoDocumento,
        numeroDocumento: usuario.numeroDocumento,
        nombres: usuario.nombres,
        apellidos: usuario.apellidos,
        direccion: usuario.direccion,
        ciudad: usuario.ciudad,
        fechaNacimiento: usuario.fechaNacimiento,
        correo: usuario.correo
    });
};

exports.update = async (id, datos) => {
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
        return null;
    }

    usuario.tipoDocumento = datos.tipoDocumento;
    usuario.numeroDocumento = datos.numeroDocumento;
    usuario.nombres = datos.nombres;
    usuario.apellidos = datos.apellidos;
    usuario.direccion = datos.direccion;
    usuario.ciudad = datos.ciudad;
    usuario.fechaNacimiento = datos.fechaNacimiento;
    usuario.correo = datos.correo;

    await usuario.save();

    return usuario;
};

exports.delete = async (id) => {
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
        return null;
    }

    await usuario.destroy();

    return true;
};
