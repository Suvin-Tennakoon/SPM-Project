import React from 'react'

export default function PrevOrders() {
  return (
    <div className='container' style={{ marginTop: "120px" }}>
      <section class="cards" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '30px' }}>
          <article class="card" style={{ flex: '0 1 24%', borderWidth: '2px', marginBottom: '20px' }}>
            <img alt='No Image Added...' style={{ width: '100%', height: 'auto' }} />
            <h4>Order Sample</h4>
            <p>This is a sample for an order. to be developed...</p>
            <a className='btn btn-primary' href='/givereview'>Give a Review</a>
          </article>
      </section>
    </div>
  )
}
