const express = require('express')
const router = express.Router()
const { authenticateUser, authorizePermission } = require('../middleware/authentication')

const { getAllOrders,
    getCurrentUserOrders,
    getSingleOrders,
    createOrder,
    updateOrders } = require('../controllers/orderController')

router.route('/').post(authenticateUser, createOrder).get(authenticateUser, authorizePermission('admin'), getAllOrders)
router.route('/showAllMyOrders').get(authenticateUser, getCurrentUserOrders)
router.route('/:id').get(authenticateUser, getSingleOrders).patch(authenticateUser, updateOrders)

module.exports = router