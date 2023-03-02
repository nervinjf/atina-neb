const { Empleado, Empresas } = require("../models")


class EmpleadoServices{
    
    static async gettAll(){
        try {
            const result = await Empleado.findAll({
                attributes:[
                    'id',
                    "userId",
                    "firstname",
                    "lastname",
                    "email",
                    "cargoId",
                ],
                include:[
                    {
                        model: Empresas,
                        as: "empresase",
                        attributes:[
                            "rif",
                            "razonSocial",
                            "email",
                            "email2",
                            "phone",
                            "phone2",
                            "direcccion",
                            "numeroEmpleados",
                        ]
                    }
                ]
            })
            return result;
        
        } catch (error) {
            throw error
        }
    }

    static async register(data){
        try {
            const result = await Empleado.create(data);
            return result;
        } catch (error) {
            throw error
        }
    }

    static async update(id, data) {
        try {
            const result = await Empleado.update(data, {
                where: {id},
            });
            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = EmpleadoServices;