const { Cargo } = require("../models");

class CargoServices {
    static async getAll(){
        try {
            const result = await Cargo.findAll({
                attributes: [
                    'id',
                    'cargo',
                ]
            });
            return result;
        } catch (error) {
            throw error
        }
    }

    static async register(data){
        try {
            const result = await Cargo.create(data);
            return result;
        } catch (error) {
            throw error
        }
    }
}
module.exports = CargoServices;