const { SPersonas, SContacto, SCotizacion, Users } = require('../../models');

class SPersonaServices {
    static async getAll() {
        try {
            const result = await SPersonas.findAll({
                attributes: ["firstname", "lastname", "ci", "birthdate", "edad", "sexo", "email",
                             "telefono", "producto", "compania", "dateCotizacion", "tipo", "captacion", "agente", "createdAt", "updatedAt"],
                include: [{
                    model: SContacto,
                    as: "scontactop",
                    attributes:["origen", "fuente", "proposito", "estatus", "motivo1", "motivo2", "motivo3", "observacion", "createdAt", "updatedAt"],
                },{
                    model: SCotizacion,
                    as: "scotizacionp",
                    attributes:["codigo", "producto", "plan", "asegurados", "poliza", "statusSuscripcion", "enviaCotiza", "primaAnual", "createdAt", "updatedAt"],
                },{
                    model: Users,
                    as: "userss",
                    attributes:["firstname", "lastname"],
                }]

            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async getById(id) {
        try {
            const result = await SPersonas.findByPk(id, {
                attributes: ["firstname", "lastname", "ci", "birthdate", "edad", "sexo", "email",
                             "telefono", "producto", "compania", "dateCotizacion", "tipo", "captacion", "agente", "createdAt", "updatedAt"],
                include: [{
                    model: SContacto,
                    as: "scontactop",
                    attributes:["origen", "fuente", "proposito", "estatus", "motivo1", "motivo2", "motivo3", "observacion", "createdAt", "updatedAt"],
                },{
                    model: SCotizacion,
                    as: "scotizacionp",
                    attributes:["codigo", "producto", "plan", "asegurados", "poliza", "statusSuscripcion", "enviaCotiza", "primaAnual", "createdAt", "updatedAt"],
                }]

            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async newRegister(data) {
        try {
            const result = await SPersonas.create(data)
            return result
        } catch (error) {
            throw error
        }
    }

    static async updateRegister(id, data) {
        try {
            const result = await SPersonas.update(data,{
                where: {id},
            })
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = SPersonaServices;