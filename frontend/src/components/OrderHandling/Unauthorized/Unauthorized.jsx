import React from "react";
import "./unauth.css";
// import "./unauth.js";

export default function Unauthorized() {
  return (
    <div className="htmlsmt">
      <div className="bodysmt">
        <div className="noisesmt" />
        <div className="overlaysmt" />
        <div className="terminalsmt">
          <h1>
            Error <span className="errorcodesmt">401</span>
          </h1>
          <p className="outputsmt">
            NOT AUTHORIZED ! <br></br>This page is not publically available. To
            access it please login first.
          </p>
          <p className="outputsmt">
            Please try to{" "}
            <a className="asmt" href="javascript:history.back()">
              go back
            </a>{" "}
            or{" "}
            <a className="asmt" href="/">
              return to the homepage
            </a>
            .
          </p>
          <p className="outputsmt">Good luck.</p>
        </div>
      </div>
    </div>
  );
}
