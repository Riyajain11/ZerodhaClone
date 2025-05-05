import React from "react";

function Education() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
          <img
            src="media/images/education.svg"
            alt="Education Graphic"
            className="img-fluid"
            style={{ width: "70%" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-12 col-md-6 px-4">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world,
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="text-decoration-none d-block mb-4">
            Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <p>
            TradingQ&A, the most active trading and investment community in India
            for all your market-related queries.
          </p>
          <a href="#" className="text-decoration-none">
            TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
