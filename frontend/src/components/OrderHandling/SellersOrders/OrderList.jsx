import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/Navbar";
import "./orderlist.css";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";

export default function OrderList(props) {
  const [seller, setSeller] = useState("suvin");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/orders/getAllOrders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NavBar />
      <div className="container" style={{ marginTop: "150px" }}>
        <h4 style={{ marginBottom: "70px" }}>
          <u>{`Hi ${seller}, You have ${orders.length} order requests..`}</u>
        </h4>

        {/* card map start */}
        {orders?.map((order) => {
          return (
            <>
              <div class="card mb-3 suvincard" style={{ width: "540px;" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src={order.cakeImage}
                      class="img-fluid rounded-start mainmenu"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <div class="row">
                        <div className="col">
                          <h5 class="card-title">{order.cakeType}</h5>
                        </div>
                        <div
                          className="col"
                          style={{ textAlign: "right", paddingRight: "30px" }}
                        >
                          <button
                            className="btn btn-primary circle"
                            onClick={() => {
                              window.location.href = `/orderRequest/${order._id}`;
                            }}
                          >
                            <PlaylistAddOutlinedIcon />
                          </button>
                        </div>
                      </div>

                      <div class="row">
                        <div className="col">
                          <b>Quantity : </b>
                          {order.quantity}
                        </div>
                        <div className="col">
                          <b>Size : </b>
                          {order.size}
                        </div>
                      </div>
                      <br />
                      <div class="row">
                        <div className="col">
                          <b>Flavour : </b>
                          {order.flavour}
                        </div>
                        <div className="col">
                          <b>Sugar Type : </b>
                          {order.sugar}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
            </>
          );
        })}

        {/* card map end */}
      </div>
      <Footer />
    </>
  );
}
