const {SContactoServices} = require('../../services');

const getContactoSeguimiento = async (req, res, next) =>{
    try {
        
        const result = await SContactoServices.getAll();
         res.json(result);

    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Error en la petición'
        })
    }
}

const postContactoSeguimiento = async (req, res, next) =>{
    try {

        const data = req.body
        const result = await SContactoServices.newRegister(data);
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
    getContactoSeguimiento,
    postContactoSeguimiento
};