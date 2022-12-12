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
            // const result2 = await CitaCoti.findOne({
            //     where: {id: result.toamdorId},
            //     attributes: ["codigo", "fecha", "tipo", "plan", "asegurados", "fPago", "efectivo", "tiempo", 
            // "fCliente", "fDevolucion", "adjunto", "poliza", "statusSuscripcion", "createdAt"],
            //     include:[
            //         {
            //            model: Tomador,
            //         as: "tomador",
            //         attributes: [
            //             "firstname",
            //             "lastname",
            //             "ci",
            //             "email",
            //             "phone1"
            //         ], 
            //         },
            //         {
            //             model: Users,
            //             as: "Users",
            //             attributes: [
            //                 "firstname",
            //                 "lastname",
            //                 "id"
            //             ], 
            //         }
            //     ],
            // });

            const result3 = {...result2, ...result}
            console.log(result3)
            return result3;


        } catch (error) {
            throw error;
        }
    }

    // static async findOne(id){
    //     try {
    //         const result = await CitaCoti.findOne({
    //             where: {id},
    //             attributes: ["codigo", "fecha", "tipo", "plan", "asegurados", "fPago", "efectivo", "tiempo", 
    //         "fCliente", "fDevolucion", "adjunto", "poliza", "statusSuscripcion", "createdAt"],
    //             include:[
    //                 {
    //                    model: Tomador,
    //                 as: "tomador",
    //                 attributes: [
    //                     "firstname",
    //                     "lastname",
    //                     "ci",
    //                     "email",
    //                     "phone1"
    //                 ], 
    //                 },
    //                 {
    //                     model: Users,
    //                     as: "Users",
    //                     attributes: [
    //                         "firstname",
    //                         "lastname",
    //                         "id"
    //                     ], 
    //                 }
    //             ],
    //         });
    //         return result;
    //     } catch (error) {
    //         throw error;
    //     }
    // }
}

module.exports = CitaServices;