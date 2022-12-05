const { Tomador, Users, Asegurado, Cita, Cotizacion } = require('../models');

class TomadorServices {
    static async getAll(){
        try {
            const result = await Tomador.findAll({
                attributes: ["id", "firstname", "lastname", "ci", "email", "phone1", "phone2",
                "phone3", "address1", "address2", "fNacimiento", "patologia", "medicamentos", "createdAt", "updatedAt"
            ],
                include: {
                    model: Users,
                    as: "user",
                    attributes: ["firstname", "lastname"],
                }
        });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async register(tomador){
        try {
            const result = await Tomador.create(tomador);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getAllAsegurado(){
        try {
            const result = await Tomador.findAll({
                attributes: ["firstname", "lastname", "ci", "email", "phone1", "phone2",
                "phone3", "address1", "address2", "fNacimiento", "patologia", "medicamentos", "createdAt", "updatedAt"
            ],
                include: {
                    model: Asegurado,
                    as: "asegurados",
                    attributes: ["firstname", "lastname", "ci", "email", "parentesco", "phone1"]
                }
            });
            return result;
        } catch (error) {
            throw error
        }
    }

    static async getAllCita(){
        try {
            const result = await Tomador.findAll({
                attributes: ["firstname", "lastname", "ci", "email", "phone1", "phone2",
                "phone3", "address1", "address2", "fNacimiento", "patologia", "medicamentos", "createdAt", "updatedAt"
            ],
              include:{
                model: Cita,
                as: "cita",
                attributes: ["codigo", "fecha", "tipo"],
              }
        });
            return result;
        } catch (error) {
            throw error
        }
    }

    static async getAllCoti(){
        try {
            const result = await Tomador.findAll({
                attributes: ["firstname", "lastname", "ci", "email", "phone1", "phone2",
                "phone3", "address1", "address2", "fNacimiento", "patologia", "medicamentos", "createdAt", "updatedAt"
            ],
              include:{
                model: Cotizacion,
                as: "cotizacion",
                attributes: ["plan", "asegurados", "fPago", "efectivo", "tiempo", "createdAt"],
              },
        });
            return result;
        } catch (error) {
            throw error
        }
    }
    
};

module.exports = TomadorServices;