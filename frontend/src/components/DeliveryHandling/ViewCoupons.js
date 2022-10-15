import axios from "axios";
import React, { Component } from "react";

class ViewCoupons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      couponDetails: [],
    };
  }

  componentDidMount() {
    this.retrieveCouponDetails();
  }

  retrieveCouponDetails() {
    axios.get("https://cake-hut-app-backend.azurewebsites.net/api/payments/get/coupon").then((res) => {
      if (res.data != null) {
        this.setState({ couponDetails: res.data });
      }
    });
  }

  onDelete = (id) => {
    axios
      .delete(`https://cake-hut-app-backend.azurewebsites.net/api/payments/delete/coupon/${id}`)
      .then((res) => {
        alert("Delete Successfully");
        this.retrieveCouponDetails();
      });
  };

  filterData(couponDetails, searchKey) {
    const result = couponDetails.filter(
      (couponDetails) =>
        couponDetails.couponCode.toLowerCase().includes(searchKey) ||
        couponDetails.discount.toLowerCase().includes(searchKey) ||
        couponDetails.expireDate.toLowerCase().includes(searchKey)
    );

    this.setState({ couponDetails: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios
      .get(
        "https://cake-hut-app-backend.azurewebsites.net/api/payments/get/coupon"
      )
      .then((res) => {
        if (res.data) {
          this.filterData(res.data, searchKey);
        }
      });
  };

  render() {
    return (
      <div className="container" style={{ marginTop: "150px" }}>
        <h2>Coupon Details</h2>

        <div class="Search-bar">
          <form class="Search-form col-md-3">
            <input
              class="form-control"
              type="search"
              placeholder="Search"
              name="searchQuery"
              aria-label="Search"
              onChange={this.handleSearchArea}
            />
          </form>
          <a
            className="btn btn-outline-primary btn-sm"
            style={{ marginLeft: "945px" }}
            href="/AddCouponCode"
          >
            New Coupon
          </a>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Coupon ID</th>
              <th scope="col">Coupon Code</th>
              <th scope="col">Discount(%)</th>
              <th scope="col">Expire Date</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.couponDetails.map((coupondet, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{coupondet._id}</td>
                <td>{coupondet.couponCode}</td>
                <td>{coupondet.discount}</td>
                <td>{coupondet.expireDate}</td>

               <td>
                  {/* <a className="btn btn-warning" href={``}>
                    <i className="fas fa-edit"></i>&nbsp; Edit
                  </a> */}
                  &nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.onDelete(coupondet._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ViewCoupons;
