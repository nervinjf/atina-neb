const { ContactoServices } = require('../services');

const getAllContacto = async (req, res, next) => {
    try {
        const result = await ContactoServices.getAll();
        res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Algo salio mal"
        })
    }
}

const registerContacto = async (req, res, next) => {
    try {
        const newContacto = req.body;
        const result = await ContactoServices.register(newContacto);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Faltan datos"
        })
    }
}

module.exports = {
    getAllContacto,
    registerContacto,
}