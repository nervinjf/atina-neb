const { NotBeforeError } = require('jsonwebtoken');
const { CitaServices } = require('../services');
const welcomeTemplate = require('../templates/test');
const transporter = require("../utils/mailer");

const getAllCita = async (req, res, next) => {
    try {
        const result = await CitaServices.getAll();
        res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Algo salio mal"
        })
    }
}

const registerCita = async (req, res, next) => {
    try {
        const newCita = req.body;
        const result = await CitaServices.register(newCita);
        res.status(201).json(result);

        // const resultTomador = result.tomadorId;
        // console.log(resultTomador);

        // const result2 = await CitaServices.findOne(resultTomador)

        const fecha = new Date(result.fecha).toLocaleString('es-VE', { timeZone: 'UTC' });

        transporter.sendMail({
            from: "<noreply@neb.com.ve>",
            to: "vsolano@neb.com.ve",
            subject: `Registro Cotización ${result.firstname} ${result.lastname}`,
            text: `Buenas tardes equipo, nueva solicitud de cita. 

            A continuación los datos del prospecto:
            
            Nombre: ${result.firstname} ${result.lastname},
            Telf: ${result.phone1} / ${result.phone2} / ${result.phone3},
            Email: ${result.email},
            Campaña: ${result.campana}
            
            Fecha y hora de Cita: ${fecha},
            Idoma: ${result.idioma}.
            Direccion: ${result.direccion},`,
            // html: welcomeTemplate(),
        });
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Faltan datos"
        })
    }
}

const updateCita = async (req, res, next) => {
    try {
        const { id } = req.params;
        const  data  = req.body;

        const result = await CitaServices.updateCi(id, data);
        res.status(201).json(result);

    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Faltan datos"
        })
    }
}


module.exports = {
    getAllCita,
    registerCita,
    updateCita
}