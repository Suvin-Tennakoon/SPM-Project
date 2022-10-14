import React from 'react'

export default function Home() {
  return (
    <div style={{ marginTop: "120px" }}>
      <center>
        <a className='btn btn-warning btn-lg' href='/allcus'>See all users</a>
        &nbsp;
        <a className='btn btn-primary btn-lg' href='/allrev'>See all reviews</a>
      </center>
    </div>
  )
}
