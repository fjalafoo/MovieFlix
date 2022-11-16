const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')


router.post('/users',usersController.createUser)

router.post('/auth/login',usersController.auth_signin_post)

module.exports=router