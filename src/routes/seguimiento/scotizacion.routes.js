const { Router } = require('express');
const { getCotizacionSeguimiento, postCotizacionSeguimiento, PutCotizacionSeguimiento } = require('../../controllers');
const authVerification = require('../../middlewares/auth.middleware');

const router = Router();

router.get("/seguimiento/cotizacion", authVerification, getCotizacionSeguimiento);
router.post("/seguimiento/cotizacion", authVerification, postCotizacionSeguimiento);
router.put("/seguimiento/cotizacion/:id", authVerification, PutCotizacionSeguimiento);


module.exports = router;