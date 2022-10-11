import React from 'react'
import sample from '../../sample.jpg'
import sample2 from '../../sample2.jpg'
import sample3 from '../../sample3.jpg'
import sample4 from '../../sample4.jpg'
import sample5 from '../../sample5.jpg'

export default function PrevOrders() {
  return (
    <div className='container' style={{ marginTop: "120px" }}>
      <div>
        <h3 class="text-light mb-4">Your Previous Orders</h3>
      </div>
      <section class="cards" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '30px' }}>
        <article class="card" style={{ flex: '0 1 24%', marginBottom: '20px', backgroundColor: '#595959', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px', padding: '5px' }}>
          <h4>Mini Nutella Choco Drip Messy Cake</h4>
          <img src={sample} />
          <a className='btn btn-primary' href="/givereview">Add Review</a>
        </article>
        <article class="card" style={{ flex: '0 1 24%', marginBottom: '20px', backgroundColor: '#595959', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px', padding: '5px' }}>
          <h4>Lindtberry Chocolate Celebration Cake</h4>
          <img src={sample2} />
          <a className='btn btn-primary' href="/givereview">Add Review</a>
        </article>
        <article class="card" style={{ flex: '0 1 24%', marginBottom: '20px', backgroundColor: '#595959', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px', padding: '5px' }}>
          <h4>FRIENDS Theme Chocolate Cake</h4>
          <img src={sample3} />
          <a className='btn btn-primary' href="/givereview">Add Review</a>
        </article>
        <article class="card" style={{ flex: '0 1 24%', marginBottom: '20px', backgroundColor: '#595959', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px', padding: '5px' }}>
          <h4>Sparkling Celebration Mini Chocolate</h4>
          <img src={sample4} />
          <a className='btn btn-primary' href="/givereview">Add Review</a>
        </article>
        <article class="card" style={{ flex: '0 1 24%', marginBottom: '20px', backgroundColor: '#595959', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px', padding: '5px' }}>
          <h4>Classic Sports Car Sweater Chocolate Cake</h4>
          <img src={sample5} />
          <a className='btn btn-primary' href="/givereview">Add Review</a>
        </article>
      </section>
    </div>
  )
}
