const express = require('express');
const paymentRoutes = express.Router();
const { addPayment, getPayment, getPaymentById, updatePayment} = require('../controllers/Payment/Payment');
const { addcouponcode, getCouponCode, getCouponCodeById, updateCouponCode} = require('../controllers/Payment/CouponCode');

paymentRoutes.post('/', addPayment);
paymentRoutes.get('/get', getPayment);
paymentRoutes.get('/:id', getPaymentById);
paymentRoutes.put('/pay/:id', updatePayment);
paymentRoutes.post('/coupon', addcouponcode);
paymentRoutes.get('/get/coupon', getCouponCode);
paymentRoutes.get('/get/coupon/:id', getCouponCodeById);
paymentRoutes.put('/update/coupon/:id', updateCouponCode);

module.exports = paymentRoutes;