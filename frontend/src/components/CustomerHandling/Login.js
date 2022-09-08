import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';
import Swal from 'sweetalert2';

export default function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }


    const onSubmit = async (e) => {

        //setIsLoading(true);
        e.preventDefault();

        console.log("Inserted Data: ", formData)
        let data = await axios
            .post('http://localhost:3001/api/customers/login', formData)
        console.log("data", data?.data)

        if (formData.email) {
            if (formData.password) {
                try {
                    localStorage.setItem("Token", data?.data?.token);
                    localStorage.setItem("AccountType", data?.data?.user?.accountType);
                    localStorage.setItem("Email", data?.data?.user?.email);
                    localStorage.setItem("Status", data?.data?.user?.status);
                    localStorage.setItem("Id", data?.data?.user?._id);

                    //alert('Login Success...');
                    if (data?.data?.user?.status == false) {
                        navigate(`/updatepword/${data?.data?.user?._id}`);
                        setIsLoading(false);
                    }
                    else if (data?.data?.user?.accountType === "Shop Owner") {
                        navigate(`/userprof`);
                        setIsLoading(false);
                    }
                    else if (data?.data?.user?.accountType === "Customer") {
                        navigate(`/userprof`);
                        setIsLoading(false);
                    }
                    else {
                        navigate('/userprof');
                        setIsLoading(false);
                    }
                }
                catch (err) {
                    //setIsLoading(false);
                    console.log(err);
                    alert("response.data", err);
                    // Swal.fire({
                    //     icon: 'error',
                    //     title: 'Login Failed!',
                    //     text: 'Oops... Error While Logging!!!',
                    // })
                }
            }
            
            else {
                // setIsLoading(false);
                // alert("Invalid Password!!!")
                // // Swal.fire({
                // //     icon: 'error',
                // //     title: 'Login Failed!',
                // //     text: 'Oops... Invalid Password!!!',
                // // })
            }
        }
        else {
            // setIsLoading(false);
            // //alert("Invalid Email Address!!!")
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Login Failed!',
            //     text: 'Oops... Invalid Email Address!!!',
            // })
        }
    };

    const renderUser = (
        <div style={{ marginTop: '30px', marginLeft: '35%' }}>

        </div>
    );

    return (
        <div style={{ marginTop: "120px" }}>

            {isLoading ? <LoadingSpinner /> : renderUser}
            <div className='container' style={{ marginTop: '30px', backgroundColor: "#d9d9d9", padding: '10px 10px 10px 10px', width:'40%', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}>
                <div>
                    <h3 class="text-dark mb-4">Login</h3>
                </div>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className='form-group'>
                        <label class="text-dark">Email</label><br />
                        <input type='email' name='email' value={email} onChange={(e) => onChange(e)} className='form-control' style={{ marginBottom: '20px' }} required='true' />
                    </div>

                    <div className='form-group'>
                        <label class="text-dark">Password</label><br />
                        <input type='password' name='password' value={password} onChange={(e) => onChange(e)} className='form-control' style={{ marginBottom: '20px' }} required='true' />
                    </div>

                    <button type='submit' style={{ marginBottom: '10px' }} className='btn btn-success' disabled={isLoading}>Login</button>
                </form>
                <div class="text-dark">
                    Don't you have an account? <a href='/signup'>Register here</a>
                </div>

            </div>
        </div>
    )
}