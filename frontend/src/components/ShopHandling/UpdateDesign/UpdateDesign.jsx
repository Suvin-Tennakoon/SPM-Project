import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./Updatedesign.css";

// import "./updatesupplier.css";

function Updatedesign(props) {
  const { id } = useParams();

  console.log(id);

  const [designname, setdesignname] = useState();
  const [designprice, setdesignprice] = useState();
  const [designdetails, setdesigndetails] = useState();

  useEffect(() => {
    let getdesign = () => {
      axios
        .get(
          "https://cake-hut-app-backend.azurewebsites.net/api/shops/getone/" +
            id
        )
        .then((res) => {
          setdesignname(res.data.designname);
          setdesigndetails(res.data.designdetails);
          setdesignprice(res.data.designprice);
        });
    };

    getdesign();
  }, []);

  const update = (e) => {
    e.preventDefault();

    const updatedesign = {
      designname,
      designprice,
      designdetails,
    };

    axios
      .put(
        "https://cake-hut-app-backend.azurewebsites.net/api/shops/update/" + id,
        updatedesign
      )
      .then(() => {
        // alert("Design is updated successfully");
        window.location = "/displaydesign";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <br/><br/><br/><br/><br/>
      <section class="h-100 bg-dark">
        <form
          onSubmit={(e) => {
            update(e);
          }}
        >
          <div class="col-xl-15" className="formchamodi">
            <div class="card-body p-md-5 text-black">
              <h3 class="mb-3 text-uppercase">Update Design Details</h3>

              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example97">
                  Design Name
                </label>
                <input
                  type="text"
                  id="form3Example97"
                  class="form-control"
                  defaultValue={designname}
                  onChange={(e) => {
                    setdesignname(e.target.value);
                  }}
                />
              </div>

              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example97">
                  Design Details
                </label>
                <textarea
                  type="text"
                  id="form3Example97"
                  class="form-control"
                  defaultValue={designdetails}
                  onChange={(e) => {
                    setdesigndetails(e.target.value);
                  }}
                />
              </div>

              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example97">
                  Price of Design
                </label>
                <input
                  type="text"
                  id="form3Example97"
                  class="form-control "
                  defaultValue={designprice}
                  onChange={(e) => {
                    setdesignprice(e.target.value);
                  }}
                />
              </div>

              <div class="d-flex justify-content-end pt-3">
                <button
                  type="submit"
                  class="btn btn-danger"
                  style={{ marginRight: 110 }}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Updatedesign;
