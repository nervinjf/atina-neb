const { NotBeforeError } = require('jsonwebtoken');
const { CitaServices } = require('../services');
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

        transporter.sendMail({
            from: "<noreply@neb.com.ve>",
            to: "nflores@neb.com.ve",
            subject: `Registro Cotización ${result2.firstname} ${result2.lastname}`,
            text: `Buenas tardes equipo, nueva solicitud de cita. 

            A continuación los datos del prospecto:
            
            Nombre: ${result2.firstname} ${result2.lastname},
            C.I.: ${result2.ci},
            Telf: ${result2.phone1} / ${result2.phone2} / ${result2.phone3},
            
            Fecha y hora de Cita: ${result.fecha},
            Póliza: ${result2.phone1}.
            Cobertura: ${result2.plan},
            `
            // html: welcomeTemplate(result.username),
        });
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

}