const Payment = require("../../models/Payment/Payment");
// const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

// var jwtSecret = 'mysecrettoken';

// const getUsers = async (req, res) => {

//     const PAGE_SIZE = 2;
//     const page = parseInt(req.query.page || "0");
//     const total = await User.countDocuments({});

//     try {

//         const users = await User.find()
//             .limit(PAGE_SIZE)
//             .skip(PAGE_SIZE * page);
//         res.json({
//             totalPages: Math.ceil(total / PAGE_SIZE),
//             users,
//         });
//         res.status(200);
//     }
//     catch (err) {

//         res.status(400).json({ message: err.message });
//     }
// }

const addPayment = (req, res, next) => {
  const userId = req.body.userId;
  const paymentId = req.body.paymentId;
  const orderNo = req.body.orderNo;
  const orderType = req.body.orderType;
  const date = req.body.date;
  const time = req.body.time;
  const amount = req.body.amount;
  const couponCode = req.body.couponCode;
  // const PType = req.body.PType;

  const newPayment = new Payment({
    userId,
    paymentId,
    orderNo,
    orderType,
    date,
    time,
    amount,
    couponCode,
  });

  newPayment
    .save()
    .then(() => {
      res.json("Payment Added");
    })
    .catch((err) => {
      console.log(err);
    });
};

const getPayment = (req, res, next) => {
  Payment.find()
    .then((Payment) => {
      res.json(Payment);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getPaymentById = async (req, res) => {
  const id = req.params.id;

  try {
    const Payment = await Payment.findById(id);
    res.status(200).json(Payment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updatePayment = async (req, res) => {
  const { id } = req.params;
  const {
    userId,
    paymentId,
    orderNo,
    orderType,
    date,
    time,
    amount,
    couponCode,
  } = req.body;

  try {
    const updatePayment = {
      userId,
      paymentId,
      orderNo,
      orderType,
      date,
      time,
      amount,
      couponCode,
    };
    await Payment.findByIdAndUpdate(id, updatePayment, { new: true });
    res.json(updatePayment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { addPayment, getPayment, getPaymentById, updatePayment };
