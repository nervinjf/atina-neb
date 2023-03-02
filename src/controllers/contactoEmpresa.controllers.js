const { ContactoEmpresaServices } = require('../services');

const getAllContactoEmpresa = async (req, res, next) => {
    try {
        const result = await ContactoEmpresaServices.getAll();
        res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            massage: "Algo salio mal"
        })
    }
}

const registerContactoEmpresa = async (req, res, next) => {
    try {
        const data = req.body;
        const result = await ContactoEmpresaServices.register(data);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            massage: "Faltan Datos"
        })
    }

}

module.exports = {
    getAllContactoEmpresa,
    registerContactoEmpresa
}