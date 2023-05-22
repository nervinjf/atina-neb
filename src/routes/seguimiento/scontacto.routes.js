const { Router } = require('express');
const { getContactoSeguimiento, postContactoSeguimiento } = require('../../controllers');
const authVerification = require('../../middlewares/auth.middleware');

const router = Router();


router.get('/seguimiento/contacto', authVerification, getContactoSeguimiento);
router.post('/sguimiento/contacto', authVerification, postContactoSeguimiento);

module.exports = router;