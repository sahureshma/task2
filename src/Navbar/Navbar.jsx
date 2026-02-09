import React from "react";
import logo from "./../assest/Leadcrmlogo.png"
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm fixed-top">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Logo"
            height="40"
            className="me-2"
          />
         
        </Link>

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

         
           <li className="nav-item">
              <Link className="nav-link" to="/">Product</Link>
            </li>


            <li className="nav-item">
              <Link className="nav-link" to="/">Pricing</Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                data-bs-toggle="dropdown"
              >
                Resources
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/">Docs</Link></li>
                <li><Link className="dropdown-item" to="/">Blogs</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                data-bs-toggle="dropdown"
              >
                Company
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/">About</Link></li>
                <li><Link className="dropdown-item" to="/">Careers</Link></li>
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
