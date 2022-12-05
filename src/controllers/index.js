const { userRegister, getAllUsers } = require("./users.controllers");
const { getAllTomador, tomadorRegister, getAlltomadorAndAsegurados, getAlltomadorAndCita, 
    getAlltomadorAndCotizacion } = require("./tomador.controllers");
const { getAllAsegurado, registerAsegurado } = require('./asegurado.controllers')
const { getAllCita, registerCita } = require('./cita.controllers');
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
};