const { Router } = require('express');
const { getAllCita, registerCita, updateCita } = require('../controllers');

const router = Router();

router.get('/cita', getAllCita);
router.post('/cita', registerCita);
router.put('/cita/:id', updateCita)

module.exports = router;