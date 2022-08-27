import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import LoadingSpinner from './LoadingSpinner/LoadingSpinner'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const RegisterUser = () => {

    const navigate = useNavigate();
    const form = useRef();

    const [userId, setUserId] = useState("");
    const [firstName, setFname] = useState("");
    const [middleName, setMname] = useState("");
    const [lastName, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [mobile, setMobile] = useState("");
    const [accountType, setAccountType] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const rand = (min, max) => {
        return Math.floor(Math.random() * max - min + 1) + min;
    }

    const handleIds = () => {
        setUserId(rand(999, 99999))
    }

    const handleIdChange = (e) => {

        e.preventDefault();
        setUserId(e.target.value);
    }

    const handleFnameChange = (e) => {

        e.preventDefault();
        setFname(e.target.value);
    }

    const handleMnameChange = (e) => {

        e.preventDefault();
        setMname(e.target.value);
    }

    const handleLnameChange = (e) => {

        e.preventDefault();
        setLname(e.target.value);
    }

    const handleEmailChange = (e) => {

        e.preventDefault();
        setEmail(e.target.value);
    }

    const handleDobChange = (e) => {

        e.preventDefault();
        setDateOfBirth(e.target.value);
    }

    const handleMobileChange = (e) => {

        e.preventDefault();
        setMobile(e.target.value);
    }

    const handleAccTypeChange = (e) => {

        e.preventDefault();
        setAccountType(e.target.value);
    }

    const handlePasswordChange = (e) => {

        e.preventDefault();
        setPassword(e.target.value);
    }

    const handlePws = () => {
        setPassword("PW" + rand(999999, 99999999))
    }

    const handleStatusChange = (e) => {

        e.preventDefault();
        setStatus(e.target.value);
    }

    const addNewUser = async (e) => {
        e.preventDefault();

        if (userId.length <= 0) {
            alert("Please Enter any button to get an user ID...")
        }

        if (firstName.length <= 2) {
            alert("The name should at least be 3 letters in the first name...")
        }

        if (middleName.length <= 2) {
            alert("The name should at least be 3 letters in the middle name...")
        }

        if (lastName.length <= 2) {
            alert("The name should at least be 3 letters in the last name...")
        }

        if (email.length <= 2) {
            alert("Email must contain @ and atleast 3 letter before for the prefix...")
        }

        if ((mobile.length < 10) || (mobile.length > 10)) {
            alert("Enter a valid mobile number...")
        }

        if (password.length <= 0) {
            alert("Please Enter any button to get an temporary password...")
        }

        if (dateOfBirth.length <= "01/01/2019") {
            alert("You cannot enrol to the system...")
        }

        if (accountType.length <= 2) {
            alert("Account type should be Student or Admin...")
        }

        else {
            setIsLoading(true);
            const userData = {
                userId: userId,
                firstName: firstName,
                middleName: middleName,
                lastName: lastName,
                email: email,
                dateOfBirth: dateOfBirth,
                mobile: mobile,
                accountType: accountType,
                password: password,
                status: '0'
            }

            console.log("Sending User Data...", userData);

            let data = await axios
                .post('http://localhost:3001/api/customers/', {
                    userId: userId,
                    firstName: firstName,
                    middleName: middleName,
                    lastName: lastName,
                    email: email,
                    dateOfBirth: dateOfBirth,
                    mobile: mobile,
                    accountType: accountType,
                    password: password,
                    status: '0'
                })
                .then((res) => {
                    console.log("Saved User: ", res.data);
                    //alert('Registration Success...');
                    Swal.fire({
                        icon: 'success',
                        title: 'User Registered!',
                        text: 'Your data has been successfully inserted. please check your email...',
                    })
                    setIsLoading(false);
                    sendEmail(e);
                    navigate('/');
                })
                .catch((err) => {
                    // Swal.fire({
                    //     icon: 'error',
                    //     title: ' Insert Failed!',
                    //     text: (err.response.data),
                    // })
                    setIsLoading(false);
                    console.log(err);
                })
        }

    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_y4h1h0d', 'template_e6tenye', form.current, 'user_4Ty61vRi47OewtmEVjcGx')
            .then((result) => {
                console.log(result.text);
                //alert("Email Has Been Sent...")
            }, (error) => {
                console.log(error.text);
            });
    };

    const renderUser = (
        <div style={{ marginTop: '30px', marginLeft: '35%' }}>

        </div>
    );


    return (
        <div style={{ marginTop: "120px" }}>

            {isLoading ? <LoadingSpinner /> : renderUser}
            <div className='container' style={{ marginTop: '30px', backgroundColor: "#d9d9d9", padding: '10px' }}>
                <div>
                    <h3 class="text-dark mb-4">SignUp</h3>
                </div>
                <form ref={form}>
                    <div className='form-row'>
                        <div className='form-group col-md-3'>
                            <label class="text-dark">ID <b>(Press Any Key...)</b></label><br />
                            <input type='text' name='' onChange={() => handleIds()} value={userId} className='form-control' style={{ marginBottom: '20px' }} required='true' />
                        </div>

                        <div className='form-group col-md-3'>
                            <label class="text-dark">First Name</label><br />
                            <input type='text' name='user_first_name' onChange={(e) => handleFnameChange(e)} value={firstName} className='form-control' style={{ marginBottom: '20px' }} required='true' />
                        </div>

                        <div className='form-group col-md-3'>
                            <label class="text-dark">Middle Name</label><br />
                            <input type='text' name='user_middle_name' onChange={(e) => handleMnameChange(e)} value={middleName} className='form-control' style={{ marginBottom: '20px' }} required='true' />
                        </div>

                        <div className='form-group col-md-3'>
                            <label class="text-dark">Last Name</label><br />
                            <input type='text' name='' onChange={(e) => handleLnameChange(e)} value={lastName} className='form-control' style={{ marginBottom: '20px' }} required='true' />
                        </div>

                        <div className='form-group col-md-6'>
                            <label class="text-dark">Email</label><br />
                            <input type='text' name='user_email' onChange={(e) => handleEmailChange(e)} value={email} className='form-control' style={{ marginBottom: '20px' }} required='true' />
                        </div>

                        <div className='form-group col-md-3'>
                            <label class="text-dark">Date of Birth</label><br />
                            <input type='datetime-local' name='' onChange={(e) => handleDobChange(e)} value={dateOfBirth} className='form-control' style={{ marginBottom: '20px' }} required='true' />
                        </div>

                        <div className='form-group col-md-3'>
                            <label class="text-dark">Mobile No</label><br />
                            <input type='text' name='' onChange={(e) => handleMobileChange(e)} value={mobile} className='form-control' style={{ marginBottom: '20px' }} required='true' />
                        </div>

                        <div className='form-group col-md-3'>
                            <label class="text-dark">Password <b>(Press Any Key...)</b></label>
                            <input type='password' name='user_password' onChange={() => handlePws()} value={password} className='form-control' style={{ marginBottom: '20px' }} required='true' />
                        </div>

                        <div className='form-group col-md-'>
                            {/* <label class="text-dark">Status</label> */}
                            <input type='hidden' name='' onChange={(e) => handleStatusChange(e)} value={status} className='form-control' style={{ marginBottom: '20px' }} required='true' readOnly='true' />
                        </div>

                        <div class="form-group col-md-2">
                            <label class="text-dark">Account Type</label>
                            <select class="form-control" name='' onChange={(e) => handleAccTypeChange(e)} value={accountType} style={{ marginBottom: '20px' }} required='true'>
                                <option selected>Choose...</option>
                                <option>Shop Owner</option>
                                <option>Customer</option>
                                <option>Admin</option>
                            </select>
                        </div>
                    </div>


                    <button style={{ marginBottom: '10px' }} type='submit' onClick={(e) => addNewUser(e)} className='btn btn-primary' disabled={isLoading}>Register</button>
                </form>
                <div class="text-dark">
                    Already having an account? <a href='/login'>Login here</a>
                </div>
            </div>

        </div>
    )
}

export default RegisterUser