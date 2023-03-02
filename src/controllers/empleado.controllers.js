const { EmpleadoServices } = require('../services');

const getAllEmpleado = async (req, res, next) => {
    try {
        const result = await EmpleadoServices.gettAll();
        res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            massage: "Algo salio mal"
        })
    }
}

const registerEmpleado = async (req, res, next ) => {
    try {
        const data = req.body;
        const result = await EmpleadoServices.register(data);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            massage: "Faltan datos"
        })
    }
}

const updateEmpleado = async (req, res, next) => {
    try {
        const {id} = req.params;
        const data = req.body;
        const result = await EmpleadoServices.update(id, data);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            massage: "Faltan datos"
        })
    }
}

module.exports = {
    getAllEmpleado,
    registerEmpleado,
    updateEmpleado
}