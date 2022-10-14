import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";
import generatePDFalldesign from "../Report/Reportgenerator";
import { withRouter } from "react-router";
import "./Vieworder.css";

 export default function Vieworders()  {
  const [vieworders, setViewOrders] = useState('');
  const {id}= useParams();
useEffect(()=> {
  axios
  .get("http://localhost:3001/api/orders/getOrderData/" + id)
  .then((res) => {
    setViewOrders(res.data)
  })
  .catch((err) => {
    console.log(err);
  });
},[])

 
  
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">
                <b>Design Name</b>
              </th>
              <th scope="col">
                <b>Customer's Name</b>
              </th>
              <th scope="col">
                <b>Flavour</b>
              </th>
              <th scope="col">
                <b>Size</b>
              </th>
              <th scope="col">
                <b>Quantity</b>
              </th>
              <th scope="col">
                <b> </b>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{vieworders.cakeType}</th>
              <td>{vieworders.customer}</td>
              <td>{vieworders.flavour}</td>
              <td>{vieworders.size}</td>
              <td>{vieworders.quantity}</td>
            </tr>
          </tbody>
        </table>
        <button
          type="button"
          className="btn btn-primary"
          style={{ backgroundColor: "#000000", marginLeft: "1120px" }}
          onClick={() => {
            generatePDFalldesign(vieworders);
          }}
        >
          Generate Report
        </button>
      </div>
    );
  }

 


