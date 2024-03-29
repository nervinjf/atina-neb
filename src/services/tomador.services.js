const { Tomador, Users, Asegurado, Cita, Cotizacion, Contacto, CitaCoti } = require('../models');

class TomadorServices {
    static async getAll() {
        try {
            const result = await Tomador.findAll({
                attributes: ["id", "firstname", "lastname", "ci", "email", "phone1", "phone2", "phone3",
                    "address1", "address2", "fNacimiento", "patologia", "medicamentos", "createdAt", "updatedAt"],
                include: [
                    {
                        model: Contacto,
                        as: "contacto",
                        attributes: ["origen", "fuente", "proposito", "estatus", "motivo1", 
                        "motivo2", "motivo3", "observacion", "createdAt", "updatedAt"],
                    },
                    {
                        model: Asegurado,
                        as: "asegurados",
                        attributes: ["firstname", "lastname", "ci", "email", "parentesco", "phone1", 
                        "phone2", "phone3", "address1", "address2", "fNacimiento", "patologia", 
                        "medicamentos", "createdAt", "updatedAt"]
                    },
                    {
                        model: CitaCoti,
                        as: "cita",
                        attributes: ["id", "codigo", "fecha", "tipo", "plan", "asegurados", "fPago", "efectivo", 
                        "tiempo", "fCliente", "fDevolucion", "adjunto", "poliza", "statusSuscripcion", "createdAt",
                        "updatedAt"]
                    },
                ]
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getById(id) {
        try {
            const result = await Tomador.findByPk(id, {
                attributes: ["id", "firstname", "lastname", "ci", "email", "phone1", "phone2", "phone3",
                    "address1", "address2", "fNacimiento", "patologia", "medicamentos", "createdAt", "updatedAt"],
                include: [
                    {
                        model: Contacto,
                        as: "contacto",
                        attributes: ["origen", "fuente", "proposito", "estatus", "motivo1", 
                        "motivo2", "motivo3", "observacion", "createdAt", "updatedAt"],
                    },
                    {
                        model: Asegurado,
                        as: "asegurados",
                        attributes: ["firstname", "lastname", "ci", "email", "parentesco", "phone1", 
                        "phone2", "phone3", "address1", "address2", "fNacimiento", "patologia", 
                        "medicamentos", "createdAt", "updatedAt"]
                    },
                    {
                        model: CitaCoti,
                        as: "cita",
                        attributes: ["id", "codigo", "fecha", "tipo", "plan", "asegurados", "fPago", "efectivo", 
                        "tiempo", "fCliente", "fDevolucion", "adjunto", "poliza", "statusSuscripcion", "createdAt",
                        "updatedAt", "primaAnual"]
                    },
                ]
            })
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async register(tomador) {
        try {
            const result = await Tomador.create(tomador);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getAllAsegurado() {
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

    static async getAllCita() {
        try {
            const result = await Tomador.findAll({
                attributes: ["firstname", "lastname", "ci", "email", "phone1", "phone2",
                    "phone3", "address1", "address2", "fNacimiento", "patologia", "medicamentos", "createdAt", "updatedAt"
                ],
                include: {
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

    static async getAllCoti() {
        try {
            const result = await Tomador.findAll({
                attributes: ["firstname", "lastname", "ci", "email", "phone1", "phone2",
                    "phone3", "address1", "address2", "fNacimiento", "patologia", "medicamentos", "createdAt", "updatedAt"
                ],
                include: {
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

    static async update(id, data){
        try {
            const result = await Tomador.update(data, {
                where: {id},
            })

            return result
        } catch (error) {
            throw error
        }
    }

};

module.exports = TomadorServices;