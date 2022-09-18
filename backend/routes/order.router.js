const express = require("express");
const {
  addNewOrder,
  getAllCakeOrders,
  getCakesforSeller,
  getCakesforCustomer,
  getOrderData,
} = require("../controllers/Order/orderImage.controller");
const orderRoutes = express.Router();

//code

orderRoutes.post("/addCakeOrder", addNewOrder);
orderRoutes.get("/getAllOrders", getAllCakeOrders);
orderRoutes.get("/getCakeforShop/:seller", getCakesforSeller);
orderRoutes.get("/getCakeforCustomer/:customer", getCakesforCustomer);
orderRoutes.get("/getOrderData/:id", getOrderData);


module.exports = orderRoutes;
