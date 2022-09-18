import React from "react";
import Footer from "../Footer/Footer";

export default function OrderProgress() {
  return (
    <>
      <div
        class="card mb-3"
        style={{
          maxWidth: "700px",
          backgroundColor: "#343a40",
          margin: "170px auto",
        }}
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body" style={{ textAlign: "center" }}>
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
