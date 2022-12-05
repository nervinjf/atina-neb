const { Cotizacion, Tomador } = require('../models');

class CotizacionServices{
    static async getAll(){
        try {
            const result = await Cotizacion.findAll({
                attributes: ["plan", "asegurados", "fPago", "efectivo", "tiempo"],
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
            const result = await Cotizacion.create(newCo);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CotizacionServices;