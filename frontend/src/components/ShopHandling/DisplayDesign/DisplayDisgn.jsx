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
          // alert("Cake design is deleted successfully");
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
    
  const sp = this.state.designs
  console.log(sp)
    return (
      <diV>
        <div>
          <Navbar />
          <br />
          <br />
          <br />
          <br />
          <br />
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
                      <div key={index} className="buttonchamo">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                          style={{ marginLeft: 20 }}
                          onClick={(e) => {
                            this.deletedesign(data._id);
                          }}
                        >
                          Delete
                        </button>
                        <Link to={url + data._id}>
                          <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            style={{ marginLeft: 80 }}
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
