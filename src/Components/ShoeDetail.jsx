import React, { Component } from 'react'

export default class ShoeDetail extends Component {
  render() {
    const { getDetail } = this.props
    return (
      <div>
        <div className='row mt-4'>
          <div className='col-sm-12 col-lg-4 mx-lg-3 mt-lg-2'>
            <h3>{getDetail.name}</h3>
            <img style={{ width: '100%' }} src={getDetail.image} alt='' />

          </div>
          <div className='col-sm-12 col-lg-7'>

            <table className='table'>
              <thead className='text-left'>
                <tr>
                  <td style={{ border: 0 }}>Name</td>
                  <td style={{ border: 0 }}>{getDetail.name}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{getDetail.price.toLocaleString()} $</td>
                </tr>
                <tr>
                  <td>Summary</td>
                  <td>{getDetail.shortDescription}</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>{getDetail.description}</td>
                </tr>
                <tr>
                  <td>Quantity</td>
                  <td>{getDetail.quantity.toLocaleString()}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
