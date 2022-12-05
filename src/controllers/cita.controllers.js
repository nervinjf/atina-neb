const { CitaServices } = require('../services');

const getAllCita = async (req, res, next) => {
    try {
        const result = await CitaServices.getAll();
        res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Algo salio mal"
        })
    }
}

const registerCita = async (req, res, next) => {
    try {
        const newCita = req.body;
        const result = await CitaServices.register(newCita);
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
    getAllCita,
    registerCita,

}