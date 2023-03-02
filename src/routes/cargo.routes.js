const { Router } = require("express");
const authVerification = require("../middlewares/auth.middleware");
const { getAllCargo, registerCargo } = require('../controllers')

const router = Router();

router.get('/cargo', authVerification, getAllCargo);
router.post('/cargo', authVerification, registerCargo);

module.exports = router;