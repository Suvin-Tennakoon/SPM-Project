import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

const Record = (props) => (
  <tr>
    <td>{props.couponcodes.name}</td>
    <td>{props.couponcodes.position}</td>
    <td>{props.couponcodes.level}</td>
    <td></td>
  </tr>
);

export default function RecordList() {
  const [couponcodes, setRecords] = useState([]);

  // This method fetches the payments from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(
        `https://cake-hut-app-backend.azurewebsites.net/api/payments/get/coupon`
      );

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const couponcodes = await response.json();
      setRecords(couponcodes);
      console.log(couponcodes);
    }

    getRecords();

    return;
  }, [couponcodes.length]);

  // This method will delete a payments
  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });

    const newRecords = couponcodes.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the payments on the table
  function recordList() {
    return couponcodes.map((couponcodes) => {
      return (
        <div>
          <h4 style={{ marginTop: "130px", textAlign: "center" }}>
            All Coupon Details
          </h4>
          <div className="container text-dark" style={{ marginTop: "-60px" }}>
            <br />
            <br />
            <h4>All Coupon Details</h4>
            <Record
              couponcodes={couponcodes}
              deleteRecord={() => deleteRecord(couponcodes._id)}
              key={couponcodes._id}
            />
            <h4>All Coupon Details</h4>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Coupon ID</th>
                  <th>Coupon Code</th>
                  <th>Expiry Date</th>
                  <th>Discount</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{couponcodes.couponId}</td>
                  <td>{couponcodes.couponCode}</td>
                  <td>{couponcodes.discount}</td>
                  <td>{couponcodes.expireDate}</td>
                  <td>{couponcodes.status}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      );
    });
  }

  // This following section will display the table with the payments of individuals.
  return (
    <div>
      <h3></h3>
      {recordList()}
    </div>
  );
}
