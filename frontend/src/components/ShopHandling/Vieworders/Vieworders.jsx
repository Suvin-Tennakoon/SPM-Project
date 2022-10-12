import React, { Component, useState } from "react";
import axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";


class vieworders extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      vieworders: [],
    };
  }

  componentDidMount() {
    const id = this.props.match.params._id;
    axios
      .get("http://localhost:3001/api/orders/getAcceptedOrders/:seller" + id)
      .then((res) => {
        this.setState({ vieworders: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const vr = this.state.vieworders;
    return (
      <div>
        <section class="h-100 bg-dark">
          <form>
            <div class="container py-5 h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col">
                  <div class="card card-registration my-4">
                    <div class="row g-0">
                      <div class="col-xl-6 d-none d-xl-block">
                        {/* <img
                        src="https://cdn11.bigcommerce.com/s-w6rae6i8cu/images/stencil/original/image-manager/strawberry-rose-mobile-2a.jpg?t=1659566675"
                        alt="Sample photo"
                        class="img-fluid"
                        style={{
                          bordetopleftradius: ".15rem",
                          borderbottomleftradius: ".15rem",
                          height: "750px",
                        }}
                      /> */}
                      </div>
                      <div class="col-xl-15" className="form">
                        <div class="card-body p-md-5 text-black">
                          <h3 class="mb-3 text-uppercase">
                            View order Details
                          </h3>

                          <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example97">
                              Customer Name
                            </label>
                            <input
                              type="text"
                              id="form3Example97"
                              class="form-control"
                              value={vr.customer}
                            />
                          </div>

                          <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example97">
                              cakeType
                            </label>
                            <textarea
                              type="text"
                              id="form3Example97"
                              class="form-control"
                              value={vr.cakeType}
                            />
                          </div>

                          <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example97">
                              Size
                            </label>
                            <input
                              type="text"
                              id="form3Example97"
                              class="form-control "
                              value={vr.size}
                            />
                          </div>

                          <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example97">
                              Flavour
                            </label>
                            <input
                              type="text"
                              id="form3Example97"
                              class="form-control "
                              value={vr.Flavour}
                            />
                          </div>

                          <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example97">
                              Sugur
                            </label>
                            <input
                              type="text"
                              id="form3Example97"
                              class="form-control "
                              value={vr.sugur}
                            />
                          </div>

                          <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example97">
                              Quantity
                            </label>
                            <input
                              type="text"
                              id="form3Example97"
                              class="form-control "
                              value={vr.quantity}
                            />
                          </div>

                          <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example97">
                              cakeText
                            </label>
                            <input
                              type="text"
                              id="form3Example97"
                              class="form-control "
                              value={vr.cakeText}
                            />
                          </div>

                          <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example97">
                              accessories
                            </label>
                            <input
                              type="text"
                              id="form3Example97"
                              class="form-control "
                              value={vr.accessories}
                            />
                          </div>

                          <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example97">
                              Ingradients
                            </label>
                            <input
                              type="text"
                              id="form3Example97"
                              class="form-control "
                              value={vr.ingradients}
                            />
                          </div>

                          <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example97">
                              DeliverData
                            </label>
                            <input
                              type="text"
                              id="form3Example97"
                              class="form-control "
                              value={vr.deliverData}
                            />
                          </div>

                          <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example97">
                              Payment Type
                            </label>
                            <input
                              type="text"
                              id="form3Example97"
                              class="form-control "
                              value={vr.paymentType}
                            />
                          </div>

                          <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example97">
                              cake Image
                            </label>
                            <img
                              type="text"
                              id="form3Example97"
                              class="form-control "
                              src={vr.cakeImage}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default vieworders;
