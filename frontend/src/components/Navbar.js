import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-primary navbar-static-top"
          style={{ marginBottom: 20, color: "rgb(246, 75, 47)" }}
        >
          <a className="navbar-brand" text-color="white" href="#">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link" href="#" text-color="red">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
          <ul className="nav nav-pills ml-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Account
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Login
                </a>
                <a className="dropdown-item" href="#">
                  Signup
                </a>
              </div>
            </li>

            <li className="nav-item">
              <button type="button" className="btn btn-success">
                Post a Job
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
