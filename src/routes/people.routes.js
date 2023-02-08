const { Router } = require('express');
const { getAllPeople, registerPeople } = require('../controllers');
const authVerification = require("../middlewares/auth.middleware");




const router = Router();


router.get('/people', authVerification, getAllPeople);
router.post('/people', authVerification, registerPeople);

module.exports = router;