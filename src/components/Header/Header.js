import React from 'react';
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="banner-logo">
                <img src={logo} alt="banner-logo"/>
            </div>
            <div className="navbar">
                <nav>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/review">Order Review</NavLink>
                    <NavLink to="/inventory">Manage Inventory</NavLink>
                </nav>
            </div>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="type here to search"/><FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </div>
            
        </div>
    )
}

export default Header 



