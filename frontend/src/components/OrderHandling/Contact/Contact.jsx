import React from "react";

export default function Contact() {
    
    return (
        <div id="contact" className="container-fluid bg-dark text-light border-top wow fadeIn">
        <div className="row">
            <div className="col-md-6 px-0">
                <div id="map" style={{width:'100%', height:'100%', minHeight:'400px'}}></div>
            </div>
            <div className="col-md-6 px-5 has-height-lg middle-items">
                <h3>FIND US</h3>
                <p>Cake Hut has quite many listed places around it and we are covering at least 243 places around it on Srilanka-Places.com. Cake Hut is rated 5 (out of 5 stars) by 500+ reviewers on the web.</p>
                <div className="text-muted">
                    <p><span className="ti-location-pin pr-3"></span> No. 12345, Malabe, Sri Lanka</p>
                    <p><span className="ti-support pr-3"></span> 0112 - 224 448</p>
                    <p><span className="ti-email pr-3"></span>info@cakehut.com</p>
                </div>
            </div>
        </div>
    </div>
    )
}