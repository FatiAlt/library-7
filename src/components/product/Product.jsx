import React from 'react';
import styles from './Product.module.css';

class Product extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      isClicked: false
    }
  }

  handleClick = () => {
    this.setState({ isClicked: true })
  }

  render() {
    const {product} = this.props;
    return (
      <div className={`card text-black ${styles.productCard}`}>
        <img 
          src={product.images[0]}
          className="card-img-top" 
          alt="Apple Computer" />
        <div className={`card-body ${styles.productCardBody}`}>
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
          <div className="d-flex justify-content-center total font-weight-bold mt-2">
            <button className='btn btn-dark' onClick={this.handleClick}>
              {this.state.isClicked ? 'Im clicked': 'Click me'}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;