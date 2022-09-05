const express = require("express");
const {
  addNewOrder,
  getAllCakeOrders,
} = require("../controllers/Order/orderImage.controller");
const orderRoutes = express.Router();

//code

orderRoutes.post("/addCakeOrder", addNewOrder);
orderRoutes.get("/getAllOrders", getAllCakeOrders);

module.exports = orderRoutes;
