import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function UpdateProf() {

    const navigate = useNavigate()
    const id = useParams();

    const [img, setImg] = useState("");
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");

    const [userDetails, setUserDetails] = useState({
        img: "",
        firstName: "",
        middleName: "",
        lastName: "",
        dateOfBirth: "",
        mobile: "",
        email: ""
    })

    const changeOnClick = (e) => {
      e.preventDefault();

      const formData = new FormData();

      formData.append("img", img);
      formData.append("firstName", firstName);
      formData.append("middleName", middleName);
      formData.append("lastName", lastName);
      formData.append("dateOfBirth", dateOfBirth);
      formData.append("mobile", mobile);
      formData.append("email", email);

      setImg("");
      setFirstName("");
      setMiddleName("");
      setLastName("");
      setMobile("");
      setDateOfBirth("");
      setEmail("");

      console.log(formData.get("lastName"));

      userDetails.img = formData.get("img");
      userDetails.firstName = formData.get("firstName");
      userDetails.middleName = formData.get("middleName");
      userDetails.lastName = formData.get("lastName");
      userDetails.dateOfBirth = formData.get("dateOfBirth");
      userDetails.mobile = formData.get("mobile");
      userDetails.email = formData.get("email");

      console.log(userDetails);

      //validations

      axios
        .put(
          `https://cake-hut-app-backend.azurewebsites.net/api/customers/${id.id}`,
          userDetails
        )
        .then((res) =>
          //alert(res.data.message),
          navigate("/userprof")
        )
        .catch((err) => {
          alert("update failed");
          console.log(err);
        });
    };

    const handleInputState = (name, value) => {
      setUserDetails((prev) => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
      axios
        .get(
          `https://cake-hut-app-backend.azurewebsites.net/api/customers/${id.id}`
        )

        .then((res) => [
          console.log(res.data),
          setFirstName(res.data.img),
          setFirstName(res.data.firstName),
          setMiddleName(res.data.middleName),
          setLastName(res.data.lastName),
          setDateOfBirth(res.data.dateOfBirth),
          setMobile(res.data.mobile),
          setEmail(res.data.email),
        ])

        .catch((err) => console.log(err));
    }, []);

    return (
        <div style={{ marginTop: "120px" }}>
            <div className='container' style={{ marginTop: '30px', backgroundColor: "#d9d9d9", padding: '10px 10px 10px 10px', width: '80%' }}>
                <div>
                    <h3 class="text-dark mb-4">Update Profile</h3>
                </div>

                <form>
                    <div className='form-row'>
                        <div className='form-group col-md-4'>
                            <label class="text-dark">First Name</label><br />
                            <input type='text' name='firstName' value={firstName} onChange={e => setFirstName(e.target.value)} className='form-control' style={{ marginBottom: '20px' }} required='true' />
                        </div>

                        <div className='form-group col-md-4'>
                            <label class="text-dark">Middle Name</label><br />
                            <input type='text' name='middleName' value={middleName} onChange={e => setMiddleName(e.target.value)} className='form-control' style={{ marginBottom: '20px' }} required='true' />
                        </div>

                        <div className='form-group col-md-4'>
                            <label class="text-dark">Last Name</label><br />
                            <input type='text' name='lastName' value={lastName} onChange={e => setLastName(e.target.value)} className='form-control' style={{ marginBottom: '20px' }} required='true' />
                        </div>

                        <div className='form-group col-md-3'>
                            <label class="text-dark">mobile</label><br />
                            <input type='text' name='mobile' value={mobile} onChange={e => setMobile(e.target.value)} className='form-control' style={{ marginBottom: '20px' }} required='true' />
                        </div>

                        <div className='form-group col-md-3'>
                            <label class="text-dark">Date of Birth</label><br />
                            <input type='datetime-local' name='dateOfBirth' value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)} className='form-control' style={{ marginBottom: '20px' }} required='true' />
                        </div>

                        <div className='form-group col-md-6'>
                            <label class="text-dark">Email</label><br />
                            <input type='text' name='email' value={email} onChange={e => setEmail(e.target.value)} className='form-control' style={{ marginBottom: '20px' }} required='true' />
                        </div>
                        <button type='submit' onClick={changeOnClick} style={{ marginBottom: '10px' }} className='btn btn-success'>Update</button>
                    </div>

                </form>

            </div>
        </div>
    )
}
