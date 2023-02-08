const { Router } = require('express');
const { getAllCita, registerCita, updateCita } = require('../controllers');
const authVerification = require("../middlewares/auth.middleware");

const router = Router();

router.get('/cita', authVerification, getAllCita);
router.post('/cita', authVerification, registerCita);
router.put('/cita/:id', authVerification, updateCita)

module.exports = router;