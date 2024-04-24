import React from 'react'
import './items.css'

const CartItems = (props) => {
  return (
    <div className='cart-item'>
        <img src={props.pic} alt="" className='item-img'/>
        <div className='flex flex-col justify-between mx-10 my-7'>
            <div className='flex flex-col'>
                <h1 className='item-title'>
                    {props.name}
                </h1>
                <p className='item-price'>
                    Price: ₹{props.price}
                </p>
            </div>
            <div className='item-quantity'>
                <button>
                    -
                </button>
                <p>
                    1
                </p>
                <button>
                    +
                </button>
            </div>
        </div>
    </div>
  )
}

export default CartItems



/*

*/