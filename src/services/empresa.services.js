const { Empresas, CitaEmpresa, ContactoEmpresa, Users, Empleado, Cargo } = require("../models")

class EmpresaServices{

    static async getAll(){
        try {
            const result = await Empresas.findAll({
                attributes: [
                    "id",
                    "rif",
                    "razonSocial",
                    "email",
                    "email2",
                    "phone",
                    "phone2",
                    "direcccion",
                    "numeroEmpleados",
                    "tipoempresa",
                ],
                include: [
                    {
                        model: CitaEmpresa,
                        as: "citae",
                        attributes:["id", "empresaId", "fecha", "fechareagendada", "status", "createdAt", "updatedAt"]
                    },{
                        model: ContactoEmpresa,
                        as: "contacto",
                        attributes: ["origen", "fuente", "proposito", "estatus", "motivo1",
                    "motivo2", "motivo3", "observacion", "createdAt", "updatedAt"]
                    },{
                        model: Users,
                        as: "Users",
                        attributes: [
                            "firstname",
                            "lastname",
                            "id"
                        ],
                    },{
                        model: Empleado,
                        as: "empleado",
                        attributes: ["id", "firstname", "lastname", "email", "cargoId", "favorite"],
                        include: {
                            model: Cargo,
                            as: "cargo",
                            attributes: ["id", "cargo"]
                        }
                    },
                ],
            });
            return result;
        } catch (error) {
            throw error
        }
    }

    static async getById(id){
        try {
            const result = await Empresas.findByPk(id, {
                attributes: ["id", "rif", "razonSocial", "email", "email2", "phone", "phone2", "direcccion", "tipoempresa", "numeroEmpleados"],
                include: [
                    {
                        model: ContactoEmpresa,
                        as: "contacto",
                        attributes: ["origen", "fuente", "proposito", "estatus", "motivo1", 
                        "motivo2", "motivo3", "observacion", "createdAt", "updatedAt"],
                    },
                    {
                        model: CitaEmpresa,
                        as: "citae",
                        attributes: ["id", "empresaId", "fecha", "fechareagendada", "status", "createdAt", "updatedAt"],
                        include: {
                            model: Empleado,
                            as: "empleadoci",
                            attributes: ["id", "firstname", "lastname", "email", ],
                        }
                    },
                    {
                        model: Empleado,
                        as: "empleado",
                        attributes: ["id", "firstname", "lastname", "email", "cargoId", "favorite"],
                        include: {
                            model: Cargo,
                            as: "cargo",
                            attributes: ["id", "cargo"]
                        }
                    },
                ]
            });
            return result;
        } catch (error) {
            throw error
        }
    }

    static async register(data){
        try {
            const result = await Empresas.create(data);
            return result;
        } catch (error) {
            throw error
        }
    }

    static async update(id, data){
        try {
            const result = await Empresas.update(data, {
                where: {id},
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = EmpresaServices;