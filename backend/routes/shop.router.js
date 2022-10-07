const express = require("express");
const shopRoutes = express.Router();
const upload = require('../models/Shops/Upload.model');

//code

const {
  addnewdesign,
  getalldesign,
  getonedesign,
  updatedesign,
  deletedesign
} = require("../controllers/Shops/AddNewDesign.controller");

const {
  getImages
} = require("../controllers/Shops/upload");

//image upload
shopRoutes.post("/upload", upload.single("file"), (req, res)=>{

  if(`${req.file.bucketName}`==="file"){
       return res.send("you must select a file, select Images");
  }
  else{
  const url=`http://localhost:3001/api/shops/images/${req.file.filename}`;
  return res.json(url);
  }
});

shopRoutes.post("/add", addnewdesign);
shopRoutes.get("/all",getalldesign);
shopRoutes.get("/getone/:id",getonedesign);
shopRoutes.put("/update/:id",updatedesign);
shopRoutes.delete("/delete/:id",deletedesign);

shopRoutes.get("/images/:filename",getImages);

module.exports = shopRoutes;
