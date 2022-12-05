const { Router } = require('express');
const { getAllAsegurado, registerAsegurado } = require('../controllers');



const router = Router();


router.get('/asegurado', getAllAsegurado);
router.post('/asegurado', registerAsegurado);

module.exports = router;