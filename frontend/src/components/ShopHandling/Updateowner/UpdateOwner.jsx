import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
// import "./Updatedesign.css";

// import "./updatesupplier.css";

function UpdateOwner(props) {
  const { id } = useParams();

  console.log(id);

  const [designname, setdesignname] = useState();
  const [designprice, setdesignprice] = useState();
  const [designdetails, setdesigndetails] = useState();

  useEffect(() => {
    let getdesign = () => {
      axios.get("http://localhost:3001/api/shops/getone/" + id).then((res) => {
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
      .put("http://localhost:3001/api/shops/update/" + id, updatedesign)
      .then(() => {
        alert("Design is updated successfully");
        window.location = "/displaydesign";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <section class="h-100 bg-dark">
        <form
          onSubmit={(e) => {
            update(e);
          }}
        >
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col">
                <div class="card card-registration my-4">
                  <div class="row g-0">
                    <div class="col-xl-6 d-none d-xl-block">
                      {/* <img
                        src="https://cdn11.bigcommerce.com/s-w6rae6i8cu/images/stencil/original/image-manager/strawberry-rose-mobile-2a.jpg?t=1659566675"
                        alt="Sample photo"
                        class="img-fluid"
                        style={{
                          bordetopleftradius: ".15rem",
                          borderbottomleftradius: ".15rem",
                          height: "750px",
                        }}
                      /> */}
                    </div>
                    <div class="col-xl-15" className="form">
                      <div class="card-body p-md-5 text-black">
                        <h3 class="mb-3 text-uppercase">
                          Update Design Details
                        </h3>

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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default UpdateOwner;
