const { userRegister, getAllUsers } = require("./users.controllers");
const { getAllTomador, tomadorRegister, getAlltomadorAndAsegurados, getAlltomadorAndCita, 
    getAlltomadorAndCotizacion, getTomadorId } = require("./tomador.controllers");
const { getAllAsegurado, registerAsegurado } = require('./asegurado.controllers')
const { getAllCita, registerCita, updateCita } = require('./cita.controllers');
const { getAllContacto, registerContacto } = require('./contacto.controllers');


module.exports = {
    userRegister,
    getAllUsers,
    getAllTomador,
    tomadorRegister,
    getAllAsegurado,
    registerAsegurado,
    getAlltomadorAndAsegurados,
    getAllCita,
    registerCita,
    getAlltomadorAndCita,
    getAlltomadorAndCotizacion,
    getAllContacto,
    registerContacto,
    getTomadorId,
    updateCita
};