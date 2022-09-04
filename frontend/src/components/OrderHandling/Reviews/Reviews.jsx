import React from "react";

export default function Reviews() {

    return (
        <div id="testmonial" className="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items" style={{ marginTop: "80px" }}>
        <h2 className="section-title my-5 text-center">REVIEWS</h2>
        <div className="row mt-3 mb-5">
            <div className="col-md-4 my-3 my-md-0">
                <div className="testmonial-card">
                    <h3 className="testmonial-title">John Doe</h3>
                    <h6 className="testmonial-subtitle">Professional Baker</h6>
                    <div className="testmonial-body">
                        <p>I have ordered my wedding cake structure and jar cakes from The cake shop. They had 3 weeks to prepare my order and still they managed to complete the order successfully. 
The owner was very helpful and I highly recommend The Cake Hut.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 my-3 my-md-0">
                <div className="testmonial-card">
                    <h3 className="testmonial-title">Steve Thomas</h3>
                    <h6 className="testmonial-subtitle">Satisfied Customer</h6>
                    <div className="testmonial-body">
                        <p>A big thanks to The Cake Shop for making such a beautiful cake structure n wedding cake jars for my wedding, No words to explain how delicious it was.. All the guests at our wedding was admiring the cake</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 my-3 my-md-0">
                <div className="testmonial-card">
                    <h3 className="testmonial-title">Miranda Joy</h3>
                    <h6 className="testmonial-subtitle">Cake Shop Manager</h6>
                    <div className="testmonial-body">
                        <p>The crew did a fabulous job !! ..from the flower work to the slightest intricate details of the Cake were well thought and executed…
Big Thank you to “Punsisi” for the best customer service given in ensuring customer requests were met over and above customer expectations</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}