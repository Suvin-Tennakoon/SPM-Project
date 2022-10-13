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
      .get("http://localhost:3001/api/orders/getAcceptedOrders/"+name)
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
                <b>Phone Number</b>
              </th>
              <th scope="col">
                <b>Address</b>
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
                <td>{data.deliverData.pnumber}</td>
                <td>{data.deliverData.address}</td>
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
