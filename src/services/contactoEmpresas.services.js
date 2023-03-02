const { ContactoEmpresa, Empresas, Users } = require("../models");



class ContactoEmpresaServices{
    
    static async getAll(){
        try {
            const result = await ContactoEmpresa.findAll({
                attributes:[
                    "id",
                    "origen",
                    "fuente",
                    "proposito",
                    "estatus",
                    "motivo1",
                    "motivo2",
                    "motivo3",
                    "observacion",  
                    "createdAt", 
                    "updatedAt"
                ],
                include: [
                    {
                        model: Empresas,
                        as: "empresasco",
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
                            "empleadoId",
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
                    },
                ]
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async register(data){
        try {
            const result = await ContactoEmpresa.create(data);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ContactoEmpresaServices;