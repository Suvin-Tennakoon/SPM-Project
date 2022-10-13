import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "./firebase";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./phoneinput.css";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const PhoneSignUp = (props) => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const [openSnak, setOpenSnak] = useState(false);
  const [severity, setseverity] = useState("error");

  const handleCloseSnak = (event, reason) => {
    setOpenSnak(false);
  };

  function setUpRecaptha(number) {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  }

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined) {
      setError("Please enter a valid phone number!");
      setOpenSnak(true);
      return;
    }
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
      setOpenSnak(true);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      setseverity("success");
      setError("Phone Number Verified Successfully");
      setOpenSnak(true);
      props.sendData(number);
    } catch (err) {
      setError(err.message);
      setOpenSnak(true);
    }
  };

  return (
    <>
      <Snackbar
        open={openSnak}
        autoHideDuration={10000}
        onClose={handleCloseSnak}
      >
        <Alert severity={severity} sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>

      <form onSubmit={getOtp}>
        <div className="mb-3 form-group">
          <PhoneInput
            id="phninp"
            defaultCountry="LK"
            disabled={flag}
            value={number}
            onChange={setNumber}
            placeholder="Enter Phone Number *"
          />
          <div style={{ marginTop: "20px" }} id="recaptcha-container"></div>
        </div>
        <div className="button-right">
          <button
            type="submit"
            className="btn btn-secondary"
            style={{ display: flag ? "none" : "block" }}
          >
            Send OTP
          </button>
        </div>
      </form>

      <form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
        <div className="mb-3 form-group">
          <input
            type="otp"
            className="form-control"
            placeholder="Enter OTP"
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        <div className="button-right">
          <button type="submit" className="btn btn-secondary">
            Verify
          </button>
        </div>
      </form>
    </>
  );
};

export default PhoneSignUp;
