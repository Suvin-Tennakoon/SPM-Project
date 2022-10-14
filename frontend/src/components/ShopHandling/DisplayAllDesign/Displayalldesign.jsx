import React, { Component, useState } from "react";
import "./Displayalldesign.css";
import axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


class DisplayallDesigns extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alldesigns: [],
    };
  }

  

  componentDidMount() {
    
    axios
      .get("http://localhost:3001/api/shops/all")
      .then((res) => {
        //get all info about a supplier
        this.setState({ alldesigns: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    //const data=[this.state.props]

    const sp = this.state.alldesigns;
    console.log(sp);
    return (
      <diV>
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="sawrap1">
            {this.state.alldesigns.map((data, index) => {
              return (
                <div>
                  <div
                    className="card CScard1"
                    style={{
                      width: "18rem",
                      marginLeft: "40px",
                      borderColor: "black",
                    }}
                  >
                    <img
                      className="card-img-top"
                      src={data.designimage}
                      alt=" "
                      height="200px"
                    />
                    <div className="card-body">
                      <h5 className="card-title"></h5>
                      <p className="card-text">
                        <ul className="orderchamodi">
                          <h5>
                            <center>{data.designname}</center>
                          </h5>
                          <center>{"Rs." + data.designprice + ".00"}</center>
                          <p>
                            <center>{data.designdetails}</center>
                          </p>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <Link to="/addesign">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXB4h9X2OXAe6MR0mog9cGznvgHObiqW68sI-IJ53lVIsf7_Nmff5f&usqp=CAU"
              height="30px"
              className="rounded-circle"
             style={{marginLeft:1190}}
            />
          </Link> */}
          <br />
          <br />
        </div>
      </diV>
    );
  }
}

export default DisplayallDesigns;
