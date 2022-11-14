const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')


router.post('/users',usersController.createUser)

router.post('/auth/signin',usersController.auth_signin_post)

module.exports=router