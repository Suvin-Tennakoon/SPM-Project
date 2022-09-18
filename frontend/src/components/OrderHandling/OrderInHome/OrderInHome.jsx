import React from "react";

export default function OrderInHome() {
  return (
    <div
      className="container-fluid has-bg-overlay text-center text-light has-height-lg middle-items"
      id="placeorder"
    >
      <div className="">
        <h2 className="section-title mb-5">Order a Cake</h2>

        <a
          href="/placeorder"
          className="btn btn-lg btn-primary"
          id="rounded-btn"
        >
          PLACE ORDER
        </a>
      </div>
    </div>
  );
}
