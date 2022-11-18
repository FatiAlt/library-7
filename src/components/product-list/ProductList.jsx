import React from 'react';
import Product from '../product/Product';

const ProductList = ({ products }) =>  {
  return (
    <div className="mt-5 d-flex flex-wrap" style={{gap: '10px'}}>
      {products.map(product => <Product product={product} key={product.id} />)}
    </div>
  )
}

export default ProductList;