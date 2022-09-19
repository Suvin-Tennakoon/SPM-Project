const express = require("express");
const {
  addNewOrder,
  getAllCakeOrders,
  getCakesforSeller,
  getCakesforCustomer,
  getOrderData,
  getOrderProgress,
} = require("../controllers/Order/order.controller");
const orderRoutes = express.Router();

//code

orderRoutes.post("/addCakeOrder", addNewOrder);
orderRoutes.get("/getAllOrders", getAllCakeOrders);
orderRoutes.get("/getCakeforShop/:seller", getCakesforSeller);
orderRoutes.get("/getCakeforCustomer/:customer", getCakesforCustomer);
orderRoutes.get("/getOrderData/:id", getOrderData);
orderRoutes.get("/getOrderProgress/:id", getOrderProgress);


module.exports = orderRoutes;
