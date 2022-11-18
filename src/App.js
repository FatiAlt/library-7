import React from 'react';
import ProductList from './components/product-list/ProductList';
import SearchInput from './components/search-input/SearchInput';
import Spinner from './components/spinner/Spinner';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [],
      searchText: '',
      isLoading: true,
      error: null,
    }
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }

  componentDidMount() {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
      /* .then(() => {
        throw new Error()
      }) */
      .catch(() => this.setState({ error: 'Une erreur est survenue' }))
      .finally(() => this.setState({ isLoading: false }))
  }

  handleSearchInputChange(event) {
    const text = event.target.value.toLowerCase();
    this.setState({ searchText: text })
  }

  render() {
    const { products, searchText, isLoading, error } = this.state;
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchText));

    return ( 
      <div className="app">
        <div className="container mt-5">
            <SearchInput onChange={this.handleSearchInputChange} />
            {error ? (
              <div className='alert alert-danger'>
                {error}
              </div>
            ) : isLoading ? (
              <Spinner />
            ) : (
              <ProductList products={filteredProducts} />
            )}
        </div>
      </div>
    );
  }
}

export default App;
