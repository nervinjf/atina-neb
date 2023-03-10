const { CitaEmpresaServices } = require('../services');
const transporter = require("../utils/mailer");


const getAllCitaEmpresa = async (req, res, next) => {
    try {
        const result = await CitaEmpresaServices.getAll();
        res.json(result)
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            Message: 'Algo salio mal. Su busqueda no se completo'
        })
    }
}

const registerCitaEmpresa = async (req, res, next) => {
    try {
        const data = req.body;
        const result = await CitaEmpresaServices.register(data);
        res.status(201).json(result);

        const fecha = new Date(result.fecha).toLocaleString('es-VE', { timeZone: 'UTC' });

        transporter.sendMail({
            from: "<noreply@neb.com.ve>",
            to: "vsolano@neb.com.ve",
            subject: `Registro Cotización Empresa ${result.razonSocial} ${result.rif}`,
            text: `Buenas tardes equipo, nueva solicitud de cita de empresa. 

            A continuación los datos del prospecto:
            
            Nombre:${result.razonSocial}
            C.I.: ${result.rif},,
            Telf: ${result.phone} / ${result.phone2},
            
            Fecha y hora de Cita: ${fecha},
            Póliza: ${result.primaAnual}.
            Cobertura: ${result.plan},`,
            // html: welcomeTemplate(),
        });

    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Faltan datos o datos incorrectos, validar'
        })
    }
}

const updateCitaEmpresa = async (req, res, next) => {
    try {
        const { id } = req.params;
        const  data  = req.body;
        const result = await CitaEmpresaServices.updateCiE(id, data);
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
    getAllCitaEmpresa,
    registerCitaEmpresa,
    updateCitaEmpresa,
}