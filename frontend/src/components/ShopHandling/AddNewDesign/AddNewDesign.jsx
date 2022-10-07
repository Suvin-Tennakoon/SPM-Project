import React, { Component } from "react";
import "./AddNewDesign.css";
import axios from "axios";

class AddNewDesign extends React.Component {
  constructor(props) {
    super(props);

    this.setdesignname = this.setdesignname.bind(this);
    this.setdesignimage = this.setdesignimage.bind(this);
    this.setdesignprice = this.setdesignprice.bind(this);
    this.setdesigndetails = this.setdesigndetails.bind(this);
    this.addnewdesign = this.addnewdesign.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);

    this.state = {
      dname: "",
      dimage: "",
      dprice: "",
      ddetails:"",
      url: "",
      selectedFile: null,
    };
  }

  setdesignname(e) {
    this.setState({ dname: e.target.value });
  }

  setdesignimage(e) {
    // this.setState({ dimage: e.target.value });

    this.setState({ selectedFile: e.target.files[0] });
  }

  setdesignprice(e) {
    this.setState({ dprice: e.target.value });
  }

  setdesigndetails(e){
    this.setState({ddetails:e.target.value});
  }

  onFileUpload(e) {
    if (this.state.selectedFile != null) {
      const file = new FormData();

      file.append(
        "file",
        this.state.selectedFile,
        this.state.selectedFile.name
      );

      // Details of the uploaded file
      console.log(this.state.selectedFile);

      axios.post("http://localhost:3001/api/shops/upload", file).then((req) => {
        this.setState({ url: req.data });
      });
    } else {
      alert("Upload Images !");
    }
  }

  addnewdesign(e) {
    const newdesign = {
      designname: this.state.dname,
      designdetails : this.state.ddetails,
      designimage: this.state.url,
      designprice: this.state.dprice,
    };
    if (
      newdesign.designname != "" &&
      newdesign.designimage != "" &&
      newdesign.designprice != ""
    ) {
      axios
        .post("http://localhost:3001/api/shops/add", newdesign)
        .then(() => {
          alert("New Design is Added Successfully");
          window.location = "/displaydesign"
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      alert("Fill All Details !");
    }
  }

  render() {
    return (
      <div>
     <div class="container">  
  <div id="contact">
    <h3>Add New Designs</h3>
    <h4>Add new designs for our CakeHut</h4>
    <fieldset>
      <input placeholder="Design name" type="text" tabindex="1" onChange={this.setdesignname}
              value={this.state.dname} required autofocus/>
    </fieldset>
    <fieldset>
      <textarea placeholder="Details about Design" tabindex="2" value={this.state.ddetails}  onChange={this.setdesigndetails}  required></textarea>
    </fieldset>
    <fieldset>
      <input placeholder="Price" type="text" tabindex="3" onChange={this.setdesignprice}
              value={this.state.dprice} required autofocus/>
    </fieldset>
    <fieldset>
      <input placeholder="Upload Image" type="file" tabindex="4" onChange={this.setdesignimage} required autofocus/>
      <button
              class="btn btn-success"
              onClick={this.onFileUpload}
            >
              upload
            </button>
      <img
              src={this.state.url}
              style={{ width: 100, height: 100, marginTop:10 , marginLeft: 170 }}
            />
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending"  onClick={this.addnewdesign}>Add</button>
    </fieldset>
  </div>
 
  
</div>
      </div>
    );
  }
}
export default AddNewDesign;
