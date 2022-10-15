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
  const [finalvalue, setFinalvalue] = useState(0);
  const [discount, setDiscount] = useState(0);
  const { id, code } = useParams();
  const calculatefinalvalue = (paymentdet) => {
    const data = { code };
    axios
      .post(
        "https://cake-hut-app-backend.azurewebsites.net/api/payments/getCouponDiscount",
        data
      )
      .then((res) => {
        let finalvalue =
          paymentdet.amount - paymentdet.amount * (parseInt(res.data) / 100);
        setDiscount(res.data);
        setFinalvalue(finalvalue);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    axios
      .get(
        "https://cake-hut-app-backend.azurewebsites.net/api/orders/getDataForPayment/" +
          id
      )
      .then((res) => {
        setPaymentDet(res.data);
        calculatefinalvalue(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ marginTop: "120px", paddingLeft: "500px" }}>
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
          <CardContent style={{ color: "white" }}>
            <PdfGen paymentdet={paymentdet} />
            <Typography variant="body2" color="text.secondary">
              <span style={{ color: "white" }}>
                Order No. : <br />
                <p style={{ color: "#AEB6BF" }}>#{paymentdet?._id}</p>
              </span>
              <span style={{ color: "white" }}>
                Customer Name : <br />
                <p style={{ color: "#AEB6BF" }}>{paymentdet?.customer}</p>
              </span>
              <span style={{ color: "white" }}>
                Cake Type : <br />
                <p style={{ color: "#AEB6BF" }}>{paymentdet?.cakeType}</p>
              </span>
              <span style={{ color: "white" }}>
                Seller Name : <br />
                <p style={{ color: "#AEB6BF" }}>{paymentdet?.seller}</p>
              </span>
              <span style={{ color: "white" }}>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col" colspan="2" style={{ color: "white" }}>
                        Payment Type
                      </th>
                      <th scope="col" style={{ color: "white" }}>
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="2">{paymentdet?.paymentType}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td style={{ color: "white" }}>Subtotal</td>
                      <td>{paymentdet?.amount} LKR</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td style={{ color: "white" }}>Discount</td>
                      <td>{discount} %</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td style={{ color: "white" }}>Total</td>
                      <td>{finalvalue} LKR</td>
                    </tr>
                  </tbody>
                </table>
                <PayherePage ptype={paymentdet.paymentType} />
              </span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
