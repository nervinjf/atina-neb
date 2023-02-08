const { Router } = require('express');
const { userRegister, getAllUsers } = require('../controllers');
// const authenticate = require("../middlewares/auth.middleware");
const authVerification = require("../middlewares/auth.middleware");

const router = Router();


router.post("/users", authVerification, userRegister);
router.get("/users", authVerification, getAllUsers);

module.exports = router;