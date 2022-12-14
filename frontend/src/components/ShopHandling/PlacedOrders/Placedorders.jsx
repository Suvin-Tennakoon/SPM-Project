import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const url = "/vieworders/";
class Acceptedorders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Acceptorders: [],
    };
  }

  componentDidMount() {
    const name = localStorage.getItem("FirstName")
    console.log(name)
    axios
      .get(
        "https://cake-hut-app-backend.azurewebsites.net/api/orders/getAcceptedOrders/" +
          name
      )
      .then((res) => {
        this.setState({ Acceptorders: res.data });
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
          <center><h4>Accepted Orders</h4></center><br/>
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
                <b>    </b>
              </th>
            </tr>
          </thead>
          {this.state.Acceptorders.map((data, index) => {
            return(
            <tbody>
              <tr>
                <th scope="row">{data.cakeType}</th>
                <td>{data.customer}</td>
                <td>{data.flavour}</td>
                <td>{data.size}</td>
                <td>{data.quantity}</td>
                <td key={index}>
                  <Link to={url + data._id}>
                    <button
                      type="submit"
                      class="btn btn-danger"
                    >
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
            )
          })}
        </table>
      </div>
    );
  }
}
export default Acceptedorders;
