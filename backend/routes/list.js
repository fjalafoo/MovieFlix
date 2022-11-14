const express = require ('express')
const router = express.Router()
const myListController = require('../controllers/myList')
// require isLoggedIn Middleware
const isLoggedIn = require ('../helper/isLoggedIn')
// We import our controller functions above

// We define the routes and controllers
router.get('/myList', myListController.getAllmyList)

router.post('/myList', isLoggedIn, myListController.createmyList)

router.put('/myList', myListController.updatemyList)

router.delete('/myList/:_id', myListController.deletemyList)
// We export our routs
module.exports = router