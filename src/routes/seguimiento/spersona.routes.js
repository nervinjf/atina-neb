const { Router } = require('express');
const { getPersonaSeguimiento, getByIdPersonaSeguimiento, postPersonaSeguimiento, PutPersonaSeguimiento } = require('../../controllers');
const authVerification = require('../../middlewares/auth.middleware');

const router = Router();

router.get("/seguimiento/persona", authVerification, getPersonaSeguimiento);
router.get("/seguimiento/persona/:id", authVerification, getByIdPersonaSeguimiento);
router.post("/seguimiento/persona", authVerification, postPersonaSeguimiento);
router.put("/seguimiento/persona/:id", authVerification, PutPersonaSeguimiento);


module.exports = router;