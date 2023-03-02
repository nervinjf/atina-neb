const { Router } = require('express');
const authVerification = require("../middlewares/auth.middleware");
const { getAllempresas, registerEmpresa, UpdateEmpresa, getEmpresaId } = require('../controllers');


const router = Router();

router.get('/empresa', authVerification, getAllempresas);
router.get('/empresa/:id', authVerification, getEmpresaId);
router.post('/empresa', authVerification, registerEmpresa);
router.put('/empresa/:id', authVerification, UpdateEmpresa);

module.exports = router;