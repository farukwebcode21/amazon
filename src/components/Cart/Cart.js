import React from 'react'
import { Link } from 'react-router-dom';


export const Cart = (props) => {
    const cart = props.cart;

    // Reduct Method
    // const total = cart.reduce((total, product) => total + product.price, 0);

    // For each loop 
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
        
    }
    let shipping = 0 ;

    if(total > 35){
        shipping = 0;
    }else if(total > 15){
        shipping = 4.99
    }else if  ( total > 0){
        shipping =12.99
    }
    const tax = (total /10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }



    return (
        <>
           {/* <h3>Order Summary</h3>
           <h4>Items ordered: {cart.length} </h4>
           <p>Product Price ${formatNumber(total)}</p>
           <p>Shipping & Handling Cost : {shipping}</p>
           <p>Tax + VAT :${tax}</p>
           <p>Total Price :{grandTotal}</p> */}
           
           <div className="cart">
               <h3>Order Summary</h3>
               <p>Items ordered:{cart.length}</p>
               <table>
                   <tbody>
                       <tr>
                           <td>Items:</td>
                           <td>${formatNumber(total)}</td>
                       </tr>
                       <tr>
                           <td>Shipping & Handling:</td>
                           <td>${shipping}</td>
                       </tr>
                       <tr>
                           <td>Total before tax:</td>
                           <td>${formatNumber(total + shipping)}</td>
                       </tr>
                       <tr>
                           <td>Estimated Tax:</td>
                           <td>${tax}</td>
                       </tr>
                       <tr className="grand-total">
                           <td>Order Total:</td>
                           <td>${grandTotal}</td>
                       </tr>
                   </tbody>
               </table>
              <Link to="/review"><button className="add-to-cart"><span>Review your order</span></button></Link> 
           </div>
        </>
    )
}
