import React, { Component } from "react";

import axios from "axios";

class Addshopowners extends React.Component {
  //     constructor(props) {
  //         super(props);

  //         /*
  //         *setSupplierName() is a user ddefined function. React doesn't know about it.
  //         *so we need to bind that with library
  //         */
  //         this.setSupplierfName = this.setSupplierfName.bind(this);
  //         this.setSupplierlName = this.setSupplierlName.bind(this);
  //         this.setSuppliercompanyName = this.setSuppliercompanyName.bind(this);
  //         this.setSupplierPhone = this.setSupplierPhone.bind(this);
  //         this.setSupplierEmail = this.setSupplierEmail.bind(this);
  //         this.setSupplierPassword = this.setSupplierPassword.bind(this);
  //         this.saveSupplierData = this.saveSupplierData.bind(this);

  //         this.state = {

  //             fname: '',
  //             lname: '',
  //             cname: '',
  //             phone: '',
  //             email: '',
  //             passwords: '',

  //         }
  //     }

  //     //user defined method, takes event input
  //     setSupplierfName(e){
  //         this.setState({fname:e.target.value});
  //     }

  //    setSupplierlName(e) {
  //         this.setState({lname:e.target.value});
  //     }
  //     setSuppliercompanyName(e) {
  //         this.setState({cname: e.target.value});
  //     }

  //     setSupplierPhone(e) {
  //         this.setState({phone: e.target.value});
  //     }

  //     setSupplierEmail(e) {
  //         this.setState({email: e.target.value});
  //     }

  //     setSupplierPassword(e) {
  //         this.setState({passwords: e.target.value});
  //     }

  //     saveSupplierData(e) {
  //         console.log('Supplier Data', this.state);

  //         const Supplier = {
  //             firstname: this.state.fname,
  //             lastname: this.state.lname,
  //             companyname: this.state.cname,
  //             pnum: this.state.phone,
  //             Email: this.state.email,
  //             password: this.state.passwords,

  //         }

  //         //send data to backend
  //         //3 parameters: url of bkend api, data to send and configurations(optional)

  //       if(!this.state.fname) {
  //           document.getElementById("id1").className = "form-control is-invalid";
  //           document.getElementById("fr").innerHTML = "Name cannot be empty";
  //           document.getElementById("fr").className = "invalid-feedback";
  //       }

  //       else if(!this.state.lname) {
  //         document.getElementById("id2").className = "form-control is-invalid";
  //         document.getElementById("ls").innerHTML = "Name cannot be empty";
  //         document.getElementById("ls").className = "invalid-feedback";
  //     }

  //     else if(!this.state.cname) {
  //       document.getElementById("id3").className = "form-control is-invalid";
  //       document.getElementById("cn").innerHTML = "company name cannot be empty";
  //       document.getElementById("cn").className = "invalid-feedback";
  //     }

  //     else if(!this.state.phone) {
  //       document.getElementById("id4").className = "form-control is-invalid";
  //       document.getElementById("pn").innerHTML = " Mobile cannot be empty";
  //       document.getElementById("pn").className = "invalid-feedback";
  //   }
  //   else if(this.state.phone.length != 10){
  //     document.getElementById("id4").className = "form-control is-invalid";
  //     document.getElementById("pn").innerHTML = " Invalid phone number";
  //     document.getElementById("pn").className = "invalid-feedback";
  //   }

  //   else if(!this.state.email) {
  //     document.getElementById("id5").className = "form-control is-invalid";
  //     document.getElementById("em").innerHTML = " Enter valid email";
  //     document.getElementById("em").className = "invalid-feedback";
  //   }

  //   // else if(this.state.email) {
  //   //   const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   //       if(reg.test(this.state.email) ==false){
  //   //           this.setState({emailError:"Email Field is Invalid"});
  //   //           return false;
  //   //       }
  //   //       return true;
  //   // }

  //     else if(!this.state.passwords) {
  //       document.getElementById("id6").className = "form-control is-invalid";
  //       document.getElementById("ps").innerHTML = "Password cannot be empty";
  //       document.getElementById("ps").className = "invalid-feedback";
  //     }
  //     else if(this.state.passwords.length < 8) {
  //       document.getElementById("id6").className = "form-control is-invalid";
  //       document.getElementById("ps").innerHTML = "Password should contain at least 8 characters";
  //       document.getElementById("ps").className = "invalid-feedback";

  //      }

  //   else{
  //         axios.post('http://localhost:3001/Regsupplier/', Supplier)
  //         .then(()=> {
  //             alert('Data are Successfuly Inserted ');
  //         }).catch((err) => {
  //             alert(err.message);
  //         });

  //       }

  //     }

  render() {
    return (
      <div>
        <div>
            <br/>
          <section class="vh-100" style="background-color: #eee;">
            <div class="container h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-12 col-xl-11">
                  <div class="card text-black" style="border-radius: 25px;">
                    <div class="card-body p-md-5">
                      <div class="row justify-content-center">
                        <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                          <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                            Sign up
                          </p>

                          <form class="mx-1 mx-md-4">
                            <div class="d-flex flex-row align-items-center mb-4">
                              <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                                <input
                                  type="text"
                                  id="form3Example1c"
                                  class="form-control"
                                />
                                <label class="form-label" for="form3Example1c">
                                  Your Name
                                </label>
                              </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                              <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                                <input
                                  type="email"
                                  id="form3Example3c"
                                  class="form-control"
                                />
                                <label class="form-label" for="form3Example3c">
                                  Your Email
                                </label>
                              </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                              <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                                <input
                                  type="password"
                                  id="form3Example4c"
                                  class="form-control"
                                />
                                <label class="form-label" for="form3Example4c">
                                  Password
                                </label>
                              </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                              <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                                <input
                                  type="password"
                                  id="form3Example4cd"
                                  class="form-control"
                                />
                                <label class="form-label" for="form3Example4cd">
                                  Repeat your password
                                </label>
                              </div>
                            </div>

                            <div class="form-check d-flex justify-content-center mb-5">
                              <input
                                class="form-check-input me-2"
                                type="checkbox"
                                value=""
                                id="form2Example3c"
                              />
                              <label
                                class="form-check-label"
                                for="form2Example3"
                              >
                                I agree all statements in{" "}
                                <a href="#!">Terms of service</a>
                              </label>
                            </div>

                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button
                                type="button"
                                class="btn btn-primary btn-lg"
                              >
                                Register
                              </button>
                            </div>
                          </form>
                        </div>
                        <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                            class="img-fluid"
                            alt="Sample image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <br/>
        </div>
      </div>
    );
  }
}

export default Addshopowners;
