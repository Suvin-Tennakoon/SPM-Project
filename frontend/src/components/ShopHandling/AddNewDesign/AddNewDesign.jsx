import React, { Component } from "react";
import "./AddNewDesign.css";
import axios from "axios";

const name = localStorage.getItem("username");


class AddNewDesign extends React.Component {
  constructor(props) {
    super(props);

    this.setdesignname = this.setdesignname.bind(this);
    this.setdesignimage = this.setdesignimage.bind(this);
    this.setdesignprice = this.setdesignprice.bind(this);
    this.setdesigndetails = this.setdesigndetails.bind(this);
    this.setshopname = this.setshopname.bind(this);
    this.addnewdesign = this.addnewdesign.bind(this);
    // this.onFileUpload = this.onFileUpload.bind(this);
    this.handleImage = this.handleImage.bind(this);

    this.state = {
      dname: "",
      dimage: "",
      dprice: "",
      ddetails: "",
      shname: "",
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

  setdesigndetails(e) {
    this.setState({ ddetails: e.target.value });
  }

  setshopname(e) {
    this.setState({ shname: e.target.value });
  }

  // onFileUpload(e) {
  //   if (this.state.selectedFile != null) {
  //     const file = new FormData();

  //     file.append(
  //       "file",
  //       this.state.selectedFile,
  //       this.state.selectedFile.name
  //     );

  //     // Details of the uploaded file
  //     console.log(this.state.selectedFile);

  //     axios.post("https://cake-hut-app-backend.azurewebsites.net/api/shops/upload", file).then((req) => {
  //       this.setState({ url: req.data });
  //     });
  //   } else {
  //     alert("Upload Images !");
  //   }
  // }

  handleImage(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    if (e.target.value.length) {
      console.log("Files Loaded");
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        let base64 = fileReader.result;
        this.setState({ dimage: base64 });
      };
    } else {
      this.setImage({ dimage: "" });
    }
  }

  addnewdesign(e) {
    const newdesign = {
      designname: this.state.dname,
      designdetails: this.state.ddetails,
      designimage: this.state.dimage,
      designprice: this.state.dprice,
      username: this.state.shname,
    };
    if (
      newdesign.designname != "" &&
      newdesign.designimage != "" &&
      newdesign.designprice != "" &&
      newdesign.username != ""
    ) {
      axios
        .post(
          "https://cake-hut-app-backend.azurewebsites.net/api/shops/add",
          newdesign
        )
        .then(() => {
          alert("New Design is Added Successfully");
          window.location = "/displaydesign";
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
      <div id="bodychamodi">
        <br />
        <br />
        <div class="containerchamodi">
          <div id="contactchamodi">
            <h3>Add New Designs</h3>
            <h4>Add new designs for our CakeHut</h4>
            <div className="fieldsetchamodi">
              <fieldset>
                <input
                  placeholder="Your Name"
                  type="text"
                  id="inputchamodi"
                  tabindex="1"
                  onChange={this.setshopname}
                  value={this.state.shname}
                  required
                  autofocus
                />
              </fieldset>
              <fieldset>
                <input
                  placeholder="Design name"
                  type="text"
                  tabindex="1"
                  id="inputchamodi"
                  onChange={this.setdesignname}
                  value={this.state.dname}
                  required
                  autofocus
                />
              </fieldset>
              <fieldset>
                <textarea
                  placeholder="Details about Design"
                  tabindex="2"
                  id="textareachamodi"
                  value={this.state.ddetails}
                  onChange={this.setdesigndetails}
                  required
                ></textarea>
              </fieldset>
              <fieldset>
                <input
                  placeholder="Price"
                  type="text"
                  tabindex="3"
                  id="inputchamodi"
                  onChange={this.setdesignprice}
                  value={this.state.dprice}
                  required
                  autofocus
                />
              </fieldset>
              <fieldset>
                {/* <input
                placeholder="Upload Image"
                type="file"
                tabindex="4"
                onChange={this.setdesignimage}
                required
                autofocus
              />
              <button class="btn btn-success" onClick={this.onFileUpload}>
                upload
              </button>
              <img
                src={this.state.url}
                style={{
                  width: 100,
                  height: 100,
                  marginTop: 10,
                  marginLeft: 170,
                }}
              /> */}

                <input
                  type="file"
                  className="form-control,buttonch"
                  id="formFile"
                  accept="image/*"
                  onChange={(e) => this.handleImage(e)}
                />
              </fieldset>
              <fieldset>
                <button
                  name="submit"
                  type="submit"
                  className="buttonch"
                  id="contact-submit"
                  data-submit="...Sending"
                  onClick={this.addnewdesign}
                >
                  Add
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddNewDesign;
