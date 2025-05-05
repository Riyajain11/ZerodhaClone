import React from "react"; 
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-white"
      style={{ borderBottom: "1px solid #eee" }}
    >
      <div className="container-fluid px-4 mr-4">
       
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="./media/images/logo.svg"
            alt="Zerodha Logo"
            style={{ height: "20px", marginRight: "8px" }}
          />
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link className="nav-link px-3 text-dark " to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-dark" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-dark" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-dark" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-dark" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
