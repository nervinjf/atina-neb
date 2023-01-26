const { Router } = require('express');
const { getAllTomador, tomadorRegister, getAlltomadorAndAsegurados, getAlltomadorAndCita, getAlltomadorAndCotizacion, getTomadorId, updateTomador  } = require('../controllers');
const authVerification = require("../middlewares/auth.middleware");


const router = Router();

router.get('/tomador', authVerification, getAllTomador);
router.get('/tomador/:id', authVerification, getTomadorId);
router.put('/tomador/:id', authVerification, updateTomador);
router.get('/tomador/asegurado', authVerification, getAlltomadorAndAsegurados);
router.get('/tomador/cita', authVerification, getAlltomadorAndCita);
router.get('/tomador/cotizacion', authVerification, getAlltomadorAndCotizacion);
router.post('/tomador', authVerification, tomadorRegister);



module.exports = router;