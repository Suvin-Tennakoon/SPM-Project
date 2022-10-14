import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Addcouponcode() {
  const [couponDetails, setCouponDetails] = useState([]);
  const [value, setValue] = useState({});

  
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [expireDate, setExpireDate] = useState("");
  

  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    couponId: couponDetails?.result?._id,
    couponCode: "",
    discount: "",
    expireDate: "",
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const validationSchema = Yup.object({
    couponCode: Yup.string()
      .required("*Required!")
      .min(10, "Too short")
      .max(10, "Too long"),
    expireDate: Yup.string().required("*Required!"),
    discount: Yup.string().required("*Required!"),
    
  });

  const onSubmit = (values) => {
    axios
      .post("http://localhost:3001/api/payments/coupon", values)
      .then((res) => {
        
        alert("New coupon Added.");
        console.log(res.data);
        setCouponDetails(res.data);
        console.log(couponDetails)
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
        className="container text-light"
        style={{ backgroundColor: "#343a40", padding: "20px", width: "50%" }}
      >
        <article
          class="card"
          style={{
            flex: "0 1 24%",
            marginBottom: "20px",
            backgroundColor: "#343a40",
          }}
        >
          <div className="card-header">
            <h3>
              New Coupon<b></b>
            </h3>
          </div>
          <div className="card-body"></div>
          <div style={{ float: "right", marginBottom: "20px" }}>
          <form onSubmit={formik.handleSubmit}>
            <div class="form-group col-md-4">
              <input
                type="text"
                class="form-control"
                id="couponCode"
                placeholder="Coupon Code"
                name="couponCode"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.couponCode}
              ></input>
              {formik.touched.couponCode && formik.errors.couponCode ? <div style={{ color: "red" }}>{formik.errors.couponCode}</div> : null}
            </div>
            <div class="form-group col-md-4">
              <input
                type="date"
                class="form-control"
                id="expireDate"
                placeholder="Date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.expireDate}
              ></input>
                 {formik.touched.expireDate && formik.errors.expireDate ? <div style={{ color: "red" }}>{formik.errors.expireDate}</div> : null}
            </div>
            <div class="form-group col-md-4">
              <select class="form-control" id="discount" onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.discount}>
                <option>Discount(%)</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
                <option>25</option>
                <option>30</option>
              </select>
              {formik.touched.discount && formik.errors.discount ? <div style={{ color: "red" }}>{formik.errors.discount}</div> : null}
            </div>
            <button className="btn btn-primary ml-4" type="submit">
              save
            </button>
            </form>
          </div>
        </article>
      </div>
    </div>
  );
}
