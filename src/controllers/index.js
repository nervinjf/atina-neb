const { userRegister, getAllUsers } = require("./users.controllers");
const { getAllTomador, tomadorRegister, getAlltomadorAndAsegurados, getAlltomadorAndCita, 
    getAlltomadorAndCotizacion, getTomadorId, updateTomador } = require("./tomador.controllers");
const { getAllAsegurado, registerAsegurado } = require('./asegurado.controllers')
const { getAllCita, registerCita, updateCita } = require('./cita.controllers');
const { getAllContacto, registerContacto } = require('./contacto.controllers');
const { userLogin } = require("./auth.controllers");
// --------------------------Empresas-----------------------------------
const { getAllCitaEmpresa, registerCitaEmpresa, updateCitaEmpresa } = require('./citaEmpresa.controllers');
const { getAllContactoEmpresa, registerContactoEmpresa } = require('./contactoEmpresa.controllers');
const { getAllCargo, registerCargo } = require('./cargo.controllers');
const { getAllempresas, registerEmpresa, UpdateEmpresa, getEmpresaId } = require('./empresa.controllers')
const { getAllEmpleado, registerEmpleado, updateEmpleado } = require('./empleado.controllers')

// --------------------------Seguimiento --------------------------------------------

const {getContactoSeguimiento, postContactoSeguimiento} = require('./Seguimiento/scontacto.controllers');
const {PutCotizacionSeguimiento, getCotizacionSeguimiento, postCotizacionSeguimiento} = require('./Seguimiento/scotizacion.controllers');
const {PutPersonaSeguimiento, getPersonaSeguimiento, postPersonaSeguimiento, getByIdPersonaSeguimiento} = require('./Seguimiento/spersona.controllers');

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
    updateCita,
    updateTomador,
    userLogin,
    getAllCitaEmpresa,
    registerCitaEmpresa,
    updateCitaEmpresa,
    getAllContactoEmpresa,
    registerContactoEmpresa,
    getAllCargo,
    registerCargo,
    getAllempresas,
    registerEmpresa,
    UpdateEmpresa,
    getAllEmpleado,
    registerEmpleado,
    updateEmpleado,
    getEmpresaId,
    getContactoSeguimiento,
    postContactoSeguimiento,
    PutCotizacionSeguimiento,
    getCotizacionSeguimiento,
    postCotizacionSeguimiento,
    PutPersonaSeguimiento,
    getPersonaSeguimiento,
    postPersonaSeguimiento,
    getByIdPersonaSeguimiento
};