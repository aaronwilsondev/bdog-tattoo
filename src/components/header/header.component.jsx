import React from "react";

import { ReactComponent as Logo } from "../../assets/dog.svg";

import { Link } from "react-router-dom";
import "./header.styles.scss";

const Header = () => (
    <div className="header">
        <Link to="/" className="logo-container">
          <Logo className="logo"/>
        </Link>
        <div className="options">
         <Link className="option" to="/shop">
             SHOP
         </Link> 
         <Link className="option" to="/contact">
             CONTACT
         </Link>
         <Link className="option" to="/faq">
             FAQ
         </Link>

        </div>
    </div>
) 

export default Header;