const { People, Cita, Contacto, Users } = require('../models');

class PeopleServices {
    static async getAll() {
        try {
            const result = await People.findAll({
                attributes: [
                    "firstname",
                    "lastname",
                    "email",
                    "phone",
                    "phone2",
                    "phone3",
                    "campana",
                ],
                include: {
                    model: Users,
                    as: "user",
                    attributes: [
                        "firstname",
                        "lastname"
                    ]
                },
                include: {
                    model: Cita,
                    as: "cita",
                    attributes: [
                        "id",
                        "peopleId",
                        "userId",
                        "fecha",
                        "fechaReagendada",
                        "idioma",
                        "direccion",

                    ]
                },
                include: {
                    model: Contacto,
                    as: "contacto",
                    attributes: [
                        "id",
                        "peopleId",
                        "userId",
                        "origen",
                        "fuente",
                        "estatus",
                        "resultado",
                        "observacion",
                    ]
                }
            });
            return result;
        } catch (error) {
            throw error
        }
    }

    static async register(newA) {
        try {
            const result = await People.create(newA);
            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = PeopleServices;