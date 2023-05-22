const { Router } = require('express');
const {} = require('../../controllers');
const authVerification = require('../../middlewares/auth.middleware');

const router = Router();


router.get('/seguimiento', authVerification, );
router.get('/sguimiento', authVerification, );
router.get('/sguimiento', authVerification, );

module.exports = router;