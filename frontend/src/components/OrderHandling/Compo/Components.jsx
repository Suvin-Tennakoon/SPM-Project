import React from "react";

export default function Compo() {
    return (
        <>
  {/* Page Header */}
  <header className="header header-mini">
    <div className="header-title">Components</div>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="/">Home</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Components
        </li>
      </ol>
    </nav>
  </header>{" "}
  {/* End Of Page Header */}
  {/* main content */}
  <div className="container">
    {/* Buttons */}
    <h3 className="mt-5">Buttons</h3>
    <hr />
    <h6 className="section-secondary-title">Styles :</h6>
    <button className="btn btn-primary">Default</button>
    <button className="btn btn-outline-primary">outline</button>
    <button className="btn btn-primary rounded">Rounded</button>
    <button className="btn btn-primary rounded">
      <i className="ti-thumb-up pr-1" /> With Icon
    </button>
    <button className="btn btn-primary circle">
      <i className="ti-heart" />
    </button>
    <h6 className="section-secondary-title mt-5">Sizes :</h6>
    <button className="btn btn-primary btn-lg">Large</button>
    <button className="btn btn-primary ">Regular</button>
    <button className="btn btn-primary btn-sm">Small</button>
    <button className="btn btn-primary w-sm ml-3">w-sm</button>
    <button className="btn btn-primary w-md">w-md</button>
    <button className="btn btn-primary w-lg">w-lg</button>
    <h6 className="section-secondary-title mt-5">Colors :</h6>
    <button type="button" className="btn btn-primary">
      Primary
    </button>
    <button type="button" className="btn btn-secondary">
      Secondary
    </button>
    <button type="button" className="btn btn-success">
      Success
    </button>
    <button type="button" className="btn btn-danger">
      Danger
    </button>
    <button type="button" className="btn btn-warning">
      Warning
    </button>
    <button type="button" className="btn btn-info">
      Info
    </button>
    <button type="button" className="btn btn-light">
      Light
    </button>
    <button type="button" className="btn btn-dark">
      Dark
    </button>
    <h6 className="section-secondary-title mt-5">Buttons Tags :</h6>
    <button className="btn btn-primary" type="submit">
      Button
    </button>
    <input className="btn btn-primary" type="button" defaultValue="Input" />
    <input className="btn btn-primary" type="submit" defaultValue="Submit" />
    <input className="btn btn-primary" type="reset" defaultValue="Reset" />
    {/* devider */}
    <div className="py-5" />
    {/* Inputs */}
    <h3>Inputs</h3>
    <hr />
    <div className="row mt-5">
      <div className="col-md-6">
        <h6 className="section-secondary-title">Form controls :</h6>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Email address"
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Date"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Readonly input here…"
            readOnly=""
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            id="disabledInput"
            type="text"
            placeholder="Disabled input here..."
            disabled=""
          />
        </div>
        <div className="form-group">
          <select className="form-control" id="exampleFormControlSelect1">
            <option>Example select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <select
            multiple=""
            className="form-control"
            id="exampleFormControlSelect2"
          >
            <option>Example multiple select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            placeholder="Example textarea"
            defaultValue={""}
          />
        </div>
      </div>
      <div className="col-md-6">
        <h6 className="section-secondary-title">Sizes :</h6>
        <div className="form-group">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder=".form-control-lg"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Default input"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control form-control-sm"
            type="text"
            placeholder=".form-control-sm"
          />
        </div>
      </div>
    </div>{" "}
    {/* end of inputs */}
    {/* devider */}
    <div className="py-5" />
    {/* Dropdowns */}
    <h3 className="components-section-title font-weight-normal">Dropdowns</h3>
    <hr />
    <div className="dropdown d-inline-block">
      <button
        className="btn btn-outline-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown button
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">
          Action
        </a>
        <a className="dropdown-item" href="#">
          Another action
        </a>
        <a className="dropdown-item" href="#">
          Something else here
        </a>
      </div>
    </div>
    <div className="dropdown d-inline-block">
      <a
        className="btn btn-outline-secondary dropdown-toggle"
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown link
      </a>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <a className="dropdown-item" href="#">
          Action
        </a>
        <a className="dropdown-item" href="#">
          Another action
        </a>
        <a className="dropdown-item" href="#">
          Something else here
        </a>
      </div>
    </div>
    <div className="btn-group">
      <button type="button" className="btn btn-outline-secondary">
        Split
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">
          Action
        </a>
        <a className="dropdown-item" href="#">
          Another action
        </a>
        <a className="dropdown-item" href="#">
          Something else here
        </a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">
          Separated link
        </a>
      </div>
    </div>
    <div className="btn-group">
      <button
        className="btn btn-outline-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Form Dropdown
      </button>
      <div className="dropdown-menu form">
        <form className="px-4 py-3">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleDropdownFormEmail1"
              placeholder="email@example.com"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="exampleDropdownFormPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="dropdownCheck"
            />
            <label className="form-check-label" htmlFor="dropdownCheck">
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Sign in
          </button>
        </form>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">
          <small>New around here? Sign up</small>
        </a>
        <a className="dropdown-item" href="#">
          <small>Forgot password?</small>
        </a>
      </div>
    </div>
    <h6 className="section-secondary-title mt-5">Directions :</h6>
    <div className="btn-group dropup">
      <button
        type="button"
        className="btn btn-outline-secondary dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropup
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">
          Action
        </a>
        <a className="dropdown-item" href="#">
          Another action
        </a>
        <a className="dropdown-item" href="#">
          Something else here
        </a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">
          Separated link
        </a>
      </div>
    </div>
    <div className="btn-group dropright">
      <button
        type="button"
        className="btn btn-outline-secondary dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropup
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">
          Action
        </a>
        <a className="dropdown-item" href="#">
          Another action
        </a>
        <a className="dropdown-item" href="#">
          Something else here
        </a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">
          Separated link
        </a>
      </div>
    </div>
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-outline-secondary dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">
          Action
        </a>
        <a className="dropdown-item" href="#">
          Another action
        </a>
        <a className="dropdown-item" href="#">
          Something else here
        </a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">
          Separated link
        </a>
      </div>
    </div>
    <div className="btn-group dropleft">
      <button
        type="button"
        className="btn btn-outline-secondary dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">
          Action
        </a>
        <a className="dropdown-item" href="#">
          Another action
        </a>
        <a className="dropdown-item" href="#">
          Something else here
        </a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">
          Separated link
        </a>
      </div>
    </div>{" "}
    {/* end of Dropdowns */}
    {/* devider */}
    <div className="py-5" />
    {/* navbars */}
    <h3 className="components-section-title font-weight-normal mt-5">
      Navigations
    </h3>
    <hr />
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary rounded shadow mb-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          Primary Color
        </a>
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service">
                Our Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">
                Our Team
              </a>
            </li>
            <li className="nav-item">
              <a href="#book-table" className="ml-4 mt-1 btn btn-light btn-sm">
                navbar button
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav className="navbar navbar-expand-sm navbar-dark bg-secondary rounded shadow mb-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          Secondary Color
        </a>
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service">
                Our Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">
                Our Team
              </a>
            </li>
            <li className="nav-item">
              <a href="#book-table" className="ml-4 mt-1 btn btn-light btn-sm">
                navbar button
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav className="navbar navbar-expand-sm navbar-dark bg-success rounded shadow mb-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          Success Color
        </a>
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service">
                Our Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">
                Our Team
              </a>
            </li>
            <li className="nav-item">
              <a href="#book-table" className="ml-4 mt-1 btn btn-light btn-sm">
                navbar button
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav className="navbar navbar-expand-sm navbar-dark bg-info rounded shadow mb-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          Info Color
        </a>
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service">
                Our Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">
                Our Team
              </a>
            </li>
            <li className="nav-item">
              <a href="#book-table" className="ml-4 mt-1 btn btn-light btn-sm">
                navbar button
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav className="navbar navbar-expand-sm navbar-dark bg-warning rounded shadow mb-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          Warning Color
        </a>
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service">
                Our Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">
                Our Team
              </a>
            </li>
            <li className="nav-item">
              <a href="#book-table" className="ml-4 mt-1 btn btn-light btn-sm">
                navbar button
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger rounded shadow mb-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          Danger Color
        </a>
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service">
                Our Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">
                Our Team
              </a>
            </li>
            <li className="nav-item">
              <a href="#book-table" className="ml-4 mt-1 btn btn-light btn-sm">
                navbar button
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark rounded shadow mb-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          Dark Color
        </a>
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service">
                Our Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">
                Our Team
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#book-table"
                className="ml-4 mt-1 btn btn-primary btn-sm"
              >
                navbar button
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav className="navbar navbar-expand-sm navbar-light bg-light rounded shadow mb-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          Dark Color
        </a>
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service">
                Our Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">
                Our Team
              </a>
            </li>
            <li className="nav-item">
              <a href="#book-table" className="ml-4 mt-1 btn btn-dark btn-sm">
                navbar button
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* End of navbars */}
    {/* devider */}
    <div className="py-5" />
    {/* progress bars */}
    <div className="row justify-content-between">
      <div className="col-md-5">
        <h3 className="components-section-title font-weight-normal mt-5">
          Progress Bars :
        </h3>
        <hr />
        <small>Default: </small>
        <div className="progress mt-2 mb-3">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "90%" }}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <span>90%</span>
          </div>
        </div>
        <small>Success:</small>
        <div className="progress mt-2 mb-3">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: "90%" }}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <span>90%</span>
          </div>
        </div>
        <small>Danger:</small>
        <div className="progress mt-2 mb-3">
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            style={{ width: "90%" }}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <span>90%</span>
          </div>
        </div>
        <small>Warning:</small>
        <div className="progress mt-2 mb-3">
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{ width: "90%" }}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <span>90%</span>
          </div>
        </div>
        <small>Info:</small>
        <div className="progress mt-2 mb-3">
          <div
            className="progress-bar bg-info"
            role="progressbar"
            style={{ width: "90%" }}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <span>90%</span>
          </div>
        </div>
        <small>Dark:</small>
        <div className="progress mt-2 mb-3">
          <div
            className="progress-bar bg-dark"
            role="progressbar"
            style={{ width: "90%" }}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <span>90%</span>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h3 className="components-section-title font-weight-normal mt-5">
          Paginations :
        </h3>
        <hr />
        <nav aria-label="Page navigation example">
          <ul className="pagination pagination-sm">
            <li className="page-item">
              <a className="page-link" href="#">
                <i className="ti-angle-double-left" />
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                4
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                5
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                <i className="ti-angle-double-right" />
              </a>
            </li>
          </ul>
        </nav>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                <i className="ti-angle-double-left" />
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                4
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                5
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                <i className="ti-angle-double-right" />
              </a>
            </li>
          </ul>
        </nav>
        <nav aria-label="Page navigation example">
          <ul className="pagination pagination-lg">
            <li className="page-item">
              <a className="page-link" href="#">
                <i className="ti-angle-double-left" />
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                4
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                5
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                <i className="ti-angle-double-right" />
              </a>
            </li>
          </ul>
        </nav>
        {/* Badges */}
        <h3 className="components-section-title font-weight-normal mt-5">
          Badges :
        </h3>
        <hr />
        <span className="badge badge-primary">Primary</span>
        <span className="badge badge-secondary">Secondary</span>
        <span className="badge badge-success">Success</span>
        <span className="badge badge-danger">Danger</span>
        <span className="badge badge-warning">Warning</span>
        <span className="badge badge-info">Info</span>
        <span className="badge badge-light">Light</span>
        <span className="badge badge-dark">Dark</span>
        <h6 className="section-secondary-title mt-4 mb-2">Badge Pills :</h6>
        <span className="badge badge-pill badge-primary">Primary</span>
        <span className="badge badge-pill badge-secondary">Secondary</span>
        <span className="badge badge-pill badge-success">Success</span>
        <span className="badge badge-pill badge-danger">Danger</span>
        <span className="badge badge-pill badge-warning">Warning</span>
        <span className="badge badge-pill badge-info">Info</span>
        <span className="badge badge-pill badge-light">Light</span>
        <span className="badge badge-pill badge-dark">Dark</span>
      </div>
    </div>{" "}
    {/* End of Progress bars */}
    {/* devider */}
    <div className="py-5" />
    {/* Alerts */}
    <h3 className="components-section-title font-weight-normal mt-5">
      Alerts :
    </h3>
    <hr />
    <div
      className="alert alert-primary alert-dismissible fade show"
      role="alert"
    >
      A simple primary alert—check it out!
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>
    <div
      className="alert alert-secondary alert-dismissible fade show"
      role="alert"
    >
      A simple secondary alert—check it out!
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>
    <div
      className="alert alert-success alert-dismissible fade show"
      role="alert"
    >
      A simple success alert—check it out!
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>
    <div
      className="alert alert-danger alert-dismissible fade show"
      role="alert"
    >
      A simple danger alert—check it out!
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      A simple warning alert—check it out!
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>
    <div className="alert alert-info alert-dismissible fade show" role="alert">
      A simple info alert—check it out!
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>
    <div className="alert alert-dark alert-dismissible fade show" role="alert">
      A simple dark alert—check it out!
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>
    {/* end of alerts */}
    {/* devider */}
    <div className="py-5" />
    {/* tables */}
    <h3 className="components-section-title">Tables</h3>
    <hr />
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
    <h6 className="section-secondary-title mt-5">Striped rows :</h6>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
    <h6 className="section-secondary-title mt-5">Bordred :</h6>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
    {/* end of tables */}
    {/* devider */}
    <div className="py-5" />
    {/* typography */}
    <h3 className="components-section-title">Typography</h3>
    <hr />
    <table className="table table-borderless v-align-center">
      <tbody>
        <tr>
          <td>
            <p>
              <code className="highlighter-rouge">
                &lt;h1&gt;&lt;/h1&gt; || .h1
              </code>
            </p>
          </td>
          <td className="w-75">
            <span className="h1">h1. Bootstrap heading</span>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <code className="highlighter-rouge">
                &lt;h2&gt;&lt;/h2&gt; || .h2
              </code>
            </p>
          </td>
          <td>
            <span className="h2">h2. Bootstrap heading</span>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <code className="highlighter-rouge">
                &lt;h3&gt;&lt;/h3&gt; || .h3
              </code>
            </p>
          </td>
          <td>
            <span className="h3">h3. Bootstrap heading</span>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <code className="highlighter-rouge">
                &lt;h4&gt;&lt;/h4&gt; || .h4
              </code>
            </p>
          </td>
          <td>
            <span className="h4">h4. Bootstrap heading</span>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <code className="highlighter-rouge">
                &lt;h5&gt;&lt;/h5&gt; || .h5
              </code>
            </p>
          </td>
          <td>
            <span className="h5">h5. Bootstrap heading</span>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <code className="highlighter-rouge">
                &lt;h6&gt;&lt;/h6&gt; || .h6
              </code>
            </p>
          </td>
          <td>
            <span className="h6">h6. Bootstrap heading</span>
          </td>
        </tr>
        <tr>
          <td>
            <p className="font-weight-bold text-muted">Paragraph :</p>
          </td>
          <td>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
              explicabo ab sed voluptas odit hic obcaecati qui omnis.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p className="font-weight-bold text-muted">BlockQuote :</p>
          </td>
          <td>
            <blockquote className="blockquote">
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </td>
        </tr>
        <tr>
          <td>
            <p className="font-weight-bold text-muted">Ordred List :</p>
          </td>
          <td>
            <ol>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>
                Nulla volutpat aliquam velit
                <ul>
                  <li>Phasellus iaculis neque</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Eget porttitor lorem</li>
            </ol>
          </td>
        </tr>
        <tr>
          <td>
            <p className="font-weight-bold text-muted">Unordred List :</p>
          </td>
          <td>
            <ul>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>
                Nulla volutpat aliquam velit
                <ul>
                  <li>Phasellus iaculis neque</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Eget porttitor lorem</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <p className="font-weight-bold text-muted">Unstyled List :</p>
          </td>
          <td>
            <ul className="list-unstyled">
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>
                Nulla volutpat aliquam velit
                <ul>
                  <li>Phasellus iaculis neque</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Eget porttitor lorem</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td className="font-weight-bold text-muted">Description lists : </td>
          <td>
            <dl className="row">
              <dt className="col-sm-3">Euismod</dt>
              <dd className="col-sm-9">
                <p>
                  Vestibulum id ligula porta felis euismod semper eget lacinia
                  odio.
                </p>
              </dd>
              <dt className="col-sm-3">Malesuada porta</dt>
              <dd className="col-sm-9">
                Etiam porta sem malesuada magna mollis euismod.
              </dd>
              <dt className="col-sm-3 text-truncate">
                Truncated term is truncated
              </dt>
              <dd className="col-sm-9">
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </dd>
              <dt className="col-sm-3">Nesting</dt>
              <dd className="col-sm-9">
                <dl className="row">
                  <dt className="col-sm-4">Nested definition list</dt>
                  <dd className="col-sm-8">
                    Aenean posuere, tortor sed cursus feugiat, nunc augue
                    blandit nunc.
                  </dd>
                </dl>
              </dd>
            </dl>
          </td>
        </tr>
        <tr>
          <td>
            <p className="font-weight-bold text-muted">Muted Text :</p>
          </td>
          <td>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In,
              nulla, reprehenderit! Beatae, dolor harum fugiat.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p className="font-weight-bold text-muted">Primary Text :</p>
          </td>
          <td>
            <p className="text-primary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In,
              nulla, reprehenderit! Beatae, dolor harum fugiat.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p className="font-weight-bold text-muted">Danger Text :</p>
          </td>
          <td>
            <p className="text-danger">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In,
              nulla, reprehenderit! Beatae, dolor harum fugiat.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p className="font-weight-bold text-muted">Warning Text :</p>
          </td>
          <td>
            <p className="text-warning">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In,
              nulla, reprehenderit! Beatae, dolor harum fugiat.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p className="font-weight-bold text-muted">Success Text :</p>
          </td>
          <td>
            <p className="text-success">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In,
              nulla, reprehenderit! Beatae, dolor harum fugiat.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p className="font-weight-bold text-muted">Info Text :</p>
          </td>
          <td>
            <p className="text-info">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In,
              nulla, reprehenderit! Beatae, dolor harum fugiat.
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  {/* end of typography */}
  {/* Page Footer */}
  <div className="bg-dark text-light text-center border-top wow fadeIn">
    <p className="mb-0 py-3 text-muted small">
      © Copyright Made with <i className="ti-heart text-danger" /> By{" "}
      <a href="http://devcrud.com">DevCRUD</a>
    </p>
  </div>
  {/* End of Page Footer */}
</>

    )
}