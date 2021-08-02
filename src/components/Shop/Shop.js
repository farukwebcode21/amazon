import React, { useState } from 'react'
import fakeData from '../../fakeData';
import { Cart } from '../Cart/Cart';
import { Product } from '../Product/Product';

 const Shop = () => {
     const first10 = fakeData.slice(0, 10)
     const [products, setProducts] = useState(first10);
     const [cart, setCart] = useState([]);

     const handleAddproduct =(product) =>{
         console.log('added product', product)
         const newCart =[...cart, product];
         setCart(newCart);
     }

    return (
        <div className="shop">

            <div className="product-container">
            {
               products.map(product =>(<Product product={product} key={product.key} handleAddproduct={handleAddproduct} />))
            }
            </div>
            <div className="card-container">
             <Cart cart={cart}/>
            </div>
        </div>
    )
}

export default Shop;