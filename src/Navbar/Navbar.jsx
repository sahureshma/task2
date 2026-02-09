import React from "react";
import logo from "./../assest/Leadcrmlogo.png"
import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm fixed-top">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={logo}
            alt="Logo"
            height="40"
            className="me-2"
          />
         
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-4">

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Product
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Option 1</a></li>
                <li><a className="dropdown-item" href="#">Option 2</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Resources
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Docs</a></li>
                <li><a className="dropdown-item" href="#">Blogs</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Company
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">About</a></li>
                <li><a className="dropdown-item" href="#">Careers</a></li>
              </ul>
            </li>

          </ul>

          {/* Right Buttons */}
          <div className="d-flex align-items-center gap-3">

            <button className="btn btn-info text-white fw-semibold px-4">
              Get Your Free Account
            </button>

            <button className="btn btn-outline-primary fw-semibold d-flex align-items-center gap-2 px-3">
              <i className="bi bi-box-arrow-in-right"></i> Login
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
