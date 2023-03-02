const { EmpresaServices } = require('../services');

const getAllempresas = async (req, res, next) => {
    try {
        const result = await EmpresaServices.getAll();
        res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            massage: "algo salio mal"
        })
    }
}

const getEmpresaId = async (req, res, next) => {
    try {
        const {id} = req.params
        const result = await EmpresaServices.getById(id);
        res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Algo salio mal"
        })
    }
}

const registerEmpresa = async (req, res, next) => {
    try {
        const data = req.body;
        const result = await EmpresaServices.register(data);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            massage: "Faltan datos"
        })
    }
}

const UpdateEmpresa = async (req, res, next) =>{
    try {
        const {id} = req.params;
        const data = req.body;
        const result = await EmpresaServices.update(id, data);
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
    getAllempresas,
    registerEmpresa,
    UpdateEmpresa,
    getEmpresaId
}