import React, { useState, useEffect } from "react";
import PayherePage from "./PayherePage";

export default function PaymentInv() {

  return (
    <div style={{ marginTop: "120px" }}>
      <div
        className="container text-dark"
        style={{ backgroundColor: "#d9d9d9", padding: "20px", width: "30%" }}
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
              Payment Invoice <b></b>
            </h3>
          </div>
          <div className="card-body">
            <div className="form-row">

            <div>


<span>Order No. : ref323423</span><br/>

<span>Issued: 02/07/2022</span><br/><br/>
<span>Delivery Address:</span><br/>
<span>No 12/1, Makubura, Pannipitiya</span><br/><br/>
<span>Description : Vanila Cake</span><br/>
<span>Sub Total : 2500.00 Lkr</span><br/>
<span>Discount : 10%</span><br/>
<span>Total : 2250.00</span><br/>
</div>
            </div>
          </div>
          <div
            style={{ float: "right", marginTop: "10px", marginBottom: "20px" , paddingLeft: "70px"}}
          >
            <div style={{ float: "center"}}>
            <a href="" className="btn btn-primary ml-4" style={{ backgroundColor: "#fe0035" }}>
              Export as PDF
            </a> 
            <br></br>
            <br></br>
            
            <PayherePage />
            </div>
            {/* <a href="/CardPay" className="btn btn-warning ml-2" style={{ backgroundColor: "#fe0035" }}>
              Proceed
            </a> */}
          </div>
          
          
        </article>
        
      </div>
    </div>
  );
}
