import React from 'react'
import sample from '../../../sample.jpg'

export default function GiveReview() {
    return (
        <div className='container' style={{ marginTop: "120px" }}>
            <section style={{ backgroundColor: '#595959', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px', padding:'10px'}}>
                <h2>Mini Nutella Choco Drip Messy Cake</h2>
                <hr/>
                <center><img src={sample} style={{height:'300px'}}/></center>
                <p>
                    <h4>Product Description</h4>
                    This Lindtberry Chocolate Celebration Cake has everything in it. The cake is layered with soft chocolate cake with chocolate buttercream and topped with chocolate ganache, then fill with all the treats we love! Lindt Chocolates , Strawberries, Oreos, KitKat, praline chocolates, Handmade chocolate bottle, and star butter cookies. No further wait to taste this fascinating combination.
                </p><hr/>
                <h4>Ordered Date</h4>
                <p>12/08/2022</p><hr/>
                <h4>Receied Date</h4>
                <p>14/08/2022</p><hr/>
                <h4>Price</h4>
                <p>Rs.3190/=</p>
            </section>

            {/* review section here */}
            <form>
                <div style={{ marginTop: '30px' }}>
                    <label>Give Your Review</label><br />
                    <textarea style={{ width: '50%', backgroundColor: 'white', color:'Black' }} className='form-control' rows='5'></textarea>
                </div>

                <button type='submit' style={{ marginBottom: '10px', marginTop: '20px' }} className='btn btn-primary'>Submit Review</button>
            </form>
        </div>
    )
}
