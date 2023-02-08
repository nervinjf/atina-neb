// importar los modelos
// exportarlos

// Agrupar todos los modelos para encontrarlos en una
// sola direccion
const Users = require("./users.models");
const People = require("./people.models");
const Cita = require("./cita.models");
const Contacto = require("./contacto.models");

module.exports = {
  Users,
  People,
  Cita,
  Contacto
};
