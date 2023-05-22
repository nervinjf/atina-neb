const UserServices = require('./users.services');
const TomadorServices = require('./tomador.services');
const AseguradoServices = require('./asegurado.services');
const CitaServices = require('./cita.services');
const AuthServices = require("./auth.services");
const ContactoServices = require('./contacto.services');
const CargoServices = require ('./cargo.services');
const CitaEmpresaServices = require('./citaEmpresa.services');
const EmpleadoServices = require('./empleado.services');
const EmpresaServices = require('./empresa.services');
const ContactoEmpresaServices = require('./contactoEmpresas.services')
// Seguimiento
const SContactoServices = require('./Seguimiento/SContacto.services');
const SCotizacionServices = require('./Seguimiento/SCotizacion.services');
const SPersonaServices = require('./Seguimiento/SPersona.services');

module.exports = {
    UserServices,
    TomadorServices,
    AseguradoServices,
    CitaServices,
    ContactoServices,
    AuthServices,
    CargoServices,
    CitaEmpresaServices,
    EmpleadoServices,
    EmpresaServices,
    ContactoEmpresaServices,
    SContactoServices,
    SCotizacionServices,
    SPersonaServices
};