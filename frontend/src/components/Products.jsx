import React from 'react'
import './prdts.css'
import line_cart from '../assets/lineCart.png'
import cartimg from '../assets/Cart.png'

const Products = (props) => {
  return (
    <div className='product-card'>
        <img src={props.pic} alt="" />
        <div className='product-box'>
            <div className="product-dets">
                <p className='product-name'>
                    {props.name}
                </p>
                <p className='product-price'>
                    {props.price}
                </p>
            </div>
            <img src={line_cart} alt="" className='h-16 ml-12'/>
            <button className='product-cart'>
                <img src={cartimg} alt="" />
            </button>
        </div>
        
    </div>
  )
}

export default Products


/*
<button className='product-add'>
            ADD TO BAG
        </button>
*/