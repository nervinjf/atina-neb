const { Router } = require('express');
const { getAllContacto, registerContacto } = require('../controllers');
const authVerification = require("../middlewares/auth.middleware");

const router = Router();

router.get('/contacto', authVerification, getAllContacto);
router.post('/contacto', authVerification, registerContacto);

module.exports = router;