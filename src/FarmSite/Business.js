import React from 'react'
import ShopCart from './ShopCart'
import Products from './Products'

export default function Business() {
  return (
    <div className='business-container'>
     <img className = "bsnsImg" src='https://www.myvestige.com/images/category-banner/12.jpg'/>
     <div className='image-text'>Good Health Never Tasted Better</div>
     {/* <ShopCart/> */}
     <Products/>
      </div>
  )
}
