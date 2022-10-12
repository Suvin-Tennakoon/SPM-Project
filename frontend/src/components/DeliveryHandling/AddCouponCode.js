import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Addcouponcode() {
  // let userEmail = localStorage.getItem('Email');

  // const navigate = useNavigate();

  const [couponDetails, setCouponDetails] = useState([]);

  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    // user_id: cusDetails?.result?._id,
    couponCode: "",
    couponId: "",
    expireDate: "",
    discount: "",
    status: "",
  };

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

  // useEffect(() => {
  //     axios.get(`http://localhost:3001/api/customers?email=${userEmail}`)
  //         .then((res) => {
  //             console.log(res.data);
  //             setUserDetails(res.data);
  //         })
  // }, [])

  // const onSubmit = (values) => {
  //     console.log("Form Date", values);
  //     // values.date_of_the_event = event_date; //watch
  //     axios
  //     .post("http://localhost:3001/api/payments/coupon", values)
  //     .then((res) => {
  //     console.log(res);
  //     console.log("Data", values);

  //     })
  //     .catch((error) => {
  //     console.log(error);
  //     });
  //     };

  return (
    <div style={{ marginTop: "120px" }}>
      <div
        className="container text-dark"
        style={{ backgroundColor: "#d9d9d9", padding: "20px", width: "50%" }}
      >
        {/* {userDetails.map((val, index) => ( */}
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
            {/* <h5 style={{ float: "right" }}>ID: <b></b></h5> */}
          </div>
          <div className="card-body">
            {/* <Link to={{ pathname: "" }}>
                                <a href='#' style={{fontSize:'13px', float: "right"}}>Update Details</a>
                            </Link><br/> */}
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
                {/* <div className='form-group col-md-8'>
                                    <label class="text-dark">Status</label><br />
                                    <input type='text' className='form-control' name="status"  placeholder='New'/>
                                </div> */}
                {/* <div className='form-group col-md-4'>
                                    <label class="text-dark">Status</label><br />
                                    <input type='text' className='form-control' disabled value={val.status} />
                                </div> */}
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

            {/* <a href='./' className='btn btn-warning ml-2'>Go to Shopping</a> */}
          </div>
        </article>
        {/* ))} */}
      </div>
    </div>
  );
}
