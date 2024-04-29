import React from "react";

export default function Footer() {
  return (
    <>
        <footer className="text-center text-lg-start text-white bg-dark">
          <section className="">
            <div className="container text-center text-md-start  pt-3">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">L-Cart</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto bg-primary" />
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. dui nec facilisis eleifend, orci urna consequat leo, sit amet convallis dolor urna vel quam. Nullam ullamcorper ante sed dolor lobortis, sit amet scelerisque urna fermentum
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Products</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto bg-primary" />
                  <p>
                    <a href="#" className="text-white">
                      Electronics
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      Men's Fashion
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      Women's Fashion
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      Beauty Products
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto bg-primary" />
                  <p>
                    <a href="#" className="text-white">
                      Your Account
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      Become an Affiliate
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      Shipping Rates
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      Help
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <i className="fa fa-house mr-3"></i> New York, NY 10012, US
                  </p>
                  <p>
                  <i className="fa fa-envelope mr-3"></i> info@example.com
                  </p>
                  <p>
                  <i className="fa fa-phone mr-3"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fa fa-print mr-3"></i> + 01 234 567 89
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center p-3 bg-success">
            © 2020 Copyright:
            <a className="text-white" href="/">
              www.L-Cart.com
            </a>
          </div>
        </footer>
    </>
  );
}
