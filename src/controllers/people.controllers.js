const { PeopleServices } = require('../services');

const getAllPeople = async (req, res, next) => {
    try {
        const result = await PeopleServices.getAll();
        res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Algo salio mal"
        })
    }
}

const registerPeople = async (req, res, next) => {
    try {
        const newAsegurado = req.body;
        const result = await PeopleServices.register(newAsegurado);
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
    getAllPeople,
    registerPeople,
}