const { userRegister, getAllUsers } = require("./users.controllers");
const { getAllPeople, registerPeople } = require('./people.controllers')
const { getAllCita, registerCita, updateCita } = require('./cita.controllers');
const { getAllContacto, registerContacto } = require('./contacto.controllers');
const { userLogin } = require("./auth.controllers");


module.exports = {
    userRegister,
    getAllUsers,
    getAllPeople,
    registerPeople,
    getAllCita,
    registerCita,
    getAllContacto,
    registerContacto,
    updateCita,
    userLogin,
};