const { Router } = require('express');
const { getAllTomador, tomadorRegister, getAlltomadorAndAsegurados, getAlltomadorAndCita, getAlltomadorAndCotizacion, getTomadorId, updateTomador  } = require('../controllers');


const router = Router();

router.get('/tomador', getAllTomador);
router.get('/tomador/:id', getTomadorId);
router.put('/tomador/:id', updateTomador);
router.get('/tomador/asegurado', getAlltomadorAndAsegurados);
router.get('/tomador/cita', getAlltomadorAndCita);
router.get('/tomador/cotizacion', getAlltomadorAndCotizacion);
router.post('/tomador', tomadorRegister);



module.exports = router;