import { useParams } from "react-router-dom";
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
import CakeIcon from "@mui/icons-material/Cake";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import Footer from "../Footer/Footer";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import "../PlaceOrder/placeorder.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { BACKEND_DOMAIN } from "../Domain";
import { useEffect } from "react";
import {
  Backdrop,
  CircularProgress,
  Link,
  Modal,
  Typography,
} from "@mui/material";

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

export default function UpdateOrder() {
  const { id } = useParams();
  const [image, setImage] = React.useState("");
  const [cakeType, setCakeType] = useState("");
  const [sugarType, setSugarType] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [flavour, setFlavour] = useState("");
  const [cakeText, setCakeText] = useState("");
  const [accessoryList, setAccessories] = useState([]);
  const [ingredientList, setIngredients] = useState([]);

  const [open, setOpen] = React.useState(false);
  const [opendel, setOpenDel] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [errormsg, setErrormsg] = useState("");
  const [openSnak, setOpenSnak] = useState(false);
  const [openBkdrop, setOpenBkdrop] = useState(false);

  const handleCloseSnak = (event, reason) => {
    setOpenSnak(false);
  };

  const handleImage = (e) => {
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

  const reviewUpdate = () => {
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

  const deleteOrder = () => {
    axios
      .delete(BACKEND_DOMAIN + "/api/orders/deletecustomerorder/" + id)
      .then((res) => {
        alert(res.data);
        window.location = "/";
      })
      .catch((err) => {
        alert(err);
      });
  };

  const cakeSubmit = () => {
    setOpenBkdrop(true);
    setOpen(false);

    const data = {
      cakeType: cakeType,
      size: size,
      flavour: flavour,
      sugar: sugarType,
      quantity: quantity,
      cakeText: cakeText,
      accessories: accessoryList,
      ingredients: ingredientList,
      cakeImage: image,
    };
    axios
      .put(BACKEND_DOMAIN + "/api/orders/updateOrder/" + id, data)
      .then((res) => {
        console.log(res.data);
        window.location = "/orderProgress/" + id;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios.get(BACKEND_DOMAIN + "/api/orders/getOrderData/" + id).then((res) => {
      console.log(res.data);
      setImage(res.data.cakeImage);
      setCakeType(res.data.cakeType);
      setSugarType(res.data.sugar);
      setSize(res.data.size);
      setQuantity(res.data.quantity);
      setFlavour(res.data.flavour);
      setCakeText(res.data.cakeText);
      setAccessories(res.data.accessories);
      setIngredients(res.data.ingredients);
    });
  }, []);

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBkdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar
        open={openSnak}
        autoHideDuration={10000}
        onClose={handleCloseSnak}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          {errormsg}
        </Alert>
      </Snackbar>

      <Container sx={{ mt: "150px", mb: "150px" }}>
        <Box sx={{ width: { md: "80%", sm: "100%" } }}>
          <Stepper
            activeStep={0}
            orientation="vertical"
            id="orderstepper"
            className="card bg-transparent border my-3 my-md-0"
          >
            <Step key={0}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                <h5 id="stp1" style={{ color: "white" }}>
                  <u>Edit Order Specifications</u>
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
                    <option
                      value="Celebration Cake"
                      selected={cakeType === "Celebration Cake"}
                    >
                      Celebration Cakes (Birthday/Anniversary/Graduation, etc.)
                    </option>
                    <option
                      value="Wedding Cake"
                      selected={cakeType === "Wedding Cake"}
                    >
                      Wedding Cakes
                    </option>
                    <option
                      value="Traditional Cake"
                      selected={cakeType === "Traditional Cake"}
                    >
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
                          src={image}
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
                          checked={sugarType === "Sugared"}
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
                          checked={sugarType === "Sugar Free"}
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
                          checked={sugarType === "Sugar Less"}
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
                          checked={size === "Small"}
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
                          checked={size === "Medium"}
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
                          checked={size === "Large"}
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
                          checked={ingredientList?.includes("Icing")}
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
                          checked={ingredientList?.includes("Frosting")}
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
                          checked={ingredientList?.includes("Fondant")}
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
                          checked={ingredientList?.includes("Ganache")}
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
                          checked={ingredientList?.includes("Cashew")}
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
                          checked={ingredientList?.includes("Sprinkles")}
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
                          checked={flavour === "Chocolate"}
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
                          checked={flavour === "Vanilla"}
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
                          checked={flavour === "Strawberry"}
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
                          checked={flavour === "Cheese"}
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
                          checked={flavour === "Coffee"}
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
                          checked={accessoryList?.includes("Candles")}
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
                          checked={accessoryList?.includes("Sparking Candles")}
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
                          checked={accessoryList?.includes("Utensils")}
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
                          checked={accessoryList?.includes("Boxes")}
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
                          checked={accessoryList?.includes("Form Spray")}
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
                          checked={accessoryList?.includes("Balloons")}
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

                  <div className="row" style={{ marginTop: "40px" }}>
                    <div className="col">
                      <button
                        className="btn btn-primary"
                        onClick={reviewUpdate}
                        style={{ margin: "30px 30px 30px 0px" }}
                      >
                        Update Order
                      </button>
                    </div>
                    <div className="col" style={{ textAlign: "right" }}>
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => setOpenDel(true)}
                        style={{ margin: "30px 30px 30px 0px" }}
                      >
                        <DeleteOutlineIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </StepContent>
            </Step>
          </Stepper>
        </Box>
      </Container>
      <Modal
        open={opendel}
        onClose={() => setOpenDel(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="row justify-content-center">
            <div className="col">
              <ul
                className="nav nav-pills nav-justified mb-3"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={deleteOrder}
                  >
                    Confirm Delete
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() => setOpenDel(false)}
                  >
                    Cancel
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </Box>
      </Modal>

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Review + Update
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
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
          <br />
          <p
            style={{
              backgroundColor: "yellow",
              color: "black",
              fontWeight: "bold",
              padding: "10px",
            }}
          >
            * Remember: Updating the order specifications will result in order
            to go back to initial stage.
          </p>
          <div>
            <button
              className="btn btn-primary"
              onClick={cakeSubmit}
              style={{ margin: "30px 30px 0px 0px" }}
            >
              Confirm Order
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={handleClose}
              style={{ margin: "30px 30px 0px 0px" }}
            >
              Back
            </button>
          </div>
        </Box>
      </Modal>
      <Footer />
    </>
  );
}
