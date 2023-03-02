const { Router } = require("express");
const authVerification = require("../middlewares/auth.middleware");
const { getAllContactoEmpresa, registerContactoEmpresa } = require('../controllers');

const router = Router();


router.get("/contactoEmpresa", authVerification, getAllContactoEmpresa);
router.post("/contactoEmpresa", authVerification, registerContactoEmpresa);


module.exports = router;