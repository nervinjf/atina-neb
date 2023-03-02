const { Router } = require('express');
const authVerification = require("../middlewares/auth.middleware");
const { getAllCitaEmpresa, registerCitaEmpresa, updateCitaEmpresa } = require('../controllers');


const router = Router();

router.get('/citaEmpresa', authVerification, getAllCitaEmpresa);
router.post('/citaEmpresa', authVerification, registerCitaEmpresa);
router.put('/citaEmpresa/:id', authVerification, updateCitaEmpresa);

module.exports = router;