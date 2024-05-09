import React from 'react'
import Product from './Product'

const Image = () => {
  return (
    <div className='image'>
      <img src={Product.img_URL} alt="" />
    </div>
  )
}

export default Image