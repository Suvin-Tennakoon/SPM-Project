import React, { useState, useEffect } from "react";

export default function CardPay() {
  return (
    <div style={{ marginTop: "120px" }}>
      <h3 style={{ marginTop: "130px", textAlign: "center" }}>
        Pay Here<b></b>
      </h3>
      <br />
      <div>
        <img
          src="https://images.newindianexpress.com/uploads/user/imagelibrary/2021/7/19/w900X450/Razorpay.jpg?w=640&dpr=1.0"
          alt="new"
          style={{ width: "300px", marginLeft: "530px" }}
          a
          href="https://www.paypal.com/us/webapps/mpp/account-selection"
        />
        <br />
        <br />
        <img
          src="https://cdn.icon-icons.com/icons2/2699/PNG/512/paypal_logo_icon_170865.png"
          alt="new"
          style={{ width: "300px", marginLeft: "530px" }}
        />
      </div>
    </div>
  );
}
