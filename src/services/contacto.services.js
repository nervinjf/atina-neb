const { Tomador, Contacto, People } = require('../models');

class ContactoServices{
    static async getAll(){
        try {
            const result = await Contacto.findAll({
                attributes: ["id", "origen", "fuente", "estatus", "resultado",
                "observacion"],
                include:{
                    model: People,
                    as: "people",
                    attributes: [
                        "firstname",
                        "lastname",
                        "email",
                        "campana"
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