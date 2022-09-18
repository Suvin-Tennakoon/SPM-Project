import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

const Record = (props) => (
  <tr>
    <td>{props.payments.name}</td>
    <td>{props.payments.position}</td>
    <td>{props.payments.level}</td>
    <td>
      {/* <Link className="btn btn-link" to={`/edit/${props.payments._id}`}>Edit</Link> | */}
      {/* <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.payments._id);
       }}
     >
       Delete
     </button> */}
    </td>
  </tr>
);

export default function RecordList() {
  const [payments, setRecords] = useState([]);

  // This method fetches the payments from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:3001/api/payments/get`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const payments = await response.json();
      setRecords(payments);
      console.log(payments);
    }

    getRecords();

    return;
  }, [payments.length]);

  // This method will delete a payments
  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });

    const newRecords = payments.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the payments on the table
  function recordList() {
    return payments.map((payments) => {
      return (
        <div>
        <h4 style={{marginTop: "130px", textAlign:"center"}}>All Payment Details</h4>
        <div className="container text-dark" style={{marginTop: "-60px"}}>
          <br/><br/>
          <h4>All Payment Details</h4>
          <Record
            payments={payments}
            deleteRecord={() => deleteRecord(payments._id)}
            key={payments._id}
          />
<h4>All Payment Details</h4>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Payment ID</th>
                <th>Order No</th>
                <th>Order Type</th>
                <th>Date</th>
                <th>Time</th>
                <th>Amount</th>
                <th>Coupon Code</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{payments.userId}</td>
                <td>{payments.paymentId}</td>
                <td>{payments.orderNo}</td>
                <td>{payments.orderType}</td>
                <td>{payments.date}</td>
                <td>{payments.time}</td>
                <td>{payments.amount}</td>
                <td>{payments.couponCode}</td>
              </tr>
            </tbody>
          </Table>
          {/* <h6>
            {payments._id}
            <br></br>
            {payments.userId}
            <br></br>
            {payments.orderNo}
       </h6> */}
        </div></div>
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

// function DarkExample() {
//   return (
//     <Table striped bordered hover variant="dark">
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Username</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td>@mdo</td>
//         </tr>
//         <tr>
//           <td>2</td>
//           <td>Jacob</td>
//           <td>Thornton</td>
//           <td>@fat</td>
//         </tr>
//         <tr>
//           <td>3</td>
//           <td colSpan={2}>Larry the Bird</td>
//           <td>@twitter</td>
//         </tr>
//       </tbody>
//     </Table>
//   );
// }

// export default DarkExample;
