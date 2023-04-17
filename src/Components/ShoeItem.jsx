import React, { Component } from 'react'

export default class ShoeItem extends Component {
  render() {
    const { product, handleShoeDefault } = this.props;

    return (
      <div className="card">
        <img src={product.image} alt="..." />
        <div className="card-body text-left">
          <p>{product.name}</p>
          <p>{product.price.toLocaleString()} $</p>
          <div className="row d-flex justify-content-center">
            <button className="col ml-2 btn btn-dark">
              Add to carts  <i class="fa-solid fa-cart-arrow-down"></i>
            </button>
            <button className='col ml-3 mr-2 btn btn-success' data-toggle="modal" data-target="#exampleModal"
              onClick={() => handleShoeDefault(product)}>
              View details
            </button>
          </div>
        </div>
      </div>
    )
  }
}
