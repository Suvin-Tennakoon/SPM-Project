import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom"
import Swal from 'sweetalert2';

export default function UserProfile() {

    let userEmail = localStorage.getItem('Email');

    const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/api/customers?email=${userEmail}`)
            .then((res) => {
                console.log(res.data);
                setUserDetails(res.data);
            })
    }, [])

    return (
        <div style={{ marginTop: "120px", marginBottom: "120px"  }}>
            <div className='container text-dark' style={{ backgroundColor: '#d9d9d9', padding: '20px', width: '50%', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}>
                {userDetails.map((val, index) => (
                    <article class="card" style={{ flex: '0 1 24%', marginBottom: '20px', backgroundColor: '#d9d9d9' }}>
                        <div className='card-header'>
                            <h3>Hello <b>{val.lastName}</b></h3>
                            <h5 style={{ float: "right" }}>ID: <b>{val.userId}</b></h5>
                        </div>
                        <div className='card-body'>
                        <Link to={{ pathname: `/UpdateProf/${val._id}` }}>
                                <a href='#' style={{fontSize:'13px', float: "right"}}>Update Details</a>
                            </Link><br/>
                            <div className='form-row'>
                                <div className='form-group col-md-6'>
                                    <label class="text-dark">First Name</label><br />
                                    <input type='text' className='form-control' disabled value={val.firstName} />
                                </div>
                                <div className='form-group col-md-6'>
                                    <label class="text-dark">Middle name</label><br />
                                    <input type='text' className='form-control' disabled value={val.middleName} />
                                </div>
                                <div className='form-group col-md-4'>
                                    <label class="text-dark">Date of Birth</label><br />
                                    <input type='text' className='form-control' disabled value={val.dateOfBirth} />
                                </div>
                                <div className='form-group col-md-8'>
                                    <label class="text-dark">Email</label><br />
                                    <input type='text' className='form-control' disabled value={val.email} />
                                </div>
                                <div className='form-group col-md-4'>
                                    <label class="text-dark">Account Type</label><br />
                                    <input type='text' className='form-control' disabled value={val.accountType} />
                                </div>
                                <div className='form-group col-md-4'>
                                    <label class="text-dark">Contact</label><br />
                                    <input type='text' className='form-control' disabled value={val.mobile} />
                                </div>
                                {/* <div className='form-group col-md-4'>
                                    <label class="text-dark">Status</label><br />
                                    <input type='text' className='form-control' disabled value={val.status} />
                                </div> */}
                            </div>
                        </div>
                        <div style={{ float: "right", marginTop: '40px', marginBottom: '20px' }}>
                                <a href={`/prevorders`} className='btn btn-primary ml-4'>Go to Previous Orders</a>
                            <a href='#' className='btn btn-warning ml-2'>Go to Shopping</a>
                        </div>
                    </article>
                ))}

            </div>

        </div>
    )
}