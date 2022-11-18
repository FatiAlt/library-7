import React from 'react';
import styles from './Product.module.css';

const Product = ({ product }) =>  {
  return (
    <div className={`card text-black ${styles.productCard}`}>
      <img 
        src={product.images[0]}
        className="card-img-top" 
        alt="Apple Computer" />
      <div className="card-body">
        <div className="text-center">
          <h5 className="card-title">{product.title}</h5>
          <p className="text-muted mb-4">{product.description}</p>
        </div>
        <div>
          <div className="d-flex justify-content-between">
            <span>Category</span><span>{product.category.name}</span>
          </div>
        </div>
        <div className="d-flex justify-content-between total font-weight-bold mt-2">
          <span>Price</span><span>${product.price}</span>
        </div>
      </div>
    </div>
  );
}

export default Product;