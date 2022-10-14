import React, { Component, useState } from "react";
import axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";
import generatePDFalldesign from "../Report/Reportgenerator";
import { withRouter } from "react-router";
import "./Vieworder.css";

class Vieworders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vieworders: {},
    };
  }

  componentDidMount() {
    const id = window.location.href.split("/")[3];
    axios
      .get("http://localhost:3001/api/orders/getOrderData/" + id)
      .then((res) => {
        this.setState({ vieworders: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
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
              <th scope="row">{this.state.vieworders.cakeType}</th>
              {/* <td>{data.customer}</td>
              <td>{data.flavour}</td>
              <td>{data.size}</td>
              <td>{data.quantity}</td> */}
            </tr>
          </tbody>
        </table>
        <button
          type="button"
          className="btn btn-primary"
          style={{ backgroundColor: "#000000", marginLeft: "1120px" }}
          onClick={() => {
            generatePDFalldesign(this.state.vieworders);
          }}
        >
          Generate Report
        </button>
      </div>
    );
  }
}

export default Vieworders;
