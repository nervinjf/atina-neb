const {SPersonaServices} = require('../../services');

const getPersonaSeguimiento = async (req, res, next) =>{
    try {
        const result = await SPersonaServices.getAll();
        res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Error en la petición '
        })
    }
}

const getByIdPersonaSeguimiento = async (req, res, next) =>{
    try {
        const {id} = req.params;
        const result = SPersonaServices.getById(id);
        res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Error en la petición'
        })
    }
}

const postPersonaSeguimiento = async (req, res, next) =>{
    try {
        const data = req.body;
        const result = await SPersonaServices.newRegister(data);
         res.status(201).json(result); 

    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Error en la petición'
        })
    }
}

const PutPersonaSeguimiento = async (req, res, next) =>{
    try {
        const {id} = req.params;
        const data = req.body;
        const result = await SPersonaServices.updateRegister(id, data);
         res.status(201).json(result);
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