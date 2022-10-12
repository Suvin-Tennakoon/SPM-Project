import React, { useState, useEffect } from "react";
import 'react-slideshow-image/dist/styles.css';
export default function PaymentDet() {

  const [payments, setPaymentDetails] = useState([]);

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
            backgroundColor: "#d9d9d9"
          }}
        >
          
          <div className="card-header">
            <h3>
              Payment Details <b></b>
            </h3>
          </div>
          
          <div className="card-body">
            <div className="form-row">
              
              <div>
                <div>
                  
                  <span>Order No. : ref323423</span>
                  <br />
                  <br />

                  <span>Order Type : Delivery</span>
                  <br />
                  <br />
                  <span>Date | Time : 02/07/2022 | 14:54</span>
                  <br />
                  <br />
                  <span>Amount: 2500.00 lkr</span>
                  <br />
                  <br />
                  <span>Coupon Code:</span>
                  <br />
                  <br />
                  <span>
                    <div className="form-group col-md-6">
                      <input type="text" className="form-control" />
                    </div>
                  </span>
                </div>
                
              </div>

              

              
            </div>
          </div>
          <div
            style={{ float: "right", marginTop: "40px", marginBottom: "10px" }}
          >
            <a href="#" className="btn btn-primary ml-4" style={{ backgroundColor: "#fe0035" }}>
              Clear Coupon Code
            </a>
            <a href="/PaymentInv" className="btn btn-warning ml-2" style={{ backgroundColor: "#fe0035" }}>
              Save & Proceed
            </a>
          </div>
        </article>
      </div>
      
    </div>
  );
}
