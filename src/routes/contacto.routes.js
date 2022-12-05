const { Router } = require('express');
const { getAllContacto, registerContacto } = require('../controllers');

const router = Router();

router.get('/contacto', getAllContacto);
router.post('/contacto', registerContacto);

module.exports = router;