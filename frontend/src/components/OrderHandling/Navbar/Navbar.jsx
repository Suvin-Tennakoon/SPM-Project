import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function NavBar() {
  const navigate = useNavigate();

  let accountType = localStorage.getItem("AccountType");

  const handleLogOut = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("AccountType");
    localStorage.removeItem("Email");
    localStorage.removeItem("Status");
    localStorage.removeItem("Id");
    // alert('Logged Out...');
    Swal.fire({
      icon: "success",
      title: "Logged Out!",
    });
    navigate("/");
  };

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
          <li className="nav-item">
            <a className="nav-link" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#gallary">
              Gallary
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#placeorder">
              Place Order
            </a>
          </li>
        </ul>
        <a className="navbar-brand m-auto" href="/">
          <img src="/assets/imgs/logo.png" className="brand-img" alt=""></img>
          <span className="brand-txt">Cake Hut</span>
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#blog">
              Promo<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#testmonial">
              Reviews
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/signup"
              style={{ display: !accountType ? "flex" : "none" }}
              className="btn btn-primary btn-sm ml-4"
            >
              Sign Up
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/login"
              style={{ display: !accountType ? "flex" : "none" }}
              className="btn btn-primary btn-sm ml-4"
            >
              Login
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={handleLogOut}
              style={{ display: accountType ? "flex" : "none" }}
              className="btn btn-primary btn-sm ml-4"
            >
              LogOut
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
