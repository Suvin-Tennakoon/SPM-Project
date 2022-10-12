const express = require('express');
const paymentRoutes = express.Router();
const { addPayment, getPayment, getPaymentById, updatePayment} = require('../controllers/Payment/Payment');
const { addcouponcode, getCouponCode, getCouponCodeById, updateCouponCode} = require('../controllers/Payment/CouponCode');
// const stripe = require("stripe")("sk_test_51Ls317GiNApYk7vMcCFqXQgZUH1ENU14Q11MOYgCR8f9LFA2maXRUCiPUrR5GMQ18GpQp9KhLg3NWUdE9B24Nn4I001wFHOGw8")
// const {v4 : uuidv4 } = require('uuid');

paymentRoutes.post('/', addPayment);
paymentRoutes.get('/get', getPayment);
paymentRoutes.get('/:id', getPaymentById);
paymentRoutes.put('/pay/:id', updatePayment);
paymentRoutes.post('/coupon', addcouponcode);
paymentRoutes.get('/get/coupon', getCouponCode);
paymentRoutes.get('/get/coupon/:id', getCouponCodeById);
paymentRoutes.put('/update/coupon/:id', updateCouponCode);


module.exports = paymentRoutes;