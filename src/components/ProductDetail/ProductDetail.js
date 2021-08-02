import React from 'react'
import { useParams } from 'react-router-dom'
import fakeData from '../../fakeData';
import { Product } from '../Product/Product';

const ProductDetail = () => {
    const {category} = useParams();
    const product = fakeData.find(pd =>pd.key === category);
    console.log(product);
    return (
        <div>
            <Product showAddToCart={false} product={product}/>
        </div>
    )
}

export default ProductDetail 
