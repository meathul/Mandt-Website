import React from 'react'
import './prdts.css'
import line_cart from '../assets/lineCart.png'
import cartimg from '../assets/Cart.png'
import axios from 'axios'
import cartButtonClick from './cartButton'

const Products = (props) => {

  return (
    <div className='product-card'>
        <img src={props.pic} alt="" className='product-img'/>
        <div className='product-box'key={props.id}>
            <div className="product-dets">
                <p className='product-name'>
                    {props.name}
                </p>
                <p className='product-price'>
                    {'₹'+props.price}
                </p>
            </div>
            <img src={line_cart} alt="" className='product-line'/>
            <button className='product-cart' onClick={() => props.cartButtonClick(props.id, props.name, props.price, props.pic)}>
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