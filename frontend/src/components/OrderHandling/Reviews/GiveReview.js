import React from 'react'

export default function GiveReview() {
    return (
        <div className='container' style={{ marginTop: "120px" }}>
            <section style={{ backgroundColor: 'hotpink', height: '100px', boxShadow: '4px 4px black', padding: '10px' }}>
                <h3>Order Details</h3>
            </section>

            {/* review section here */}
            <form>
                <div style={{ marginTop: '30px' }}>
                    <label>Give Your Review</label><br />
                    <textarea style={{ width: '50%', backgroundColor: 'white', color:'Black' }} className='form-control' rows='5'></textarea>
                </div>

                <button type='submit' style={{ marginBottom: '10px', marginTop: '20px' }} className='btn btn-primary'>Login</button>
            </form>
        </div>
    )
}
