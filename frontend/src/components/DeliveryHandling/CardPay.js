import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom"
import Swal from 'sweetalert2';

export default function CardPay() {

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
  <h3 style={{ marginTop: "130px" , textAlign:"center"}}>Pay Here<b></b></h3><br/>
<div >
          <img 
      src="https://images.newindianexpress.com/uploads/user/imagelibrary/2021/7/19/w900X450/Razorpay.jpg?w=640&dpr=1.0"
      alt="new" style={{ width:"300px", marginLeft:"530px"}} a href="https://www.paypal.com/us/webapps/mpp/account-selection"
      /><br/><br/>
      <img 
      src="https://cdn.icon-icons.com/icons2/2699/PNG/512/paypal_logo_icon_170865.png"
      alt="new" style={{ width:"300px", marginLeft:"530px"}}
      />

          </div>
           
            {/* <div className='container text-dark' style={{ backgroundColor: '#d9d9d9', padding: '20px', width: '50%' }}>
                {/* {userDetails.map((val, index) => ( */}
                    {/* <article class="card" style={{ flex: '0 1 24%', marginBottom: '20px', backgroundColor: '#d9d9d9' }}> */}
                        {/* <div className='card-header'> */}
                          
                            {/* <h5 style={{ float: "right" }}>ID: <b></b></h5> */}
                        {/* </div> */}
                        {/* <div className='card-body'> */}
                        {/* <Link to={{ pathname: "" }}>
                                <a href='#' style={{fontSize:'13px', float: "right"}}>Update Details</a>
                            </Link><br/> */}
                            {/* <div className='form-row'> */}
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
                            {/* </div> */}
                        {/* </div> */}
                        {/* <div style={{ float: "right", marginTop: '40px', marginBottom: '20px' }}>
                                <a href='' className='btn btn-primary ml-4'>Go to Previous Orders</a>
                            <a href='./' className='btn btn-warning ml-2'>Go to Shopping</a>
                        </div> */}
                    {/* </article>  */}
                {/* ))} */}

            {/* </div> */}

        </div>
    )
}