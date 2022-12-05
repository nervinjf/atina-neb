const { CitaCoti, Tomador, Users } = require('../models');
const { getAll } = require('./users.services');

class CitaServices {
    static async getAll(){
        try {
            const result = await CitaCoti.findAll({
                attributes: ["codigo", "fecha", "tipo", "plan", "asegurados", "fPago", "efectivo", "tiempo", 
            "fCliente", "fDevolucion", "adjunto", "poliza", "statusSuscripcion", "createdAt"],
                include:[
                    {
                       model: Tomador,
                    as: "tomador",
                    attributes: [
                        "firstname",
                        "lastname",
                        "ci",
                        "email",
                        "phone1"
                    ], 
                    },
                    {
                        model: Users,
                        as: "Users",
                        attributes: [
                            "firstname",
                            "lastname",
                            "id"
                        ], 
                    }
                ],
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async register(newC){
        try {
            const result = await CitaCoti.create(newC);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CitaServices;