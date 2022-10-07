import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="custom-navbar navbar navbar-expand-lg navbar-dark fixed-top"
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
          <li className="nav-item active">
            <a className="nav-link" href="http://localhost:3000/displaydesign">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://localhost:3000/Acorders">
              Placed Orders
            </a>
          </li>
          {/* <li className="nav-item">
                    <a className="nav-link" href="#gallary">Gallary</a>
                </li> */}
        </ul>
        <a className="navbar-brand m-auto" href="#">
          <img src="assets/imgs/logo.png" className="brand-img" alt=""></img>
          <span className="brand-txt">Cake Hut</span>
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/addesign">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXB4h9X2OXAe6MR0mog9cGznvgHObiqW68sI-IJ53lVIsf7_Nmff5f&usqp=CAU"
                class="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </Link>
            <Link to ="/tabview">
            <img
              src="https://cdn2.iconfinder.com/data/icons/essenstial-ultimate-ui/64/avatar-512.png"
              class="rounded-circle"
              height="25"
              style={{marginLeft:70}}
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
