const {SCotizacionServices} = require('../../services');

const getCotizacionSeguimiento = async (res, req, next) =>{
    try {
        const result = await SCotizacionServices.getAll();
        return res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Error en la petición'
        })
    }
}

const postCotizacionSeguimiento = async (res, req, next) =>{
    try {
        const data = req.body;
        const result = await SCotizacionServices.newRegister(data);
        return res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Error en la petición'
        })
    }
}

const PutCotizacionSeguimiento = async (res, req, next) =>{
    try {
        const {id} = req.params;
        const data = req.body;
        const result = await SCotizacionServices.updateRegister(id, data);
        return res.status(201).json(result)
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