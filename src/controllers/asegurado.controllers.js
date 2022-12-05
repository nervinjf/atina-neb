const { AseguradoServices } = require('../services');

const getAllAsegurado = async (req, res, next) => {
    try {
        const result = await AseguradoServices.getAll();
        res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Algo salio mal"
        })
    }
}

const registerAsegurado = async (req, res, next) => {
    try {
        const newAsegurado = req.body;
        const result = await AseguradoServices.register(newAsegurado);
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Algo salio mal",
        })
    }
}

module.exports = {
    getAllAsegurado,
    registerAsegurado,
}