import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

// export default function Addcouponcode() {
  const AddCouponCode = () => {

  const [couponDetails, setCouponDetails] = useState([]);
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

//   const rand = (min, max) => {
//     return Math.floor(Math.random() * max - min + 1) + min;
// }

// const handleIds = () => {
//     setCouponId(rand(999, 99999))
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