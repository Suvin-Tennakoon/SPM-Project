const express = require("express");
const shopRoutes = express.Router();


//code

const {
  addnewdesign,
  getalldesign,
  getonedesign,
  updatedesign,
  deletedesign,
  getoneownersdesign,
  getSellersDesigns,
} = require("../controllers/Shops/AddNewDesign.controller");


shopRoutes.post("/add", addnewdesign);
shopRoutes.get("/all", getalldesign);
shopRoutes.get("/getone/:id", getonedesign);
shopRoutes.put("/update/:id", updatedesign);
shopRoutes.delete("/delete/:id", deletedesign);
shopRoutes.get("/getSellersDesigns/:username",getSellersDesigns);
shopRoutes.get("/getdesign/:username", getoneownersdesign);


module.exports = shopRoutes;
