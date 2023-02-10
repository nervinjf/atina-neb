const { Tomador, Contacto } = require('../models');

class ContactoServices{
    static async getAll(){
        try {
            const result = await Contacto.findAll({
                attributes: ["origen", "fuente", "proposito", "estatus", "motivo1",
                "motivo2", "motivo3", "observacion", "createdAt", "updatedAt"],
                include:{
                    model: Tomador,
                    as: "tomador",
                    attributes: [
                        "firstname",
                        "lastname",
                        "ci",
                        "email",
                        "phone1"
                    ],
                }
        });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async register(newCo){
        try {
            const result = await Contacto.create(newCo);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ContactoServices;