const { Router } = require('express');
const { getAllAsegurado, registerAsegurado } = require('../controllers');
const authVerification = require("../middlewares/auth.middleware");




const router = Router();


router.get('/asegurado', authVerification, getAllAsegurado);
router.post('/asegurado', authVerification, registerAsegurado);

module.exports = router;