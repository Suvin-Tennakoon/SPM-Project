import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

export default function PaymentDet() {
  const [payments, setPaymentDetails] = useState([]);
  const [paymentdet, setPaymentDet] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(
        "https://cake-hut-app-backend.azurewebsites.net/api/orders/getDataForPayment/" +
          id
      )
      .then((res) => {
        setPaymentDet(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submitCouponCode = () => {
    window.location = "/paymentinv/" + id + "/" + couponCode;
  };

  return (
    <div style={{ marginTop: "120px", paddingLeft: "500px" }}>
      <Card
        variant="outlined"
        sx={{ maxWidth: 500, backgroundColor: "#343a40" }}
      >
        <CardMedia
          component="img"
          height="170"
          image={paymentdet?.cakeImage}
          alt="Your Cake Design"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ color: "white" }}
          >
            Review Order
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Typography variant="body1" gutterBottom style={{ color: "white" }}>
              Order No. :{" "}
            </Typography>
            <p style={{ color: "#AEB6BF" }}>#{paymentdet?._id}</p>

            <Typography variant="body1" gutterBottom style={{ color: "white" }}>
              Cake Type :{" "}
            </Typography>
            <p style={{ color: "#AEB6BF" }}>{paymentdet?.cakeType}</p>

            <Typography variant="body1" gutterBottom style={{ color: "white" }}>
              Amount :{" "}
            </Typography>
            <p style={{ color: "#AEB6BF" }}>{paymentdet?.amount}LKR</p>

            <Typography variant="body1" gutterBottom style={{ color: "white" }}>
              Coupon Code :<br></br>
              <TextField
                label=""
                id="outlined-size-small"
                size="small"
                onChange={(e) => setCouponCode(e.target.value)}
              />
            </Typography>
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small"> */}
            {/* <a
              href="#"
              className="btn btn-primary ml-1"
              style={{ backgroundColor: "#fe0035" }}
            >
              Clear
            </a> */}
          {/* </Button> */}
          <Button size="small">
            <a
              className="btn btn-primary"
              style={{ backgroundColor: "#fe0035", color:"white", marginTop:"-20px" }}
              onClick={submitCouponCode}
            >
              Proceed
            </a>
          </Button>
        </CardActions>
      </Card>

      {/* <div
        className="container text-dark"
        style={{ padding: "20px", width: "50%" }}
      >
        <article
          class="card"
          style={{
            flex: "0 1 24%",
            marginBottom: "20px",
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
                  <span>Order No. : #{paymentdet?._id}</span>
                  <br />
                  <br />
                  <span>Cake Type : {paymentdet?.cakeType}</span>
                  <br />
                  <br />
                  <span>Amount: {paymentdet?.amount}LKR</span>
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
            <a
              href="#"
              className="btn btn-primary ml-4"
              style={{ backgroundColor: "#fe0035" }}
            >
              Clear
            </a>
            <a
              href={"/PaymentInv/" + id}
              className="btn btn-warning ml-2"
              style={{ backgroundColor: "#fe0035" }}
            >
              Proceed
            </a>
          </div>
        </article>
      </div> */}
    </div>
  );
}
