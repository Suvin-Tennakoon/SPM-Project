import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import { Container } from "@mui/system";
import NavBar from "../Navbar/Navbar";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import CakeIcon from "@mui/icons-material/Cake";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import Footer from "../Footer/Footer";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert from "@mui/material/Alert";
import isPast from "date-fns/isPast";
import parseISO from "date-fns/parseISO";
import isAfter from "date-fns/isAfter";
import isFuture from "date-fns/isFuture";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import "./placeorder.css";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <CakeIcon />,
    2: <ShoppingCartCheckoutIcon />,
    3: <PublishedWithChangesIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function VerticalLinearStepper() {
  const [image, setImage] = React.useState("");
  const [cakeType, setCakeType] = useState("");
  const [sugarType, setSugarType] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [flavour, setFlavour] = useState("");
  const [cakeText, setCakeText] = useState("");
  const [accessoryList, setAccessories] = useState([]);
  const [ingredientList, setIngredients] = useState([]);
  const [deliverDate, setDeliverDate] = useState(Date);
  const [deliverType, setDeliverType] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [pnumber, setPhone] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [orderid, setOrderid] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [errormsg, setErrormsg] = useState("");
  const [openSnak, setOpenSnak] = useState(false);
  const [openBkdrop, setOpenBkdrop] = useState(false);

  const handleCloseSnak = (event, reason) => {
    setOpenSnak(false);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    document.getElementById(`stp${activeStep + 1}`).scrollIntoView();
  };

  const handleImage = (e) => {
    setThumbnail(e.target.files[0]);

    const file = e.target.files[0];
    const fileReader = new FileReader();

    if (e.target.value.length) {
      console.log("Files Loaded");

      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        let base64 = fileReader.result;
        setImage(base64);
      };
    } else {
      setImage("");
      setThumbnail(null);
    }
  };

  const handleCheckbox = (e) => {
    if (e.target.name === "Ingredients") {
      let ing = [...ingredientList];
      if (e.target.checked) {
        ing = [...ingredientList, e.target.value];
      } else ing.splice(ingredientList.indexOf(e.target.value), 1);

      setIngredients(ing);
    } else if (e.target.name === "accessories") {
      let acc = [...accessoryList];
      if (e.target.checked) {
        acc = [...accessoryList, e.target.value];
      } else acc.splice(accessoryList.indexOf(e.target.value), 1);

      setAccessories(acc);
    }
  };

  const cakeSubmit = () => {
    if (cakeType === "" || cakeType === "Select a Cake Type") {
      setErrormsg("Select a Cake Type");
      setOpenSnak(true);
    } else if (image === "") {
      setErrormsg("Please Upload an Image");
      setOpenSnak(true);
    } else if (flavour === "") {
      setErrormsg("Select a Flavour");
      setOpenSnak(true);
    } else if (size === "") {
      setErrormsg("Select Cake Size");
      setOpenSnak(true);
    } else if (sugarType === "") {
      setErrormsg("Select Sugar Type");
      setOpenSnak(true);
    } else if (quantity <= 0 || quantity % 1 != 0) {
      setErrormsg("Enter Valid Quantity");
      setOpenSnak(true);
    } else {
      handleOpen();
    }
  };

  const deliverSubmit = () => {
    if (!isFuture(parseISO(deliverDate))) {
      setErrormsg("Select Valid Future Date to Deliver");
      setOpenSnak(true);
    } else if (deliverType === "") {
      setErrormsg("Please Select a Deliver Type");
      setOpenSnak(true);
    } else if (
      deliverType === "Enter an Address to be Delivered" &&
      address === ""
    ) {
      setErrormsg("Address Line 1 cannot be Empty");
      setOpenSnak(true);
    } else if (
      city === "" &&
      deliverType === "Enter an Address to be Delivered"
    ) {
      setErrormsg("City cannot be Empty");
      setOpenSnak(true);
    } else if (
      province === "" &&
      deliverType === "Enter an Address to be Delivered"
    ) {
      setErrormsg("Province cannot be Empty");
      setOpenSnak(true);
    } else if (
      pnumber === "" &&
      deliverType === "Enter an Address to be Delivered"
    ) {
      setErrormsg("Please Enter Contact Number");
      setOpenSnak(true);
    } else if (
      !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
        pnumber
      ) &&
      deliverType === "Enter an Address to be Delivered"
    ) {
      // (123) 456-7890
      // (123)456-7890
      // 123-456-7890
      // 123.456.7890
      // 1234567890
      // +31636363634
      // 075 - 63546725;
      setErrormsg("Please Enter Valid Number");
      setOpenSnak(true);
    } else if (paymentType === "") {
      setErrormsg("Please Select a Payment Type");
      setOpenSnak(true);
    } else {
      setOpenBkdrop(true);
      const deliverData = {
        deliverDate,
        address: address + ", " + city + ", " + province,
        pnumber,
      };

      const cakeOrder = {
        seller: "john",
        customer: "doe",
        cakeType: cakeType,
        size: size,
        flavour: flavour,
        sugar: sugarType,
        quantity: quantity,
        cakeText: cakeText,
        accessories: accessoryList,
        ingredients: ingredientList,
        deliverData: deliverData,
        paymentType: paymentType,
        cakeImage: image,
      };

      axios
        .post("http://localhost:3001/api/orders/addCakeOrder", cakeOrder)
        .then((res) => {
          setOrderid(res.data);
          setOpenBkdrop(false);
          handleNext();
        })
        .catch((err) => {
          alert(err);
          setOpenBkdrop(false);
        });
    }
  };

  return (
    <>
      <NavBar />
      <Snackbar
        open={openSnak}
        autoHideDuration={10000}
        onClose={handleCloseSnak}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          {errormsg}
        </Alert>
      </Snackbar>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBkdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Container sx={{ mt: "150px", mb: "150px" }}>
        <Box sx={{ width: "80%" }}>
          <Stepper
            activeStep={activeStep}
            orientation="vertical"
            id="orderstepper"
            className="card bg-transparent border my-3 my-md-0"
          >
            <Step key={0}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                <h5 id="stp1" style={{ color: "white" }}>
                  <u>Enter Cake Specifications</u>
                </h5>
              </StepLabel>
              <StepContent>
                <div className="form-group" style={{ marginTop: "40px" }}>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    required
                    onChange={(e) => setCakeType(e.target.value)}
                  >
                    <option>
                      Select a Cake Type{" "}
                      <span style={{ color: "#ff0000" }}>*</span>
                    </option>
                    <option value="Celebration Cake">
                      Celebration Cakes (Birthday/Anniversary/Graduation, etc.)
                    </option>
                    <option value="Wedding Cake">Wedding Cakes</option>
                    <option value="Traditional Cake">
                      Traditional Cakes (Chocolate/Butter/Fruit/Date, etc.)
                    </option>
                  </select>
                  <br />
                  <br />
                  <div class="container text-center">
                    <div class="row">
                      <div class="col" style={{ padding: "0px" }}>
                        <label for="formFile" class="form-label">
                          Insert a picture of your cake design
                        </label>
                        <span style={{ color: "#ff0000" }}>*</span>
                        <div className="form-group">
                          <input
                            type="file"
                            className="form-control"
                            id="formFile"
                            accept="image/*"
                            onChange={(e) => handleImage(e)}
                          />
                        </div>
                      </div>
                      <div class="col">
                        <img
                          src={
                            thumbnail
                              ? URL.createObjectURL(thumbnail)
                              : "https://www.survivorsuk.org/wp-content/uploads/2017/01/no-image.jpg"
                          }
                          style={{ width: "200px", height: "200px" }}
                        />
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />

                  <div class="row">
                    <div class="col">
                      Sugar Type: <span style={{ color: "#ff0000" }}>*</span>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          style={{
                            accentColor: "#ff214f",
                            width: "20px",
                            height: "20px",
                          }}
                          value="Sugared"
                          type="radio"
                          name="sugartype"
                          id="Sugared"
                          onChange={(e) => setSugarType(e.target.value)}
                        />
                        <label
                          style={{ marginLeft: "10px" }}
                          class="form-check-label"
                          for="Sugared"
                        >
                          Sugared
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          style={{
                            accentColor: "#ff214f",
                            width: "20px",
                            height: "20px",
                          }}
                          value="Sugar Free"
                          type="radio"
                          name="sugartype"
                          id="SugarFree"
                          onChange={(e) => setSugarType(e.target.value)}
                        />
                        <label
                          style={{ marginLeft: "10px" }}
                          class="form-check-label"
                          for="SugarFree"
                        >
                          Sugar Free
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          style={{
                            accentColor: "#ff214f",
                            width: "20px",
                            height: "20px",
                          }}
                          value="Sugar Less"
                          type="radio"
                          name="sugartype"
                          id="Sugarless"
                          onChange={(e) => setSugarType(e.target.value)}
                        />
                        <label
                          style={{ marginLeft: "10px" }}
                          class="form-check-label"
                          for="Sugarless"
                        >
                          Sugar Less
                        </label>
                      </div>
                    </div>
                  </div>

                  <br />
                  <br />
                  <div class="row">
                    <div class="col">
                      Size: <span style={{ color: "#ff0000" }}>*</span>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          value="Small"
                          style={{
                            accentColor: "#ff214f",
                            width: "20px",
                            height: "20px",
                          }}
                          type="radio"
                          name="size"
                          id="small"
                          onChange={(e) => setSize(e.target.value)}
                        />
                        <label
                          style={{ marginLeft: "10px" }}
                          class="form-check-label"
                          for="small"
                        >
                          Small
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          value="Medium"
                          style={{
                            accentColor: "#ff214f",
                            width: "20px",
                            height: "20px",
                          }}
                          type="radio"
                          name="size"
                          id="medium"
                          onChange={(e) => setSize(e.target.value)}
                        />
                        <label
                          style={{ marginLeft: "10px" }}
                          class="form-check-label"
                          for="medium"
                        >
                          Medium
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          value="Large"
                          style={{
                            accentColor: "#ff214f",
                            width: "20px",
                            height: "20px",
                          }}
                          type="radio"
                          name="size"
                          id="large"
                          onChange={(e) => setSize(e.target.value)}
                        />
                        <label
                          style={{ marginLeft: "10px" }}
                          class="form-check-label"
                          for="large"
                        >
                          Large
                        </label>
                      </div>
                    </div>
                  </div>

                  <br />
                  <br />
                  <div class="mb-3 row form-group">
                    <label for="qty" class="col-sm-2 col-form-label">
                      Quantity: <span style={{ color: "#ff0000" }}>*</span>
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="number"
                        min="0"
                        value={quantity}
                        step="1"
                        onChange={(e) => setQuantity(e.target.value)}
                        class="form-control"
                        id="qty"
                      />
                    </div>
                  </div>
                  <br />
                  <br />
                  <div class="row">
                    <div class="col">Ingredients:</div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          style={{
                            accentColor: "#ff214f",
                            width: "20px",
                            height: "20px",
                          }}
                          class="form-check-input"
                          type="checkbox"
                          name="Ingredients"
                          value="Icing"
                          id="ingr1"
                          onChange={(e) => handleCheckbox(e)}
                        />
                        <label
                          class="form-check-label"
                          for="ingr1"
                          style={{ marginLeft: "10px" }}
                        >
                          Icing
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          style={{
                            accentColor: "#ff214f",
                            width: "20px",
                            height: "20px",
                          }}
                          class="form-check-input"
                          type="checkbox"
                          name="Ingredients"
                          value="Frosting"
                          id="ingr2"
                          onChange={(e) => handleCheckbox(e)}
                        />
                        <label
                          class="form-check-label"
                          for="ingr2"
                          style={{ marginLeft: "10px" }}
                        >
                          Frosting
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          style={{
                            accentColor: "#ff214f",
                            width: "20px",
                            height: "20px",
                          }}
                          class="form-check-input"
                          type="checkbox"
                          name="Ingredients"
                          value="Fondant"
                          id="ingr5"
                          onChange={(e) => handleCheckbox(e)}
                        />
                        <label
                          class="form-check-label"
                          for="ingr5"
                          style={{ marginLeft: "10px" }}
                        >
                          Fondant
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col"></div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          style={{
                            accentColor: "#ff214f",
                            width: "20px",
                            height: "20px",
                          }}
                          class="form-check-input"
                          type="checkbox"
                          name="Ingredients"
                          value="Ganache"
                          id="ingr3"
                          onChange={(e) => handleCheckbox(e)}
                        />
                        <label
                          class="form-check-label"
                          for="ingr3"
                          style={{ marginLeft: "10px" }}
                        >
                          Ganache
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          style={{
                            accentColor: "#ff214f",
                            width: "20px",
                            height: "20px",
                          }}
                          class="form-check-input"
                          type="checkbox"
                          name="Ingredients"
                          value="Cashew"
                          id="ingr4"
                          onChange={(e) => handleCheckbox(e)}
                        />
                        <label
                          class="form-check-label"
                          for="ingr4"
                          style={{ marginLeft: "10px" }}
                        >
                          Cashew
                        </label>
                      </div>
                    </div>

                    <div class="col">
                      <div class="form-check">
                        <input
                          style={{
                            accentColor: "#ff214f",
                            width: "20px",
                            height: "20px",
                          }}
                          class="form-check-input"
                          type="checkbox"
                          name="Ingredients"
                          value="Sprinkles"
                          id="ingr6"
                          onChange={(e) => handleCheckbox(e)}
                        />
                        <label
                          style={{ marginLeft: "10px" }}
                          class="form-check-label"
                          for="ingr6"
                        >
                          Sprinkles
                        </label>
                      </div>
                    </div>
                  </div>

                  <br />
                  <br />
                  <div class="row">
                    <div class="col">
                      Flavour: <span style={{ color: "#ff0000" }}>*</span>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          value="Chocolate"
                          style={{
                            accentColor: "#ff214f",
                            width: "20px",
                            height: "20px",
                          }}
                          type="radio"
                          name="flavour"
                          id="choco"
                          onChange={(e) => setFlavour(e.target.value)}
                        />
                        <label
                          style={{ marginLeft: "10px" }}
                          class="form-check-label"
                          for="choco"
                        >
                          Chocolate
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          value="Vanilla"
                          style={{
                            accentColor: "#ff214f",
                            width: "20px",
                            height: "20px",
                          }}
                          type="radio"
                          name="flavour"
                          id="vanilla"
                          onChange={(e) => setFlavour(e.target.value)}
                        />
                        <label
                          style={{ marginLeft: "10px" }}
                          class="form-check-label"
                          for="vanilla"
                        >
                          Vanilla
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          value="Strawberry"
                          style={{
                            accentColor: "#ff214f",
                            width: "20px",
                            height: "20px",
                          }}
                          type="radio"
                          name="flavour"
                          id="straw"
                          onChange={(e) => setFlavour(e.target.value)}
                        />
                        <label
                          style={{ marginLeft: "10px" }}
                          class="form-check-label"
                          for="straw"
                        >
                          Strawberry
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col"></div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          value="Cheese"
                          style={{
                            accentColor: "#ff214f",
                            width: "20px",
                            height: "20px",
                          }}
                          type="radio"
                          name="flavour"
                          id="cheese"
                          onChange={(e) => setFlavour(e.target.value)}
                        />
                        <label
                          style={{ marginLeft: "10px" }}
                          class="form-check-label"
                          for="cheese"
                        >
                          Cheese
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          value="Coffee"
                          style={{
                            accentColor: "#ff214f",
                            width: "20px",
                            height: "20px",
                          }}
                          type="radio"
                          name="flavour"
                          id="coffee"
                          onChange={(e) => setFlavour(e.target.value)}
                        />
                        <label
                          style={{ marginLeft: "10px" }}
                          class="form-check-label"
                          for="coffee"
                        >
                          Coffee
                        </label>
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div class="row">
                    <div class="col">Accessories:</div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          style={{
                            accentColor: "#ff214f",
                            width: "20px",
                            height: "20px",
                          }}
                          class="form-check-input"
                          type="checkbox"
                          name="accessories"
                          value="Candles"
                          id="access1"
                          onChange={(e) => handleCheckbox(e)}
                        />
                        <label
                          class="form-check-label"
                          for="access1"
                          style={{ marginLeft: "10px" }}
                        >
                          Candles
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          style={{
                            accentColor: "#ff214f",
                            width: "20px",
                            height: "20px",
                          }}
                          class="form-check-input"
                          type="checkbox"
                          name="accessories"
                          value="Sparking Candles"
                          id="access2"
                          onChange={(e) => handleCheckbox(e)}
                        />
                        <label
                          class="form-check-label"
                          for="access2"
                          style={{ marginLeft: "10px" }}
                        >
                          Sparking Candles
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          style={{
                            accentColor: "#ff214f",
                            width: "20px",
                            height: "20px",
                          }}
                          class="form-check-input"
                          type="checkbox"
                          name="accessories"
                          value="Utensils"
                          id="access5"
                          onChange={(e) => handleCheckbox(e)}
                        />
                        <label
                          class="form-check-label"
                          for="access5"
                          style={{ marginLeft: "10px" }}
                        >
                          Utensils
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col"></div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          style={{
                            accentColor: "#ff214f",
                            width: "20px",
                            height: "20px",
                          }}
                          class="form-check-input"
                          type="checkbox"
                          name="accessories"
                          value="Boxes"
                          id="access3"
                          onChange={(e) => handleCheckbox(e)}
                        />
                        <label
                          class="form-check-label"
                          for="access3"
                          style={{ marginLeft: "10px" }}
                        >
                          Boxes
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          style={{
                            accentColor: "#ff214f",
                            width: "20px",
                            height: "20px",
                          }}
                          class="form-check-input"
                          type="checkbox"
                          name="accessories"
                          value="Form Spray"
                          id="access4"
                          onChange={(e) => handleCheckbox(e)}
                        />
                        <label
                          class="form-check-label"
                          for="access4"
                          style={{ marginLeft: "10px" }}
                        >
                          Form Spray
                        </label>
                      </div>
                    </div>

                    <div class="col">
                      <div class="form-check">
                        <input
                          style={{
                            accentColor: "#ff214f",
                            width: "20px",
                            height: "20px",
                          }}
                          class="form-check-input"
                          type="checkbox"
                          name="accessories"
                          value="Balloons"
                          id="access6"
                          onChange={(e) => handleCheckbox(e)}
                        />
                        <label
                          style={{ marginLeft: "10px" }}
                          class="form-check-label"
                          for="access6"
                        >
                          Balloons
                        </label>
                      </div>
                    </div>
                  </div>

                  <br />
                  <br />
                  <div class="row">
                    <div class="col">Text to be Displayed on the Cake:</div>
                    <div class="col">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput2"
                          value={cakeText}
                          placeholder="Happy Birthday John !"
                          onChange={(e) => setCakeText(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <Box sx={{ mb: 2 }}>
                    <div>
                      <div>
                        <button
                          className="btn btn-primary"
                          onClick={cakeSubmit}
                          style={{ margin: "30px 30px 30px 0px" }}
                        >
                          Review Order
                        </button>
                      </div>
                      <Modal
                        open={open}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                          >
                            Review + Create
                          </Typography>
                          <Typography
                            id="modal-modal-description"
                            sx={{ mt: 2 }}
                          >
                            <div class="row">
                              <div class="col">
                                <b>Cake type:</b>
                              </div>
                              <div class="col">{cakeType}</div>
                            </div>
                            <div class="row">
                              <div class="col">
                                <b>Size:</b>
                              </div>
                              <div class="col">{size}</div>
                            </div>
                            <div class="row">
                              <div class="col">
                                <b>Flavour:</b>
                              </div>
                              <div class="col">{flavour}</div>
                            </div>
                            <div class="row">
                              <div class="col">
                                <b>Sugar Type:</b>
                              </div>
                              <div class="col">{sugarType}</div>
                            </div>
                            <div class="row">
                              <div class="col">
                                <b>Quatity:</b>
                              </div>
                              <div class="col">{quantity}</div>
                            </div>
                            <div class="row">
                              <div class="col">
                                <b>Text on the Cake:</b>
                              </div>
                              <div class="col">{cakeText}</div>
                            </div>
                            <div class="row">
                              <div class="col">
                                <b>Ingredients:</b>
                              </div>
                              <div class="col">{ingredientList.toString()}</div>
                            </div>
                            <div class="row">
                              <div class="col">
                                <b>Accessories:</b>
                              </div>
                              <div class="col">{accessoryList.toString()}</div>
                            </div>
                          </Typography>
                          <div>
                            <button
                              className="btn btn-primary"
                              onClick={handleNext}
                              style={{ margin: "30px 30px 0px 0px" }}
                            >
                              Confirm Order
                            </button>
                            <button
                              className="btn btn-outline-primary"
                              onClick={handleClose}
                              style={{ margin: "30px 30px 0px 0px" }}
                            >
                              Back
                            </button>
                          </div>
                        </Box>
                      </Modal>
                    </div>
                  </Box>
                </div>
              </StepContent>
            </Step>

            <Step key={1}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                <h5 id="stp2" style={{ color: "white" }}>
                  <u>Enter Delivery Information</u>
                </h5>
              </StepLabel>
              <StepContent>
                <div className="form-group" style={{ marginTop: "40px" }}>
                  <div class="row">
                    <div class="col">
                      Needed Date: <span style={{ color: "#ff0000" }}>*</span>
                    </div>
                    <div class="col">
                      <div className="form-group">
                        <input
                          type="date"
                          className="form-control"
                          id="exampleFormControlInput3"
                          value={deliverDate}
                          onChange={(e) => setDeliverDate(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <br />
                  <br />

                  <div class="row">
                    <div class="col">
                      Delivery Option:{" "}
                      <span style={{ color: "#ff0000" }}>*</span>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          style={{
                            accentColor: "#ff214f",
                            width: "20px",
                            height: "20px",
                          }}
                          type="radio"
                          value="In-Store Pickup"
                          onChange={(e) => setDeliverType(e.target.value)}
                          name="deltype"
                          id="deltype1"
                        />
                        <label
                          style={{ marginLeft: "10px" }}
                          class="form-check-label"
                          for="deltype1"
                        >
                          In-Store Pickup
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          style={{
                            accentColor: "#ff214f",
                            width: "20px",
                            height: "20px",
                          }}
                          type="radio"
                          value="Deliver to My Address"
                          onChange={(e) => setDeliverType(e.target.value)}
                          name="deltype"
                          id="deltype2"
                        />
                        <label
                          style={{ marginLeft: "10px" }}
                          class="form-check-label"
                          for="deltype2"
                        >
                          Deliver to My Address
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          style={{
                            accentColor: "#ff214f",
                            width: "20px",
                            height: "20px",
                          }}
                          type="radio"
                          value="Enter an Address to be Delivered"
                          onChange={(e) => setDeliverType(e.target.value)}
                          name="deltype"
                          id="deltype3"
                        />
                        <label
                          style={{ marginLeft: "10px" }}
                          class="form-check-label"
                          for="deltype3"
                        >
                          Enter an Address to be Delivered
                        </label>
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />

                  {deliverType === "Enter an Address to be Delivered" ? (
                    <>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput4"
                          placeholder="Address Line 1 *"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>

                      <div class="row">
                        <div class="col">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="exampleFormControlInput6"
                              placeholder="City *"
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                            />
                          </div>
                        </div>
                        <div class="col">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="exampleFormControlInput7"
                              placeholder="State/Province *"
                              value={province}
                              onChange={(e) => setProvince(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput8"
                          placeholder="Contact Number *"
                          value={pnumber}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  <br />
                  <br />

                  <div class="row">
                    <div class="col">
                      Payment Option:{" "}
                      <span style={{ color: "#ff0000" }}>*</span>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          style={{
                            accentColor: "#ff214f",
                            width: "20px",
                            height: "20px",
                          }}
                          type="radio"
                          value="Cash-on Delivery"
                          onChange={(e) => setPaymentType(e.target.value)}
                          name="paytype"
                          id="paytype1"
                        />
                        <label
                          style={{ marginLeft: "10px" }}
                          class="form-check-label"
                          for="paytype1"
                        >
                          Cash-on Delivery
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          style={{
                            accentColor: "#ff214f",
                            width: "20px",
                            height: "20px",
                          }}
                          type="radio"
                          value="Pay at Store"
                          onChange={(e) => setPaymentType(e.target.value)}
                          name="paytype"
                          id="paytype2"
                        />
                        <label
                          style={{ marginLeft: "10px" }}
                          class="form-check-label"
                          for="paytype2"
                        >
                          Pay at Store
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          style={{
                            accentColor: "#ff214f",
                            width: "20px",
                            height: "20px",
                          }}
                          type="radio"
                          value="Credit/Debit Card"
                          onChange={(e) => setPaymentType(e.target.value)}
                          name="paytype"
                          id="paytype3"
                        />
                        <label
                          style={{ marginLeft: "10px" }}
                          class="form-check-label"
                          for="paytype3"
                        >
                          Credit/Debit Card
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <Box sx={{ mb: 2 }}>
                  <div>
                    <button
                      className="btn btn-primary"
                      onClick={deliverSubmit}
                      style={{ margin: "30px 30px 30px 0px" }}
                    >
                      <i className="ti-thumb-up pr-1" />
                      Confirm Order
                    </button>
                  </div>
                </Box>
              </StepContent>
            </Step>

            <Step key={2}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                <h5 id="stp3" style={{ color: "white" }}>
                  <u>Order Placed Successfully!</u>
                </h5>
              </StepLabel>
              <StepContent>
                <div
                  className="alert alert-success alert-dismissible fade show"
                  role="alert"
                  style={{ marginTop: "40px" }}
                >
                  Your Order has been Placed Successfully.
                  <br />
                  Order ID : #{orderid}
                  <br />
                  <br />
                  The seller will get back to you with the quatation. Check the
                  order states for any update.
                  <br />
                  Meanwhile you can find your order from{" "}
                  <a href={`/displayOrder/id=${orderid}`}>HERE</a>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
              </StepContent>
            </Step>
          </Stepper>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
