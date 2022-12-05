const { Router } = require('express');
const { getAllCita, registerCita } = require('../controllers');

const router = Router();

router.get('/cita', getAllCita);
router.post('/cita', registerCita);

module.exports = router;