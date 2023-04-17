import React, { Component } from 'react'
import data from './data.json'
import ShoeItem from './ShoeItem'
import ShoeDetail from './ShoeDetail'

export default class ShoeStore extends Component {
  state = {
    shoeInfo: {
      "id": 1,
      "name": "Adidas Prophere",
      "alias": "adidas-prophere",
      "price": 350,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 995,
      "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
    }
  }

  handleShoeDefault = (shoe) => {
    this.setState({
      shoeInfo: shoe,
    })
  }
  render() {
    return (
      <div className="container">
        <h2 className="text-center">Shoes Shop</h2>
        {/* MODAL  */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Shoes Detail</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                {/* SHOE DETAIL  */}
                <ShoeDetail getDetail={this.state.shoeInfo} />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">

          {data.map((value) => {
            return (
              <div className="col-12 col-md-6 col-lg-4 mt-3" key={value.id}>
                {/* SHOE LIST  */}
                <ShoeItem product={value} handleShoeDefault={this.handleShoeDefault} />
              </div>
            )
          })}

        </div>
      </div>
    )
  }
}
