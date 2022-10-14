import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav
        className="custom-navbar navbar navbar-expand-lg navbar-dark fixed-bottom"
        data-spy="affix"
        data-offset-top="10"
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/addesign">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXB4h9X2OXAe6MR0mog9cGznvgHObiqW68sI-IJ53lVIsf7_Nmff5f&usqp=CAU"
                  class="rounded-circle"
                  height="30"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </Link>
              {/* <Link to="/tabview">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/essenstial-ultimate-ui/64/avatar-512.png"
                  class="rounded-circle"
                  height="30"
                  style={{ marginLeft: 10 }}
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </Link> */}
              <Link to="/Acorders">
                <img
                  src="data:image/jpeg;base64,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"
                  class="rounded-circle"
                  height="30"
                  style={{ marginLeft: 10 }}
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </Link>

              <Link to="/sellerAllOrders">
                <img
                  src="https://thumbs.dreamstime.com/b/purchase-history-vector-icon-symbol-isolated-white-background-196229674.jpg"
                  class="rounded-circle"
                  height="30"
                  style={{ marginLeft: 10 }}
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </Link>
              
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
