const cakeOrder = require("../../models/Order/cakeOrder.model");
const orderProgress = require("../../models/Order/orderProgress.model");

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
    accepted: 0,
  });

  newCakeOrder
    .save()
    .then((cakeOrder) => {
      const newOrderProgress = orderProgress({
        orderId: cakeOrder._id,
        cakeImage,
        cakeName: cakeType,
        decision: 0,
        amount: "",
        modPeriod: "",
        advAmount: "",
        rejectReason: "",
      });

      newOrderProgress.save().then(() => {
        res.json(cakeOrder._id);
      });
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
    .find({ seller: req.params.seller, accepted: 0 })
    .then((cakeOrder) => {
      res.json(cakeOrder);
    })
    .catch((err) => {
      res.json(err);
    });
};

const getAllOrdersForSeller = (req, res) => {
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

const getOrderProgress = (req, res) => {
  orderProgress
    .findOne({ orderId: req.params.id })
    .then((orderProgress) => {
      res.json(orderProgress);
    })
    .catch((err) => {
      res.json(err);
    });
};

const updateOrder = (req, res) => {
  cakeOrder
    .findByIdAndUpdate(req.params.id, {
      $set: {
        cakeType: req.body.cakeType,
        size: req.body.size,
        flavour: req.body.flavour,
        sugar: req.body.sugar,
        quantity: req.body.quantity,
        cakeText: req.body.cakeText,
        accessories: req.body.accessories,
        ingredients: req.body.ingredients,
        cakeImage: req.body.cakeImage,
        accepted: 0,
      },
    })
    .then(() => {
      orderProgress
        .findOneAndUpdate(
          { orderId: req.params.id },
          {
            $set: {
              cakeImage: req.body.cakeImage,
              cakeName: req.body.cakeType,
              decision: 0,
              amount: "",
              modPeriod: "",
              advAmount: "",
              rejectReason: "",
            },
          }
        )
        .then(() => {
          res.json("Updated Successfully");
        });
    })
    .catch((err) => {
      res.json(err);
    });
};

const setAcceptedOrder = (req, res) => {
  orderProgress
    .findOneAndUpdate(
      { orderId: req.params.id },
      {
        $set: {
          decision: 1,
          amount: req.body.amount,
          modPeriod: req.body.modPeriod,
          advAmount: req.body.advAmount,
        },
      }
    )
    .then(() => {
      cakeOrder
        .findByIdAndUpdate(req.params.id, {
          $set: {
            accepted: 1,
          },
        })
        .then(() => {
          res.json("Success");
        });
    })
    .catch((err) => {
      res.json(err);
    });
};

const setRejectOrder = (req, res) => {
  orderProgress
    .findOneAndUpdate(
      { orderId: req.params.id },
      {
        $set: {
          decision: -1,
          rejectReason: req.body.rejectReason,
        },
      }
    )
    .then(() => {
      cakeOrder
        .findByIdAndUpdate(req.params.id, {
          $set: {
            accepted: -1,
          },
        })
        .then(() => {
          res.json("Success");
        });
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
  getOrderProgress,
  updateOrder,
  setAcceptedOrder,
  setRejectOrder,
  getAllOrdersForSeller,
};
