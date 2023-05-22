const { SCotizacion, Users, SPersonas } = require('../../models');

class SCotizacionServices {
    static async getAll(){
        try {
            const result = await SCotizacion.findAll({
                attributes: ["codigo", "productoc", "plan", "asegurados", "poliza", "statusSuscripcion", "enviaCotiza", "primaAnual", "createdAt", "updatedAt"],
                include: [{
                    model: SPersonas,
                    as: "spersonacti",
                    attributes: ["firstname", "lastname", "ci", "email", "telefono"],
                },{
                    model: Users,
                    as: "usersctis",
                    attributes: ["firstname", "lastname"],
                }]
            });
            return result;  
        } catch (error) {
            throw error
        }
    }

    static async newRegister(data){
        try {
            const result = await SCotizacion.create(data);
            return result;
        } catch (error) {
            throw error
        }
    }

    static async updateRegister(id, data){
        try {
            const result = await SCotizacion.update(data, {
                where: {id},
            })
            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = SCotizacionServices;