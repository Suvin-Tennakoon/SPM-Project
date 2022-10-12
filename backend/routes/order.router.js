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
} = require("../controllers/Order/order.controller");
const orderRoutes = express.Router();

//code

orderRoutes.post("/addCakeOrder", addNewOrder);
orderRoutes.get("/getAllOrders", getAllCakeOrders);
orderRoutes.get("/getCakeforShop/:seller", getCakesforSeller);
orderRoutes.get("/:customer", getCakesforCustomer);
orderRoutes.get("/getOrderData/:id", getOrderData);
orderRoutes.get("/getOrderProgress/:id", getOrderProgress);
orderRoutes.put("/updateOrder/:id", updateOrder);
orderRoutes.put("/setAcceptedOrder/:id", setAcceptedOrder);
orderRoutes.put("/setRejectedOrder/:id", setRejectOrder);

module.exports = orderRoutes;
