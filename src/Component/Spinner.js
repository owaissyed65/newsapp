import React, { Component } from 'react'
import Spinner1 from './output-onlinegiftools.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Spinner1} alt="loading"/>
      </div>
    )
  }
}

export default Spinner
