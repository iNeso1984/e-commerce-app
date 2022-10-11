import React, { Component } from "react";
import { Link } from "react-router-dom";
import icon from "./images/ecommerce logo.png";


export default class Navbar extends Component {
  render() {
    return (
      
      <nav className="navbar navbar-expand-lg px-sm-5">
        <Link>
          <img src={icon} alt="store logo" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item navbar-nav ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
          </ul>

        <Link to="/cart" className="ml-auto">
          <button>
              Cart <i className="fas fa-cart-plus"></i>

          </button>
        </Link>
      </nav>
    );
  }
}
