import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import cake1 from './imgs/cake1.jpg'
export default function PaymentDet() {
  // let userEmail = localStorage.getItem('Email');

  // const navigate = useNavigate();

  const [payments, setPaymentDetails] = useState([]);

  // ${paymentDetails?.result?._id}

  // useEffect(() => {
  //     axios.get(`http://localhost:3001/api/payments/:631a0206ca6b777df9c655dc`)
  //         .then((res) => {
  //             if (res.data.success) {
  //                 this.setState({
  //                   posts: res.data.existingPosts
  //                 });
  //                 console.log(this.state.posts)
  //               }
  //             console.log(res.data);
  //             setPaymentDetails(res.data);
  //         })
  // }, [])

  // useEffect(() => {
  //     fetch("http://localhost:3001/api/payments/get")
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((responseData) => {
  //         setPaymentDetails(responseData);
  //       });
  //     console.log(payments);
  //   }, []);

  //   const paymentComponent = () => {
  //     return payments.map((payments) => {
  //       return (

  //         <div><payments id={payments.id} orderNo={payments.orderNo} paymentId={payments.paymentId} amount={payments.amount} /></div>

  //       );
  //     });
  //   };

//   const slideImages = [
//       {
//           imgPath:
//           "./imgs/cake1.jpg",
//         // caption: 'Slide 1'
//       },
//       {
//         url: {cake1},
//         // caption: 'Slide 2'
//       },
//       {
//         url: 'https://www.allrecipes.com/recipe/8095/black-forest-cake-i/',
//         // caption: 'Slide 3'
//       },
//     ];

//     const Slideshow = () => {
//       return (
//     <div className="slide-container">
//       <Slide>
//        {slideImages.map((slideImage, index)=> (
//           <div className="each-slide" key={index}>
//             <div style={{'backgroundImage': `url(${slideImage.url})`}}>
//               <span>{slideImage.caption}</span>
//             </div>
//           </div>
//         ))}
//       </Slide>
//     </div>
//       )
//   }

  return (
    <div style={{ marginTop: "120px" }}>
      
      <div
        className="container text-dark"
        style={{ backgroundColor: "#d9d9d9", padding: "20px", width: "50%" }}
      >
        {/* <div >
        <img 
      src="https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?cs=srgb&dl=pexels-dmitry-zvolskiy-1721934.jpg&fm=jpg"
      alt="new" style={{ height: "500px", paddingLeft:"600px", marginTop:"10px"}}
      />
          </div> */}
        {/* {paymentDetails.map((val, index) => ( */}
        
        <article
          class="card"
          style={{
            flex: "0 1 24%",
            marginBottom: "20px",
            backgroundColor: "#d9d9d9"
          }}
        >
          
          <div className="card-header">
            <h3>
              Payment Details <b></b>
            </h3>
            {/* <h5 style={{ float: "right" }}>ID: <b></b></h5> */}
          </div>
          
          <div className="card-body">
            
            {/* {paymentComponent()} */}
            {/* <Link to={{ pathname: "" }}>
                                <a href='#' style={{fontSize:'13px', float: "right"}}>Update Details</a>
                            </Link><br/> */}
            <div className="form-row">
              {/* <div className='form-group col-md-6'>
                                    <label class="text-dark">Order No.</label><br />
                                    <input type='text' className='form-control'></input>
                                </div> */}

              {/* <div className='form-group col-md-4'>
                                    <label class="text-dark">Amount</label><br />
                                    <input type='text' className='form-control'  />
                                </div>
                                <div className='form-group col-md-8'>
                                    <label class="text-dark">Coupon Code</label><br />
                                    <input type='text' className='form-control'  />
                                </div> */}
              <div>
                <div>
                  
                  <span>Order No. : ref323423</span>
                  <br />
                  <br />

                  <span>Order Type : Delivery</span>
                  <br />
                  <br />
                  <span>Date | Time : 02/07/2022 | 14:54</span>
                  <br />
                  <br />
                  <span>Amount: 2500.00 lkr</span>
                  <br />
                  <br />
                  <span>Coupon Code:</span>
                  <br />
                  <br />
                  <span>
                    <div className="form-group col-md-6">
                      <input type="text" className="form-control" />
                    </div>
                  </span>
                </div>
                {/* <h6>Order No. : ref323423</h6>
              </div>
              <div>
                <h6>Order Type | Date Time</h6>
              </div>
              <div>
                <h6>Delivery | 02/07/2022 14:54</h6>
              </div>
              <div>
                <h6>Amount: 2500.00 lkr</h6>
              </div>
              <div>
                <h6>Coupon Code:</h6> */}
              </div>

              

              {/* <div className='form-group col-md-4'>
                                    <label class="text-dark">Status</label><br />
                                    <input type='text' className='form-control' disabled value={val.status} />
                                </div> */}
            </div>
          </div>
          <div
            style={{ float: "right", marginTop: "40px", marginBottom: "10px" }}
          >
            <a href="#" className="btn btn-primary ml-4" style={{ backgroundColor: "#fe0035" }}>
              Clear Coupon Code
            </a>
            <a href="/PaymentInv" className="btn btn-warning ml-2" style={{ backgroundColor: "#fe0035" }}>
              Save & Proceed
            </a>
          </div>
        </article>
        {/* ))} */}
      </div>
      {/* <div className="slide-container">
            <Slide>
             {slideImages.map((slideImage, index)=> (
                <div className="each-slide" key={index}>
                  <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                    <span>{slideImage.caption}</span>
                  </div>
                </div>
              ))} 
            </Slide>
          </div> */}
    </div>
  );
}

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Record = (props) => (
//  <tr>
//    <td>{props.payments.name}</td>
//    <td>{props.payments.position}</td>
//    <td>{props.payments.level}</td>
//    <td>
//      <Link className="btn btn-link" to={`/edit/${props.payments._id}`}>Edit</Link> |
//      <button className="btn btn-link"
//        onClick={() => {
//          props.deleteRecord(props.payments._id);
//        }}
//      >
//        Delete
//      </button>
//    </td>
//  </tr>
// );

// export default function RecordList() {
//  const [payments, setRecords] = useState([]);

//  // This method fetches the payments from the database.
//  useEffect(() => {
//    async function getRecords() {
//      const response = await fetch(`http://localhost:3001/api/payments/get`);

//      if (!response.ok) {
//        const message = `An error occurred: ${response.statusText}`;
//        window.alert(message);
//        return;
//      }

//      const payments = await response.json();
//      setRecords(payments);
//      console.log(payments)
//    }

//    getRecords();

//    return;
//  }, [payments.length]);

//  // This method will delete a payments
//  async function deleteRecord(id) {
//    await fetch(`http://localhost:5000/${id}`, {
//      method: "DELETE"
//    });

//    const newRecords = payments.filter((el) => el._id !== id);
//    setRecords(newRecords);
//  }

//  // This method will map out the payments on the table
//  function recordList() {
//    return payments.map((payments) => {
//      return (
//         <div>
//        <Record
//          payments={payments}
//          deleteRecord={() => deleteRecord(payments._id)}
//          key={payments._id}

//        />
//        <h6>
//             {payments._id}
//             <br></br>
//             {payments.userId}
//             <br></br>
//             {payments.orderNo}
//        </h6>

// </div>
//      );
//    });
//  }

//  // This following section will display the table with the payments of individuals.
//  return (
//    <div>
//      <h3>Record List</h3>
//      {recordList()}

//    </div>
//  );
// }
