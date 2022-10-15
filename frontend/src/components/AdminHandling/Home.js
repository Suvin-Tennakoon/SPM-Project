import React from 'react'

export default function Home() {
  return (
    <div style={{ marginTop: "200px"}}>
      <center>
        <a className='btn btn-primary btn-lg col-md-9' href='/viewcoupons' style={{}}>View Coupons</a>
        &nbsp;
        <br></br><a className='btn btn-warning btn-lg col-md-9' href='/allrev'>View Reviews</a>
      </center>
    </div>
  )
}
