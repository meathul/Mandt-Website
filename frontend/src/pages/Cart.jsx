import React from 'react'
import back from '../assets/backarrow.png'
import cartline from '../assets/cartLine.png'
import pd1 from '../assets/macaron_rose.png'
import pd2 from '../assets/mermaid_moon.png'
import CartItems from '../components/cartItem'
import TotalBill from '../components/total'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div className=''>
        <div className='flex flex-row justify-between px-7 mt-6'>
            <button>
                <Link to={'/home'}>
                    <img src={back} alt="" className='w-12 h-12'/>
                </Link>
            </button>
            <p className='cart-title'>
                CART
            </p>
            <p className='text-transparent'>
                .............
            </p>
        </div>
        <div className='flex flex-row justify-end'>
            <div className='item-items'>
                <CartItems pic={pd1} name="Macaron Rose" price="69"/>
                <CartItems pic={pd1} name="Macaron Rose" price="69"/>
                <CartItems pic={pd1} name="Macaron Rose" price="69"/>
                <CartItems pic={pd1} name="Macaron Rose" price="69"/>
            </div>
            <div className='item-bill'>
                <TotalBill/>
            </div>
        </div>
    </div>
  )
}

export default Cart


/*

*/