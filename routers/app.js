const express = require('express')
const router = express.Router()
const appcontrollers = require('../controllers/appcontrollers')

router.post('/register',appcontrollers.register)
router.post('/login',appcontrollers.login)
module.exports=router