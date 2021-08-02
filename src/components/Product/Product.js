import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export const Product = (props) => {
    // console.log(props);
    const {img, name, seller, price, stock, key } = props.product;
    
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt=""/>
            </div>
            <div className="product-detail">
                <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <h5>by :{seller}</h5>
                <h5>${price}</h5>
                <h5>Only {stock} left in stock -Order soon</h5>

                { props.showAddToCart && <button 
                    className="add-to-cart" onClick={ () =>props.handleAddproduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> add to Cart
                </button>}

            </div>
            
        </div>
    )
}
