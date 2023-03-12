const { Router } = require("express");
const { userLogin } = require("../controllers");
const { cors } = require('cors')

const router = Router();

router.post("/auth/login",  cors({origin: "*"}),userLogin);

module.exports = router;
