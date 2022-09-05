import React from "react";

export default function Promotions() {
  return (
    <div
      id="blog"
      className="container-fluid bg-dark text-light py-5 text-center wow fadeIn"
    >
      <h2 className="section-title py-5">PROMOTIONS AT THE CAKE HUT</h2>
      <div className="row justify-content-center">
        <div className="col-sm-7 col-md-4 mb-5">
          <ul
            className="nav nav-pills nav-justified mb-3"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#foods"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                TOP SELLERS
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#juices"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                ACCESSORIES
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="foods"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div className="row">
            <div className="col-md-4">
              <div className="card bg-transparent border my-3 my-md-0">
                <img
                  src="assets/imgs/blog-1.jpg"
                  alt="..."
                  className="rounded-0 card-img-top mg-responsive"
                />
                <div className="card-body">
                  <h1 className="text-center mb-4">
                    <a href="#" className="badge badge-primary">
                      Visit
                    </a>
                  </h1>
                  <h4 className="pt20 pb20">Devon Elite</h4>
                  <p className="text-white">
                    At Devon Cakes we believe in old fashioned values and
                    service, we pride ourselves on being innovators. We try to
                    offer something completely different to current cake
                    suppliers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-transparent border my-3 my-md-0">
                <img
                  src="assets/imgs/blog-2.jpg"
                  alt="..."
                  className="rounded-0 card-img-top mg-responsive"
                />
                <div className="card-body">
                  <h1 className="text-center mb-4">
                    <a href="#" className="badge badge-primary">
                      Visit
                    </a>
                  </h1>
                  <h4 className="pt20 pb20">Creation Cakes</h4>
                  <p className="text-white">
                    Best taste through the highest quality is the benchmark we
                    set for our products. We source only the finest quality
                    ingredients from internationally recognized brands.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-transparent border my-3 my-md-0">
                <img
                  src="assets/imgs/blog-3.jpg"
                  alt="..."
                  className="rounded-0 card-img-top mg-responsive"
                />
                <div className="card-body">
                  <h1 className="text-center mb-4">
                    <a href="#" className="badge badge-primary">
                      Visit
                    </a>
                  </h1>
                  <h4 className="pt20 pb20">Perera & Sons</h4>
                  <p className="text-white">
                    Love to satisfy customers and provide them with the freshest
                    and most delicious ingredients. We have a wide selection of
                    quality products that we’re sure you’ll just love. Stop by
                    to have a taste!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="juices"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div className="row">
            <div className="col-md-4 my-3 my-md-0">
              <div className="card bg-transparent border">
                <img
                  src="assets/imgs/blog-4.jpg"
                  alt="..."
                  className="rounded-0 card-img-top mg-responsive"
                />
                <div className="card-body">
                  <h1 className="text-center mb-4">
                    <a href="#" className="badge badge-primary">
                      $15
                    </a>
                  </h1>
                  <h4 className="pt20 pb20">Sparkling Candles</h4>
                  <p className="text-white">
                    Sparklers which can be put on edible stuff such as birthday
                    cakes, cupcakes and confectionaries. It is now an on-going
                    trend to use them in birthday parties, in major night clubs
                    and in dinner parties.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-3 my-md-0">
              <div className="card bg-transparent border">
                <img
                  src="assets/imgs/blog-5.jpg"
                  alt="..."
                  className="rounded-0 card-img-top mg-responsive"
                />
                <div className="card-body">
                  <h1 className="text-center mb-4">
                    <a href="#" className="badge badge-primary">
                      $50
                    </a>
                  </h1>
                  <h4 className="pt20 pb20">Decorating Supply</h4>
                  <p className="text-white">
                    With our premium collection of durable cake decorating tools
                    and creative cake decorations, you can now achieve
                    restaurant-quality desserts with endless cake decorating
                    ideas!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-3 my-md-0">
              <div className="card bg-transparent border">
                <img
                  src="assets/imgs/blog-6.jpg"
                  alt="..."
                  className="rounded-0 card-img-top mg-responsive"
                />
                <div className="card-body">
                  <h1 className="text-center mb-4">
                    <a href="#" className="badge badge-primary">
                      $5
                    </a>
                  </h1>
                  <h4 className="pt20 pb20">Letter/Number Candles</h4>
                  <p className="text-white">
                    Write a message straight from the heart with these beautiful
                    square letter candles! Perfect for personalising your own
                    loving message, these candles are a must have on any
                    occasion!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
