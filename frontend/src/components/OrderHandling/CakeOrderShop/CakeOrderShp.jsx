import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import MuiInput from "@mui/material/Input";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MuiAlert from "@mui/material/Alert";

import { Snackbar } from "@mui/material";
import { BACKEND_DOMAIN } from "../Domain";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",

  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function CakeOrderShp() {
  const { id } = useParams();

  const [order, setOrder] = useState({});
  const [need, isNeed] = useState(true);
  const [decision, setDecision] = useState(1);
  const [expanded, setExpanded] = React.useState(false);
  const [amount, setAmount] = useState("");
  const [advAmount, setAdvAmount] = useState("");
  const [modPeriod, setModPeriod] = useState("");
  const [openSnak, setOpenSnak] = useState(false);
  const [errormsg, setErrormsg] = useState("");
  const [rejectReason, setRejectReason] = useState("");

  const needAdvance = () => {
    isNeed(!need);
  };

  useEffect(() => {
    axios.get(BACKEND_DOMAIN + "/api/orders/getOrderData/" + id).then((res) => {
      console.log(res.data);
      setOrder(res.data);
    });
  }, [id]);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCloseSnak = (event, reason) => {
    setOpenSnak(false);
  };

  const submitDecision = () => {
    if (decision === 1) {
      if (amount === "") {
        setErrormsg("Enter an Amount");
        setOpenSnak(true);
      } else if (modPeriod === "") {
        setErrormsg("Enter the AD Modifiable Period");
        setOpenSnak(true);
      } else if (need && advAmount === "") {
        setErrormsg("Enter an Advance Payment");
        setOpenSnak(true);
      } else {
        const data = {
          amount,
          modPeriod,
          advAmount,
        };
        axios
          .put(
            BACKEND_DOMAIN + "/api/orders/setAcceptedOrder/" + order._id,
            data
          )
          .then((res) => {
            console.log(res.data);
            window.location = "/sellerAllOrders";
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else if (decision === -1) {
      if (rejectReason === "") {
        setErrormsg("Enter Reject Reason");
        setOpenSnak(true);
      } else {
        const data = {
          rejectReason,
        };

        axios
          .put(
            BACKEND_DOMAIN + "/api/orders/setRejectedOrder/" + order._id,
            data
          )
          .then((res) => {
            console.log(res.data);
            window.location = "/sellerAllOrders";
          })
          .catch((err) => console.log(err));
      }
    }
  };

  return (
    <>
      <Snackbar
        open={openSnak}
        autoHideDuration={10000}
        onClose={handleCloseSnak}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          {errormsg}
        </Alert>
      </Snackbar>
      <ThemeProvider theme={darkTheme}>
        <Card
          sx={{
            mt: 20,
            mb: 20,
            width: { md: "70%", sm: "100%" },
            mx: "auto",
            padding: 5,
            bgcolor: "",
          }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                CH
              </Avatar>
            }
            title={
              <Typography variant="h5">
                <u>{order.cakeType}</u>
              </Typography>
            }
          />

          <center>
            <div
              style={{ width: "300px", height: "300px", overflow: "scroll" }}
            >
              <CardMedia component="img" image={order.cakeImage} />
            </div>
          </center>
          <CardContent>
            <table class="table table-dark table-hover">
              <tr>
                <td>
                  <b>Customer Name : </b>
                </td>
                <td>{order.customer}</td>
              </tr>
              <tr>
                <td>
                  <b>Cake Size : </b>
                </td>
                <td>{order.size}</td>
              </tr>
              <tr>
                <td>
                  <b>Cake Flavour : </b>
                </td>
                <td>{order.flavour}</td>
              </tr>
              <tr>
                <td>
                  <b>Sugar Preference : </b>
                </td>
                <td>{order.sugar}</td>
              </tr>
              <tr>
                <td>
                  <b>Printed Text on Cake : </b>
                </td>
                <td>{order.cakeText}</td>
              </tr>
              <tr>
                <td>
                  <b>Required Accessories : </b>
                </td>
                <tr>
                  {order.accessories?.map((itm) => {
                    return (
                      <tr>
                        <td>{itm}</td>
                      </tr>
                    );
                  })}
                </tr>
              </tr>
              <tr>
                <td>
                  <b>Printed Text on Cake : </b>
                </td>
                <td>{order.cakeText}</td>
              </tr>
              <tr>
                <td>
                  <b>Required Ingredients : </b>
                </td>
                <tr>
                  {order.ingredients?.map((itm) => {
                    return (
                      <tr>
                        <td>{itm}</td>
                      </tr>
                    );
                  })}
                </tr>
              </tr>
              <tr>
                <td>
                  <b>Required Date : </b>
                </td>
                <td>{order.deliverData?.deliverDate}</td>
              </tr>
            </table>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <div className="row justify-content-center">
                <div className="col-sm-7 col-md-4 mb-5">
                  <ul
                    className="nav nav-pills nav-justified mb-3"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="pills-home-tab"
                        data-toggle="pill"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                        href="#accept"
                        onClick={() => setDecision(1)}
                      >
                        ACCEPT
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="pills-profile-tab"
                        data-toggle="pill"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                        href="#reject"
                        onClick={() => setDecision(-1)}
                      >
                        REJECT
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="accept"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div class="input-group mb-3">
                    <span
                      class="input-group-text"
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        overflow: "hidden",
                      }}
                    >
                      Rs.
                    </span>
                    <input
                      type="number"
                      class="form-control"
                      aria-label="Amount"
                      placeholder="Amount *"
                      onChange={(e) => setAmount(e.target.value)}
                      value={amount}
                    />
                    <span
                      class="input-group-text"
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        overflow: "hidden",
                      }}
                    >
                      .00
                    </span>
                  </div>
                  <div class="input-group mb-3">
                    <span
                      class="input-group-text"
                      id="basic-addon3"
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        overflow: "hidden",
                      }}
                    >
                      Allowed Order Modification Period
                    </span>
                    <span style={{ marginLeft: "20px" }}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          value={modPeriod}
                          onChange={(newValue) => {
                            setModPeriod(newValue);
                          }}
                          InputProps={{
                            removeOutline: true,
                          }}
                          disablePast
                          maxDate={order.deliverData?.deliverDate}
                          renderInput={(params) => (
                            <TextField variant="standard" {...params} />
                          )}
                        />
                      </LocalizationProvider>
                    </span>
                  </div>
                  <br />
                  <div class="input-group">
                    <span
                      class="input-group-text"
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        overflow: "hidden",
                      }}
                    >
                      Advance Payment Needed ?
                    </span>

                    <span>
                      <Switch
                        defaultChecked
                        color="warning"
                        onChange={needAdvance}
                      />
                    </span>
                    <input
                      type="number"
                      disabled={!need}
                      aria-label="advam"
                      placeholder="Advance Payment"
                      onChange={(e) => setAdvAmount(e.target.value)}
                      value={advAmount}
                      class="form-control"
                    ></input>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="reject"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <label for="exampleDataList" class="form-label">
                    Please state a reason for rejecting:
                  </label>
                  <input
                    class="form-control"
                    list="datalistOptions"
                    id="exampleDataList"
                    placeholder="Type to search..."
                    onChange={(e) => setRejectReason(e.target.value)}
                  />
                  <datalist id="datalistOptions">
                    <option value="Lack of skills" />
                    <option value="Insufficient food supplies" />
                    <option value="Lack of man power" />
                    <option value="Shortage of staff" />
                    <option value="Delivery difficulties" />
                    <option value="Requested date is too tight" />
                  </datalist>
                </div>
              </div>
            </CardContent>
            <center>
              <button
                type="button"
                className="btn btn-warning"
                style={{ margin: "30px auto", minWidth: "50%" }}
                onClick={submitDecision}
              >
                SUBMIT
              </button>
            </center>
          </Collapse>
        </Card>

        <Footer />
      </ThemeProvider>
    </>
  );
}
