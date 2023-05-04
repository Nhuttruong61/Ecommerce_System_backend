const express = require("express");
const router = express.Router()
const OrderController = require('../controllers/OrderController');
const { authUserMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', OrderController.createOrder)
router.get('/get-all-order/:id', OrderController.getAllOrderDetails)
router.get('/get-details-order/:id', OrderController.getDetailsOrder)
router.delete('/cancel-order/:id', OrderController.cancelOrderDetails)
router.get('/get-all-order' ,authUserMiddleWare , OrderController.getAllOrder)
router.delete("/delete-order/:id",authUserMiddleWare,OrderController.deleteOrder)
router.put("/update-status/:id",authUserMiddleWare,OrderController.updateOrderStatus)
module.exports = router