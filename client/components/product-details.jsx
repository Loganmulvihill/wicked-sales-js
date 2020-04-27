import React from 'react';

export default class Productdetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    fetch(`/api/products/${this.props.params.productId}`)
      .then(res => res.json())
      .then(product => this.setState({ product }))
      .catch(err => console.error(err));
  }

  render() {
    if (this.state.product !== null) {
      return (
        <div className="container mt-5 border rounded">
          <button onClick={() => this.props.setView('catalog', {})} className="row mb-2 text-muted btn bg-transparent">
            {'<'} Back to Catalog button
          </button>
          <div className="row mb-2">
            <div className="col-5">
              <img src={this.state.product.image} className="card-img-top product-details-img" alt={this.state.product.name} />
            </div>
            <div className="col-6">
              <div className="card-body">
                <h3 className="card-title">{this.state.product.name}</h3>
                <p className="card-text text-muted">{`$ ${(this.state.product.price.toFixed(2)) / (100)}`}</p>
                <p className="card-text">{this.state.product.shortDescription}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <p className="card-text">{this.state.product.longDescription}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
