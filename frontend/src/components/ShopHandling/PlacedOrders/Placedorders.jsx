import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

class Acceptedorders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Acceptorders: [""],
    };
  }

  // componentDidMount(){
  //     axios.get('http://localhost:3001/api/shops/all').then((res) => {
  //         this.setState({Acceptedorders: res.data});
  //     }).catch((err)=>{
  //         console.log(err)
  //     })
  // }

  render() {
    return (
      <div>
        <Navbar />
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
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row">Ruffles.</th>
              <td>chamodi</td>
              <td>0765890789</td>
              <td>Gampaha</td>
            </tr>
            <tr>
              <th scope="row">Damask.</th>
              <td>Sankalpani</td>
              <td>0778907556</td>
              <td>Veyangoda</td>
            </tr>
            <tr>
              <th scope="row">Drip Cake</th>
              <td>Mali</td>
              <td>0775678990</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Acceptedorders;
