import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from "react-router";
import { useNavigate, Link } from "react-router-dom"
import Swal from 'sweetalert2';

export default function GiveReview() {
    
    const navigate = useNavigate();

    const { id } = useParams();
    const [type, setType] = useState("");
    const [customer, setCustomer] = useState("");
    const [date, setDate] = useState("");
    const [image, setImage] = useState("");
    const [flavour, setFlavour] = useState("");
    const [payment, setPayment] = useState("");
    const [seller, setSeller] = useState("");
    const [size, setSize] = useState("");

    const [review, setReview] = useState("");

    const [count, setCount] = React.useState(0);

    useEffect(() => {
        axios.get(`http://localhost:3001/api/orders/getOrderData/${id}`)
            .then((res) => {
                console.log(res.data);
                setType(res.data.cakeType);
                setCustomer(res.data.customer);
                setDate(res.data.deliverDate);
                setImage(res.data.cakeImage);
                setFlavour(res.data.flavour);
                setPayment(res.data.paymentType);
                setSeller(res.data.seller);
                setSize(res.data.size);
            })
    }, [])

    const handlereviewChange = (e) => {

        setCount(e.target.value.length)
        e.preventDefault();
        setReview(e.target.value);
    }

    const saveReview = async (e) => {
        e.preventDefault();

        const dataSet = {
            orderId: id,
            review: review
        }

        let data = await axios.post('http://localhost:3001/api/customers/savereview', {
            orderId: id,
            review: review
        });
        console.log("Saved data ", data)

        if (data.status !== 200) {
            Swal.fire({
                icon: 'error',
                title: ' Insert Failed!',
                text: 'Error While Inserting...',
            })
        }
        else {
            Swal.fire({
                icon: 'success',
                title: 'Review added!',
                text: '',
            })
            navigate('/userprof');

        }
    }

    return (
        <div className='container' style={{ marginTop: "120px" }}>
            <section style={{ backgroundColor: '#595959', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px', padding: '10px' }}>
                <h2>{type}</h2>
                <hr />
                <center><img src={image} /></center>
                <p>
                    <h4>Customer Name</h4>
                    {customer}
                </p><hr />
                <h4>Ordered Date</h4>
                <p>{date}</p><hr />
                <h4>Flavour</h4>
                <p>{flavour}</p><hr />
                <h4>Payment Type</h4>
                <p>{payment}</p><hr />
                <h4>Seller</h4>
                <p>{seller}</p><hr />
                <h4>Cake Size</h4>
                <p>{size}</p><hr />
            </section>
            <form onSubmit={(e) => saveReview(e)}>
                <div style={{ marginTop: '30px' }}>
                    <label>Give Your Review</label><br />
                    <textarea style={{ width: '50%', backgroundColor: 'white', color: 'Black' }} className='form-control' rows='5' maxlength="10" value={review} onChange={(e) => handlereviewChange(e)}required></textarea>
                    <p>[{10-count}/10]</p>
                </div>

                <button type='submit' style={{ marginBottom: '10px', marginTop: '20px' }} className='btn btn-primary'>Submit Review</button>
            </form>
        </div>
    )
}
