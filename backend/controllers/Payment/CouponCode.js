const CouponCode = require('../../models/Payment/CouponCode');
// const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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

const addcouponcode = (req, res, next) => {
    const couponId = req.body.couponId;
    const couponCode = req.body.couponCode;
    const discount = req.body.discount;
    const expireDate = req.body.expireDate;
    const status = req.body.status;
    // const PType = req.body.PType;
  
    const newCouponCode = new CouponCode({
        couponId,
        couponCode,
        discount,
        expireDate,
        status
    });
  
    newCouponCode
      .save()
      .then(() => {
        res.json("Coupon Details Added");
      })
      .catch((err) => {
        console.log(err);
      });
  };


const getCouponCode = (req, res, next) => {
    CouponCode.find()
      .then((CouponCode) => {
        res.json(CouponCode);
      })
      .catch((err) => {
        console.log(err);
      });
  };


const getCouponCodeById = async (req, res) => {

    const id = req.params.id;

    try {

        const CouponCode = await CouponCode.findById(id);
        res.status(200).json(CouponCode);
    }
    catch (err) {

        res.status(400).json({ message: err.message });
    }
}

const updateCouponCode = async (req, res) => {

    const { id } = req.params;
    const { couponId, couponCode, discount, expireDate, status} = req.body;

    try {

        const updateCouponCode = ({
            couponId,
        couponCode,
        discount,
        expireDate,
        status
        });
        await CouponCode.findByIdAndUpdate(id, updateCouponCode, { new: true });
        res.json(updateCouponCode);
    }
    catch (err) {

        res.status(400).json({ message: err.message });
    }
}

const deleteCouponCode = (req, res, next) => {
    let ID = req.params.id;
    CouponCode
      .findByIdAndDelete(ID)
      .then(() => {
        res.status(200).send({ status: "Coupon Code Deleted" });
      })
      .catch((err) => {
        console.log(err.message);
        res
          .status(500)
          .send({ status: "Error with delete coupon code", erroe: err.message });
      });
  };


module.exports = { addcouponcode, getCouponCode, getCouponCodeById, updateCouponCode}