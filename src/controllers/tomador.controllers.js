const { TomadorServices } = require('../services');

const getAllTomador = async (req, res, next) => {
    try {
        const result = await TomadorServices.getAll();
        res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Algo salio mal"
        })
    }
}

const getTomadorId = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await TomadorServices.getById(id);
        res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Algo salio mal"
        })
    }
}

const tomadorRegister = async (req, res, next) => {
    try {
        const newtomador = req.body;
        const result = await TomadorServices.register(newtomador);
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Algo salio mal",
        })
    }
}

const getAlltomadorAndAsegurados = async (req, res, next) => {
    try {
        const result = await TomadorServices.getAllAsegurado();
        res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Algo salio mal"
        })
    }
}

const getAlltomadorAndCita = async (req, res, next) => {
    try {
        const result = await TomadorServices.getAllCita();
        res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Algo salio mal"
        })
    }
}

const getAlltomadorAndCotizacion = async (req, res, next) => {
    try {
        const result = await TomadorServices.getAllCoti();
        res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Algo salio mal"
        })
    }
}

const updateTomador = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const result = await TomadorServices.update(id, data);
        res.status(201).json(result)

    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "algo salio mal"
        })
    }
}
module.exports = {
    getAllTomador,
    tomadorRegister,
    getAlltomadorAndAsegurados,
    getAlltomadorAndCita,
    getAlltomadorAndCotizacion,
    getTomadorId,
    updateTomador,
}