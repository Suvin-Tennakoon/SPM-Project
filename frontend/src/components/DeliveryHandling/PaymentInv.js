import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function PaymentInv() {
  // let userEmail = localStorage.getItem('Email');

  // const navigate = useNavigate();

  // const [userDetails, setUserDetails] = useState([]);

  // useEffect(() => {
  //     axios.get(`http://localhost:3001/api/customers?email=${userEmail}`)
  //         .then((res) => {
  //             console.log(res.data);
  //             setUserDetails(res.data);
  //         })
  // }, [])

  return (
    <div style={{ marginTop: "120px" }}>
      <div
        className="container text-dark"
        style={{ backgroundColor: "#d9d9d9", padding: "20px", width: "30%" }}
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
              Payment Invoice <b></b>
            </h3>
            {/* <h5 style={{ float: "right" }}>ID: <b></b></h5> */}
          </div>
          <div className="card-body">
            {/* <Link to={{ pathname: "" }}>
                                <a href='#' style={{fontSize:'13px', float: "right"}}>Update Details</a>
                            </Link><br/> */}
            <div className="form-row">

            <div>



{/* <div className="form-group col-md-12" style={{paddingLeft:"380px"}}> */}
<span>Order No. : ref323423</span><br/>

<span>Issued: 02/07/2022</span><br/><br/>
<span>Delivery Address:</span><br/>
<span>No 12/1, Makubura, Pannipitiya</span><br/><br/>
{/* </div> */}
<span>Description : Vanila Cake</span><br/>
<span>Sub Total : 2500.00 Lkr</span><br/>
<span>Discount : 10%</span><br/>
<span>Total : 2250.00</span><br/>
</div>
              {/* <div className='form-group col-md-6'>
                                    <label class="text-dark">Order No.</label><br />
                                    <input type='text' className='form-control'  />
                                </div>
                                <div className='form-group col-md-6'>
                                    <label class="text-dark">Order Type | Date Time</label><br />
                                    <input type='text' className='form-control'  />
                                </div>
                                <div className='form-group col-md-4'>
                                    <label class="text-dark">Amount</label><br />
                                    <input type='text' className='form-control'  />
                                </div>
                                <div className='form-group col-md-8'>
                                    <label class="text-dark">Coupon Code</label><br />
                                    <input type='text' className='form-control'  />
                                </div> */}
              {/* <div className='form-group col-md-4'>
                                    <label class="text-dark">Status</label><br />
                                    <input type='text' className='form-control' disabled value={val.status} />
                                </div> */}
            </div>
          </div>
          <div
            style={{ float: "right", marginTop: "10px", marginBottom: "20px" }}
          >
            <a href="" className="btn btn-primary ml-4" style={{ backgroundColor: "#fe0035" }}>
              Export as PDF
            </a>
            <a href="/CardPay" className="btn btn-warning ml-2" style={{ backgroundColor: "#fe0035" }}>
              Proceed
            </a>
            
          </div>
          
        </article>
        {/* ))} */}
      </div>
    </div>
  );
}
