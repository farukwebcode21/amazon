import React, { useState } from 'react'
import fakeData from '../../fakeData';
import { Cart } from '../Cart/Cart';
import { Product } from '../Product/Product';
import {addToDatabaseCart} from '../../utilities/databaseManager'

 const Shop = () => {
     const first10 = fakeData.slice(0, 10)
     const [products, setProducts] = useState(first10);
     const [cart, setCart] = useState([]);

     const handleAddproduct =(product) =>{
         console.log('added product', product)
         const newCart =[...cart, product];
         setCart(newCart);
         const sameProduct = newCart.filter(product => product.key === product.key);
         const count = sameProduct.length;
         addToDatabaseCart(product.key, count)
         
     }

    return (
        <div className="shop">

            <div className="product-container">
            {
        
               products.map(product =>
                (<Product 
                    showAddToCart={true}
                    product={product} 
                    key={product.key} 
                    handleAddproduct={handleAddproduct} />))
            }
            </div>
            <div className="card-container">
             <Cart cart={cart}/>
            </div>
        </div>
    )
}

export default Shop;