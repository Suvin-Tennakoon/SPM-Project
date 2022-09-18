const cakeOrder = require("../../models/Order/cakeOrder.model");

const addNewOrder = (req, res) => {
  const seller = req.body.seller;
  const customer = req.body.customer;
  const cakeType = req.body.cakeType;
  const size = req.body.size;
  const flavour = req.body.flavour;
  const sugar = req.body.sugar;
  const quantity = req.body.quantity;
  const cakeText = req.body.cakeText;
  const accessories = req.body.accessories;
  const ingredients = req.body.ingredients;
  const deliverData = req.body.deliverData;
  const paymentType = req.body.paymentType;
  const cakeImage = req.body.cakeImage;

  const newCakeOrder = new cakeOrder({
    seller,
    customer,
    cakeType,
    size,
    flavour,
    sugar,
    quantity,
    cakeText,
    accessories,
    ingredients,
    deliverData,
    paymentType,
    cakeImage,
  });

  newCakeOrder
    .save()
    .then((cakeOrder) => {
      res.json(cakeOrder._id);
    })
    .catch((err) => {
      res.json(err);
    });
};

const getAllCakeOrders = (req, res) => {
  cakeOrder
    .find()
    .then((cakeOrder) => {
      res.json(cakeOrder);
    })
    .catch((err) => {
      res.json(err);
    });
};

const getCakesforSeller = (req, res) => {
  cakeOrder
    .find({ seller: req.params.seller })
    .then((cakeOrder) => {
      res.json(cakeOrder);
    })
    .catch((err) => {
      res.json(err);
    });
};

const getCakesforCustomer = (req, res) => {
  cakeOrder
    .find({ customer: req.params.customer })
    .then((cakeOrder) => {
      res.json(cakeOrder);
    })
    .catch((err) => {
      res.json(err);
    });
};

const getOrderData = (req, res) => {
  cakeOrder
    .findById(req.params.id)
    .then((cakeOrder) => {
      res.json(cakeOrder);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = {
  addNewOrder,
  getAllCakeOrders,
  getCakesforSeller,
  getCakesforCustomer,
  getOrderData,
};
