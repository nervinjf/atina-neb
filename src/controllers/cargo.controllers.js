const { CargoServices } = require('../services');

const getAllCargo = async (req, res, next) => {
    try {
        const result = await CargoServices.getAll();
        res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            massage: "Algo salio mal" 
        })
    }
}

const registerCargo = async (req, res, next) => {
    try {
        const data = req.body;

        const result = await CargoServices.register(data);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            massage: "faltan datos"
        })
    }
}

module.exports = {
    getAllCargo,
    registerCargo
};