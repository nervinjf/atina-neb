// importar los modelos
// exportarlos

// Agrupar todos los modelos para encontrarlos en una
// sola direccion
const Users = require("./users.models");
const Asegurado = require("./asegurado.models");
const Cotizacion = require("./cotizacion.models");
const Tomador = require("./tomador.models");
const Cita = require("./cita.models");
const CitaCoti = require("./citaCoti.models");
const Contacto = require("./contacto.models");
const Empresas = require('./empresas.models');
const Cargo = require('./cargo.models');
const Empleado = require('./empleado.models');
const CitaEmpresa = require('./citaEmpresa.models');
const ContactoEmpresa = require('./contactoEmpresa.models');
const SCotizacion = require('./Seguimiento/SCotizacion.models')
const SPersonas = require('./Seguimiento/SPersonas.models')
const SContacto = require('./Seguimiento/SContacto.models')

module.exports = {
  Users,
  Asegurado,
  Cotizacion,
  Tomador,
  Cita,
  CitaCoti,
  Contacto,
  Empleado,
  Cargo,
  Empresas,
  CitaEmpresa,
  ContactoEmpresa,
  SCotizacion,
  SPersonas,
  SContacto
};
