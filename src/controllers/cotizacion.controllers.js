// const { CotizacionServices } = require('../services');

// const getAllcotizacion = async (req, res, next) => {
//     try {
//         const result = await CotizacionServices.getAll();
//         res.json(result);
//     } catch (error) {
//         next({
//             status: 400,
//             errorContent: error,
//             message: "Algo salio mal"
//         })
//     }
// }

// const registerCotizacion = async (req, res, next) => {
//     try {
//         const newCotizacion = req.body;
//         const result = await CotizacionServices.register(newCotizacion);
//         res.status(201).json(result);
//     } catch (error) {
//         next({
//             status: 400,
//             errorContent: error,
//             message: "Faltan datos"
//         })
//     }
// }

// module.exports = {
//     getAllcotizacion,
//     registerCotizacion,
// }