import React, { Component, useState } from "react";
import "./DisplayDesign.css";
import axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const url = "/update/";

class DisplayDesigns extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      designs: [],
    };

    this.deletedesign = this.deletedesign.bind(this);
  }

  deletedesign(id) {
    const result = window.confirm("Confirm to delete this design");
    if (result == true) {
      axios
        .delete("http://localhost:3001/api/shops/delete/" + id)
        .then(() => {
          alert("Cake design is deleted successfully");
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/shops/all")
      .then((res) => {
        //get all info about a supplier
        this.setState({ designs: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    //const data=[this.state.props]
    const sp = this.state.designs;
    console.log(sp);

    return (
      <diV>
        <div>
          <Navbar />
          <br />
          <br />
          <br />
          <br />
<br/>
          <div className="sawrap">
            {this.state.designs.map((data, index) => {
              return (
                <div>
                  <div
                    className="card CScard"
                    style={{
                      width: "18rem",
                      marginLeft: "40px",
                      borderColor: "black",
                    }}
                  >
                    <img
                      className="card-img-top"
                      src="data:image/jpeg;base64,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"
                      alt="Card image cap"
                      height="200px"
                    />
                    <div className="card-body">
                      <h5 className="card-title"></h5>
                      <p className="card-text">
                        <ul className="order">
                          <h5>
                            <center>{data.designname}</center>
                          </h5>
                          <center>{"Rs." + data.designprice + ".00"}</center>
                          <p>
                            <center>{data.designdetails}</center>
                          </p>
                        </ul>
                      </p>
                      <div key={index}>
                        <button
                          type="button"
                          className="btn btn-primary"
                          style={{ marginLeft: 10 }}
                          onClick={(e) => {
                            this.deletedesign(data._id);
                          }}
                        >
                          Delete
                        </button>
                        <Link to={url + data._id}>
                          <button
                            type="button"
                            className="btn btn-primary"
                            style={{ marginLeft: 40 }}
                          >
                            Update
                          </button>
                        </Link>
                      </div>
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

export default DisplayDesigns;
