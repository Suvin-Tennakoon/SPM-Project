import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

// export default function Addcouponcode() {
  const AddCouponCode = () => {

  const [couponDetails, setCouponDetails] = useState([]);

  //test
  // const [couponCode, setCouponCode] = useState("");
  // const [couponId, setCouponId] = useState("");
  // const [expireDate, setExpireDate] = useState("");
  // const [discount, setDiscount] = useState("");
  // const [status, setStatus] = useState("");

  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    couponCode: "",
    couponId: "",
    expireDate: "",
    discount: "",
    status: "",
  };

  //test
//   const rand = (min, max) => {
//     return Math.floor(Math.random() * max - min + 1) + min;
// }

// const handleIds = () => {
//     setCouponId(rand(999, 99999))
// }

// const handleIdChange = (e) => {

//   e.preventDefault();
//   setCouponId(e.target.value);
// }

// const handleCouponCode = (e) => {

//   e.preventDefault();
//   setCouponCode(e.target.value);
// }

// const handleExpireDate = (e) => {

//   e.preventDefault();
//   setExpireDate(e.target.value);
// }

// const handleDiscount = (e) => {

//   e.preventDefault();
//   setDiscount(e.target.value);
// }

// const handleStatus = (e) => {

//   e.preventDefault();
//   setStatus(e.target.value);
// }


// const addNewCoupon = async (e) => {
//   e.preventDefault();

//   if (couponId.length <= 0) {
//       alert("Please Enter any button to get an Coupon ID...")
//   }
//   if (couponCode.length <= 2) {
//     alert("Please Enter at least 3 letters")
// }
// if (discount.length <= 1) {
//   alert("Please Enter at least 2 numbers")
// }
// if (status.length <= 2) {
//   alert("Please Enter at least 3 letters")
// }
//   if (expireDate.length <= "01/01/2019") {
//       alert("You cannot enrol to the system...")
//   }

//   else {
//       setIsLoading(true);
//       const couponData = {
//           couponId: couponId,
//           couponCode: couponCode,
//           expireDate: expireDate,
//           discount: discount,
//           status: status,
//           status: '0'
//       }

//       console.log("Sending Coupon Data...", couponData);

//       let data = await axios
//           .post('http://localhost:3001/api/customers/', {
//             couponId: couponId,
//             couponCode: couponCode,
//             expireDate: expireDate,
//             discount: discount,
//             status: status,
//             status: '0'
//           })
//           .then((res) => {
//               console.log("Saved User: ", res.data);
//               //alert('Registration Success...');
//               Swal.fire({
//                   icon: 'success',
//                   title: 'User Registered!',
//                   text: 'Your data has been successfully inserted. please check your email...',
//               })
//               setIsLoading(false);
//               sendEmail(e);
//               navigate('/');
//           })
//           .catch((err) => {
//               // Swal.fire({
//               //     icon: 'error',
//               //     title: ' Insert Failed!',
//               //     text: (err.response.data),
//               // })
//               setIsLoading(false);
//               console.log(err);
//           })
//   }

// }

  const validationSchema = Yup.object({
    couponCode: Yup.string()
      .required("*Required!")
      .min(10, "Too short")
      .max(10, "Too long"),
    expireDate: Yup.string().required("*Required!"),
    discount: Yup.string().required("*Required!"),
    status: Yup.string().required("*Required!"),
    couponId: Yup.string().required("*Required!"),
  });

  const onSubmit = (values) => {
    axios
      .post("http://localhost:3001/api/payments/coupon", values)
      .then(() => {
        alert("New coupon Added.");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div style={{ marginTop: "120px" }}>
      <div
        className="container text-dark"
        style={{ backgroundColor: "#d9d9d9", padding: "20px", width: "50%" }}
      >
        <article
          class="card"
          style={{
            flex: "0 1 24%",
            marginBottom: "20px",
            backgroundColor: "#d9d9d9",
          }}
        >
          <div className="card-header">
            <h3>
              Add Coupon Codes<b></b>
            </h3>
          </div>
          <div className="card-body">
            <form onSubmit={formik.handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label class="text-dark">Coupon ID</label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    name="couponId"
                    id="couponId"
                    placeholder="Enter Coupon ID"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.couponId}
                  />
                  {formik.touched.couponId && formik.errors.couponId ? (
                    <div style={{ color: "red" }}>
                      {formik.errors.couponId}
                    </div>
                  ) : null}
                </div>
                <div className="form-group col-md-6">
                  <label class="text-dark">Coupon Code</label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    name="couponCode"
                    id="couponCode"
                    placeholder="Enter Coupon Code"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.couponCode}
                  />
                  {formik.touched.couponCode && formik.errors.couponCode ? (
                    <div style={{ color: "red" }}>
                      {formik.errors.couponCode}
                    </div>
                  ) : null}
                </div>
                <div className="form-group col-md-6">
                  <label class="text-dark">Expiry Date</label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    name="expireDate"
                    id="expireDate"
                    placeholder="Enter Expiry Date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.expireDate}
                  />
                  {formik.touched.expireDate && formik.errors.expireDate ? (
                    <div style={{ color: "red" }}>
                      {formik.errors.expireDate}
                    </div>
                  ) : null}
                </div>
                <div className="form-group col-md-4">
                  <label class="text-dark">Discount Amount</label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    name="discount"
                    id="discount"
                    placeholder="Enter Discount %"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.discount}
                  />
                  {formik.touched.discount && formik.errors.discount ? (
                    <div style={{ color: "red" }}>
                      {formik.errors.discount}
                    </div>
                  ) : null}
                </div>
              </div>
            </form>
          </div>
          <div
            style={{ float: "right", marginTop: "40px", marginBottom: "20px" }}
          >
            <a
              href=""
              className="btn btn-primary ml-4"
              type="submit"
              style={{ backgroundColor: "#fe0035" }}
            >
              Add Coupon Code
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
export default AddCouponCode;