const { SContacto, SPersonas, Users } = require("../../models");

class SContactoServices {
    static async getAll() {
        try {
            const result = await SContacto.findAll({
                attributes: ["origen", "fuente", "proposito", "estatus", "motivo1", "motivo2", "motivo3", "observacion", "createdAt", "updatedAt"],
                include: [{
                    model: SPersonas,
                    as: "spersonacta",
                    attributes: ["firstname", "lastname", "ci", "email", "telefono"]
                }, {
                    model: Users,
                    as: "userctos",
                    attributes: ["firstname", "lastname"],
                }],
            })

            return result
        } catch (error) {
            throw error
        }
    }

    static async newRegister(data) {
        try {
            const result = await SContacto.create(data);
            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = SContactoServices;