import React from 'react'

const ReviewItem = (props) => {
    console.log(props);
    const {name, quantity} = props.product;
  
    return (
        <div className="review-container">
            <div className="review-product">
                <h4>{name}</h4>
                <h5>Quantity:{quantity}</h5>
                <button className="add-to-cart">Remove</button>
            </div>
            <div className="card-container">
                
            </div>
        </div>
    )
}

export default ReviewItem
