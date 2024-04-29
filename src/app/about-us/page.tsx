import React from "react";

export default function AboutUs() {
  return (
    <div className="container mt-5 pb-5">
      <div className="row">
        <div className="col-md-6">
          <h2>About Our Company</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            volutpat, dui nec facilisis eleifend, orci urna consequat leo, sit
            amet convallis dolor urna vel quam. Nullam ullamcorper ante sed
            dolor lobortis, sit amet scelerisque urna fermentum.
          </p>
          <p>
            Our mission is to provide high-quality products and exceptional
            customer service.
          </p>
          <h3>Our Team</h3>
          <ul>
            <li>John Doe - CEO</li>
            <li>Jane Smith - Marketing Director</li>
            <li>Michael Johnson - Head of Operations</li>
          </ul>
        </div>
        <div className="col-md-6">
          <img
            src="https://www.mobulous.com/blog/wp-content/uploads/Different-Types-of-eCommerce-Mobile-App-Development.png"
            alt="Company Image"
            className="img-fluid"
            height={400}
            width={400}
          />
        </div>
      </div>
    </div>
  );
}
