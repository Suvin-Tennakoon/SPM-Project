const putnewdesign = require("../../models/Shops/AddNewDesign.model");

const addnewdesign = (req, res) => {
  const { designname, designimage, designprice, designdetails, username } =
    req.body;

  const newdesign = new putnewdesign({
    designname,
    designimage,
    designprice,
    designdetails,
    username,
  });

  newdesign
    .save()
    .then((putnewdesign) => {
      res.json(putnewdesign);
    })
    .catch((err) => {
      res.json(err);
    });
};

const getalldesign = (req, res) => {
  putnewdesign
    .find()
    .then((putnewdesign) => {
      res.json(putnewdesign);
    })
    .catch((err) => {
      res.json(err);
    });
};

const getSellersDesigns = (req, res) => {
  putnewdesign
    .find({ username: req.params.username }, { _id: 0, designimage: 1 })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

const getoneownersdesign = (req, res) => {
  putnewdesign
    .find({ username: req.params.username })
    .then((putnewdesign) => res.json(putnewdesign))
    .catch((err) => res.status(400).json("Error" + err));
};

const getonedesign = (req, res) => {
  putnewdesign
    .findById(req.params.id)
    .then((putnewdesign) => res.json(putnewdesign))
    .catch((err) => res.status(400).json("Error : " + err));
};

const updatedesign = (req, res) => {
  const { designname, designprice, designdetails } = req.body;

  const dataset = { designname, designprice, designdetails };

  putnewdesign
    .findByIdAndUpdate(req.params.id, dataset)
    .then((putnewdesign) => res.json(dataset))
    .catch((err) => res.status(400).json("Error : " + err));
};

const deletedesign = (req, res) => {
  putnewdesign
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("Request Deleted."))
    .catch((err) => res.status(400).json("Error : " + err));
};

module.exports = {
  addnewdesign,
  getalldesign,
  getonedesign,
  updatedesign,
  deletedesign,
  getSellersDesigns,
  getoneownersdesign,
};
