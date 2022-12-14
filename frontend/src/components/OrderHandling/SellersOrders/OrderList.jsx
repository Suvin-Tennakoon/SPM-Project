import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/Navbar";
import "./orderlist.css";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import { BACKEND_DOMAIN } from "../Domain";
import QRread from "./QRread";
import PdfGen from "../PDFgen/PdfGen";

export default function OrderList(props) {
  const seller = localStorage.getItem("FirstName");
  // const [seller, setSeller] = useState("");
  const [orders, setOrders] = useState([]);
  const [openBkdrop, setOpenBkdrop] = useState(true);

  useEffect(() => {
    if (seller === "" || seller === null) {
      window.location = "/unauthorized";
    } else {
      axios
        .get(BACKEND_DOMAIN + "/api/orders/getCakeforShop/" + seller)
        .then((res) => {
          setOrders(res.data);
        })
        .then(() => setOpenBkdrop(false))
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBkdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <NavBar />
      <div className="container" style={{ marginTop: "150px" }}>
        <div class="row">
          <div class="col">
            <h4 style={{ marginBottom: "70px" }}>
              <u>{`Hi ${seller}, You have ${orders.length} order requests..`}</u>
            </h4>
          </div>

          <div
            class="col"
            style={{
              textAlign: "right",
            }}
          >
            <div style={{ marginBottom: "10px" }}>
              <PdfGen />
            </div>
            <QRread />
          </div>
        </div>

        {/* card map start */}
        {orders?.map((order) => {
          return (
            <>
              <div class="card mb-3 suvincard">
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
