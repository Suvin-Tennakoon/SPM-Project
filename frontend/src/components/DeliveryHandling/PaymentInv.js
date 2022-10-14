import React, { useState, useEffect } from "react";
import PayherePage from "./PayherePage";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PdfGen from "./pdf";

export default function PaymentInv(props) {
  const [paymentdet, setPaymentDet] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/orders/getDataForPayment/" + id)
      .then((res) => {
        setPaymentDet(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ marginTop: "120px", paddingLeft: "430px" }}>
      <Card
        variant="outlined"
        sx={{ maxWidth: 500, backgroundColor: "#343a40" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="170"
            image={paymentdet?.cakeImage}
            alt="Your Cake"
          />
          <CardContent style={{}}>
            <PdfGen paymentdet={paymentdet}/>
            <Typography variant="body2" color="text.secondary">
              <span>
                Order No. : <br />#{paymentdet?._id}
              </span>
              <br />
              <br />
              <span>
                Customer Name : <br />
                {paymentdet?.customer}
              </span>

              <br />
              <br />
              <span>
                Cake Type : <br />
                {paymentdet?.cakeType}
              </span>

              <br />
              <br />
              <span>
                Seller Name : <br />
                {paymentdet?.seller}
              </span>
              <br />
              <br />
              <span>
                Payment Type : <br />
                {paymentdet?.paymentType}
              </span>
              <br />
              <br />
              <span>
                Amount : <br />
                {paymentdet?.amount}LKR
              </span>
              <br />
              <br />
              <span>
                Discount : <br />
                10%
              </span>
              <br />
              <br />
              <span>
                Total : <br />
                2250.00
                <PayherePage ptype={paymentdet.paymentType} />
              </span>

              
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* <div
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
                <span>Order No. : #{paymentdet?._id}</span>
                <br />

                <span>Cake Type : {paymentdet?.cakeType}</span>
                <br />
                <br />
                <span>Seller Name : {paymentdet?.seller}</span>
                <br />
                <span>Customer Name : {paymentdet?.customer}</span>
                <br />
                <br />
                <span>Payment Type : {paymentdet?.paymentType}</span>
                <br />
                <span>Amount : {paymentdet?.amount}LKR</span>
                <br />
                <span>Discount : 10%</span>
                <br />
                <span>Total : 2250.00</span>
                <br />
              </div>
            </div>
          </div>
          <div
            style={{
              float: "right",
              marginTop: "10px",
              marginBottom: "20px",
              paddingLeft: "70px",
            }}
          >
            <div style={{ float: "center" }}>
              <a
                href=""
                className="btn btn-primary ml-4"
                style={{ backgroundColor: "#fe0035" }}
              >
                Export as PDF
              </a>
              <br></br>
              <br></br>

              <PayherePage ptype={paymentdet.paymentType} />
            </div> */}
      {/* <a href="/CardPay" className="btn btn-warning ml-2" style={{ backgroundColor: "#fe0035" }}>
              Proceed
            </a> */}
      {/* </div> */}
      {/* </article> */}
      {/*</div>*/}
    </div>
  );
}
