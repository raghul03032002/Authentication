import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <><div>
    <div className="container-fluid">
        <nav
        className="navbar navbar-expand-lg bg-dark  px-4  fixed-top"
      >
      <div className="container-fluid">
        <h1 className="navbar-brand fs-2 text-light" id='logo'>MPO</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 text-center">
            <li className="nav-item">
              <Link to="/"
                className="nav-link text-light mx-2 "
                aria-current="page"
                >Home</Link >
            </li>
            <li className="nav-item ">
              <Link to="/Login" className=" nav-link text-light mx-2">Login</Link>
            </li>
            <li className="nav-item ">
              <Link to="/Register" className=" nav-link text-light mx-2">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav> 
    </div>
  </div> </>
  )
}

export default NavBar