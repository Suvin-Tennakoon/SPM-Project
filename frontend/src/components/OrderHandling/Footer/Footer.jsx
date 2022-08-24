import React from "react";

export default function Footer() {
    return (
        <>
                <div className="container-fluid bg-dark text-light has-height-md middle-items border-top text-center wow fadeIn">
            <div className="row">
                <div className="col-sm-4">
                    <h3>EMAIL US</h3>
                    <p className="text-muted">info@cakehut.com</p>
                </div>
                <div className="col-sm-4">
                    <h3>CALL US</h3>
                    <p className="text-muted">0112 - 224 448</p>
                </div>
                <div className="col-sm-4">
                    <h3>FIND US</h3>
                    <p className="text-muted">No. 12345, Malabe, Sri Lanka</p>
                </div>
            </div>
        </div>
        <div className="bg-dark text-light text-center border-top wow fadeIn">
            <p className="mb-0 py-3 text-muted small">&copy; Copyright 2022 Made with <i className="ti-heart text-danger"></i> By <a href="http://devcrud.com">SLIIT</a></p>
        </div>
        </>
    )
}