import React from "react";

function Universe() {
  return (
    <div className="container my-5">
      <div className="row text-center mb-4">
        <div className="col-12">
          <h1 className="mb-2">The Zerodha Universe</h1>
          <p className="text-muted">
            Extend your trading and investment experience even further with our partner platforms
          </p>
        </div>
      </div>

      <div className="row text-center test-muted mb-4">
        {[
          {
            src: "media/images/zerodhaFundhouse.png",
            text: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
            alt: "Zerodha Fundhouse",
          },
          {
            src: "media/images/sensibullLogo.svg",
            text: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
            alt: "Sensibull",
          },
          {
            src: "media/images/tijori.svg",
            text: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
            alt: "Tijori",
          },
          {
            src: "media/images/streakLogo.png",
            text: "Systematic trading platform that allows you to create and backtest strategies without coding.",
            alt: "Streak",
          },
          {
            src: "media/images/smallcaseLogo.png",
            text: "Thematic investment platform",
            alt: "Smallcase",
          },
          {
            src: "media/images/dittoLogo.png",
            text: "Personalized advice on life and health insurance. No spam and no mis-selling.",
            alt: "Ditto",
          },
        ].map((item, index) => (
          <div className="col-lg-4 col-md-6 col-12 p-3" key={index}>
            <img
              src={item.src}
              alt={item.alt}
              style={{ width: "60%", marginBottom: "1rem" }}
            />
            <p className="text-muted">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-12 text-center">
          <button className="btn btn-primary px-4 py-2 fs-5">Sign up Now</button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
