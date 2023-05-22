const {SPersonaServices} = require('../../services');

const getPersonaSeguimiento = async (res, req, next) =>{
    try {
        const result = await SPersonaServices.getAll();
        return res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Error en la petición'
        })
    }
}

const getByIdPersonaSeguimiento = async (res, req, next) =>{
    try {
        const {id} = req.params;
        const result = SPersonaServices.getById(id);
        return res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Error en la petición'
        })
    }
}

const postPersonaSeguimiento = async (res, req, next) =>{
    try {
        const data = req.body;
        const result = await SPersonaServices.newRegister(data);
        return res.status(201).json(result); 

    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Error en la petición'
        })
    }
}

const PutPersonaSeguimiento = async (res, req, next) =>{
    try {
        const {id} = req.params;
        const data = req.body;
        const result = await SPersonaServices.updateRegister(id, data);
        return res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Error en la petición'
        })
    }
}



module.exports = {
    getPersonaSeguimiento,
    getByIdPersonaSeguimiento,
    postPersonaSeguimiento,
    PutPersonaSeguimiento,
};