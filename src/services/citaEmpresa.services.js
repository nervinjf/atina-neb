const { CitaEmpresa, Empresas, Users, Empleado, Cargo } = require("../models")


class CitaEmpresaServices {
    static async getAll() {
        try {
            const result = await CitaEmpresa.findAll({
                attributes: ["id", "empresaId", "fecha", "fechareagendada", "status", "createdAt", "updatedAt"],
                include: [
                    {
                        model: Empleado,
                        as: "empleadoci",
                        attributes: [
                            "id",
                            "userId",
                            "firstname",
                            "lastname",
                            "email",
                            "cargoId",
                        ],
                        include: {
                            model: Cargo,
                            as: "cargo",
                            attributes: [
                                "id",
                                "cargo",
                            ],
                        }
                    },
                    {
                        model: Empresas,
                        as: "empresasci",
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
                    }
                ],
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async register(data) {
        try {
            const result = await CitaEmpresa.create(data);
            const { id, fecha, fechareagendada, status } = result;
            const datos = {id, fecha, fechareagendada, status};

            const result2 = await Empresas.findOne({
                where: { id: result.empresaId },
                raw: true
            });

            const result3 = { ...result2, ...datos };

            return result3;
        } catch (error) {
            throw error
        }
    }

    static async updateCiE(id, data) {
        try {
            const result = await CitaEmpresa.update(data,{
                where: {id},
            });
            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = CitaEmpresaServices;