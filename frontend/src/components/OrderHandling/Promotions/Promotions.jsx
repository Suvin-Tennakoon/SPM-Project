import React from "react";

export default function Promotions() {
    return(
        <div id="blog" className="container-fluid bg-dark text-light py-5 text-center wow fadeIn">
        <h2 className="section-title py-5">PROMOTIONS AT THE CAKE HUT</h2>
        <div className="row justify-content-center">
            <div className="col-sm-7 col-md-4 mb-5">
                <ul className="nav nav-pills nav-justified mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#foods" role="tab" aria-controls="pills-home" aria-selected="true">TOP CAKES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#juices" role="tab" aria-controls="pills-profile" aria-selected="false">ACCESSORIES</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="foods" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card bg-transparent border my-3 my-md-0">
                            <img src="assets/imgs/blog-1.jpg" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive"/>
                            <div className="card-body">
                                <h1 className="text-center mb-4"><a href="#" className="badge badge-primary">$5</a></h1>
                                <h4 className="pt20 pb20">Reiciendis Laborum </h4>
                                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident illum officiis fugit laudantium voluptatem sit iste delectus qui ex. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-transparent border my-3 my-md-0">
                            <img src="assets/imgs/blog-2.jpg" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive"/>
                            <div className="card-body">
                                <h1 className="text-center mb-4"><a href="#" className="badge badge-primary">$12</a></h1>
                                <h4 className="pt20 pb20">Adipisci Totam</h4>
                                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident illum officiis fugit laudantium voluptatem sit iste delectus qui ex. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-transparent border my-3 my-md-0">
                            <img src="assets/imgs/blog-3.jpg" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive"/>
                            <div className="card-body">
                                <h1 className="text-center mb-4"><a href="#" className="badge badge-primary">$8</a></h1>
                                <h4 className="pt20 pb20">Dicta Deserunt</h4>
                                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident illum officiis fugit laudantium voluptatem sit iste delectus qui ex. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="juices" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className="row">
                    <div className="col-md-4 my-3 my-md-0">
                        <div className="card bg-transparent border">
                            <img src="assets/imgs/blog-4.jpg" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive"/>
                            <div className="card-body">
                                <h1 className="text-center mb-4"><a href="#" className="badge badge-primary">$15</a></h1>
                                <h4 className="pt20 pb20">Consectetur Adipisicing Elit</h4>
                                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident illum officiis fugit laudantium voluptatem sit iste delectus qui ex. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-3 my-md-0">
                        <div className="card bg-transparent border">
                            <img src="assets/imgs/blog-5.jpg" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive"/>
                            <div className="card-body">
                                <h1 className="text-center mb-4"><a href="#" className="badge badge-primary">$29</a></h1>
                                <h4 className="pt20 pb20">Ullam Laboriosam</h4>
                                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident illum officiis fugit laudantium voluptatem sit iste delectus qui ex. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-3 my-md-0">
                        <div className="card bg-transparent border">
                            <img src="assets/imgs/blog-6.jpg" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive"/>
                            <div className="card-body">
                                <h1 className="text-center mb-4"><a href="#" className="badge badge-primary">$3</a></h1>
                                <h4 className="pt20 pb20">Fugit Ipsam</h4>
                                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident illum officiis fugit laudantium voluptatem sit iste delectus qui ex. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}