import React, { Component } from "react";
import { Link } from "react-router-dom";
import icon from "./images/ecommerce logo.png";
import styled from "styled-components";


export default class Navbar extends Component {
  render() {
    return (
      
      <NavWrapper className="navbar ">
        <Link to="/">
          <img src={icon} alt="store logo" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item navbar-nav ml-5">
            <Link to="/" className="nav-link">
             View Products
            </Link>
          </li>
          </ul>

        <Link to="/cart" className="ml-auto">
        <button>
         <span className="btn border-drawing"><i className="fas fa-cart-plus"></i>
            My Cart
        </span>
        
          </button>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper= styled.nav`
background-color:var(--mainTan);
font-size: 1.3rem;
`



