const {SCotizacionServices} = require('../../services');

const getCotizacionSeguimiento = async (req, res, next) =>{
    try {
        const result = await SCotizacionServices.getAll();
         res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Error en la petición'
        })
    }
}

const postCotizacionSeguimiento = async (req, res, next) =>{
    try {
        const data = req.body;
        const result = await SCotizacionServices.newRegister(data);
         res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Error en la petición'
        })
    }
}

const PutCotizacionSeguimiento = async (req, res, next) =>{
    try {
        const {id} = req.params;
        const data = req.body;
        const result = await SCotizacionServices.updateRegister(id, data);
         res.status(201).json(result)
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Error en la petición'
        })
    }
}

module.exports = {
    getCotizacionSeguimiento,
    postCotizacionSeguimiento,
    PutCotizacionSeguimiento
};