import React from 'react';

import Productlistitem from './productlistitem';

export default class Productlist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
  }

  getProducts() {
    fetch('/api/products')
      .then(res => res.json())
      .then(products => this.setState({ products }))
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <div className="container d-flex flex-wrap justify-content-between cards-container mt-5 mb-5">
        {
          this.state.products.map(productData => {
            return <Productlistitem key={productData.productId} product={productData} setView={this.props.setView} />;
          })
        }
      </div>

    );
  }
}
