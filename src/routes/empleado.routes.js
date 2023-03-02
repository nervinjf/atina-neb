const { Router } = require("express");
const authVerification = require("../middlewares/auth.middleware");
const { getAllEmpleado, registerEmpleado, updateEmpleado } = require('../controllers');


const router = Router();

router.get('/empleado', authVerification, getAllEmpleado);
router.post('/empleado', authVerification, registerEmpleado);
router.put('/empleado/:id', authVerification, updateEmpleado);

module.exports = router;