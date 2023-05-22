const { Router } = require('express');
const {} = require('../../controllers');
const authVerification = require('../../middlewares/auth.middleware');

const router = Router();

router.get("/seguimiento", authVerification, );
router.get("/seguimiento", authVerification, );
router.get("/seguimiento", authVerification, );


module.exports = router;