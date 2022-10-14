import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom"

export default function PrevOrders() {

  let fname = localStorage.getItem('FirstName');
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/orders/getCakeforCustomer/${fname}`)
      .then((res) => {
        console.log(res.data);
        setOrderDetails(res.data);
      })
  }, [])


  return (
    <div className='container' style={{ marginTop: "120px" }}>
      <div>
        <h3 class="text-light mb-4">Your Previous Orders</h3>
      </div>
      <section class="cards" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '30px' }}>
        {orderDetails.map((val, index) => (
          <article class="card" style={{ flex: '0 1 24%', marginBottom: '20px', backgroundColor: '#595959', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px', padding: '5px' }}>
            <h4>{val.cakeType}</h4>
            <img src={val.cakeImage} />
            <a className='btn btn-primary' href={`/givereview/${val._id}`}>Add Review</a>
          </article>
        ))}
      </section>
    </div>
  )
}
