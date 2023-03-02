const userRoutes = require("./users.routes");
const tomadorRoutes = require("./tomador.routes");
const aseguradoRoutes = require("./asegurado.routes"); //
const citaRoutes = require("./cita.routes");
const contactoRoutes = require("./contacto.routes");
const authRoutes = require("./auth.routes");
const cargoRoutes = require("./cargo.routes");
const empresasRoutes = require("./empresa.routes");
const empleadosRoutes = require("./empleado.routes");
const citaEmpresasRoutes = require("./citaEmpresa.routes");
const contactoEmpresasRoutes = require("./contactoEmpresa.routes");

module.exports = {
    userRoutes,
    tomadorRoutes,
    aseguradoRoutes,
    citaRoutes,
    contactoRoutes,
    authRoutes,
    cargoRoutes, 
    empresasRoutes, 
    empleadosRoutes, 
    citaEmpresasRoutes, 
    contactoEmpresasRoutes
}