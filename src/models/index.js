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

module.exports = {
  Users,
  Asegurado,
  Cotizacion,
  Tomador,
  Cita,
  CitaCoti,
  Contacto
};
