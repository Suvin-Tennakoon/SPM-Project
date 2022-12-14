const express = require("express");
const {
  addNewOrder,
  getAllCakeOrders,
  getCakesforSeller,
  getCakesforCustomer,
  getOrderData,
  getOrderProgress,
  updateOrder,
  setAcceptedOrder,
  setRejectOrder,
  getAllOrdersForSeller,
  deleteOrder,
  getAcceptedCakesforSeller,
  getDataForPayment,
} = require("../controllers/Order/order.controller");
const orderRoutes = express.Router();

//code

orderRoutes.post("/addCakeOrder", addNewOrder);
orderRoutes.get("/getAllOrders", getAllCakeOrders);
orderRoutes.get("/getCakeforShop/:seller", getCakesforSeller);
orderRoutes.get("/getAllOrdersforCakeforShop/:seller", getAllOrdersForSeller);
orderRoutes.get("/getAcceptedOrders/:seller", getAcceptedCakesforSeller);
orderRoutes.get("/getCakeforCustomer/:customer", getCakesforCustomer);
orderRoutes.get("/getOrderData/:id", getOrderData);
orderRoutes.get("/getOrderProgress/:id", getOrderProgress);
orderRoutes.get("/getDataForPayment/:id", getDataForPayment);
orderRoutes.put("/updateOrder/:id", updateOrder);
orderRoutes.put("/setAcceptedOrder/:id", setAcceptedOrder);
orderRoutes.put("/setRejectedOrder/:id", setRejectOrder);
orderRoutes.delete("/deletecustomerorder/:id", deleteOrder);

module.exports = orderRoutes;
