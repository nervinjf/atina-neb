const { Asegurado, Tomador } = require('../models');

class AseguradoServices {
    static async getAll(){
        try {
            const result = await Asegurado.findAll({
                attributes: ["firstname",
                "lastname",
                "ci",
                "email",
                "parentesco",
                "phone1",
                "phone2",
                "phone3",
                "address1",
                "address2",
                "fNacimiento",
                "patologia",
                "medicamentos",
            ],
            include:{
                model: Tomador,
                as: "tomador",
                attributes: [
                "firstname",
                "lastname",
                "ci",
                "email",
                "phone1"
            ]}
        });
            return result;
        } catch (error) {
            throw error
        }
    }

    static async register(newA){
        try {
            const result = await Asegurado.create(newA);
            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = AseguradoServices;