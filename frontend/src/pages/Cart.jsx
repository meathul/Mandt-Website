import React, { useEffect, useState } from 'react'
import back from '../assets/backarrow.png'
import cartline from '../assets/cartLine.png'
import pd1 from '../assets/macaron_rose.png'
import pd2 from '../assets/mermaid_moon.png'
import CartItems from '../components/cartItem'
import TotalBill from '../components/total'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Cart = () => {

  const [cart, setCart] = useState([])
  const [mrp, setMRP] = useState(0)  
  const [calcPrice, setCalcPrice] = useState(true)

  useEffect(() => {
    const fetchCart = async () => {
        try {
            const res = await axios.get("http://localhost:8800/cart")
            setCart(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    fetchCart()
    if (calcPrice) {
        cart.map((items) => {
            setMRP(prev => (prev + (items.product_price * items.quantity)))
            setCalcPrice(false)
        }) 
    }
  }, [cart, calcPrice]);

  const deleteButtonClick = async (id) => {
    try {
        await axios.delete("http://localhost:8800/cart/"+id)
        window.location.reload()
    } catch (err) {
        console.log(err)
    }
  }

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
        <div className='bill'>
            <div className='item-box'>
                {
                    Object.keys(cart).length === 0 ? 
                        <p className='item-empty'>Your cart is empty</p> : 
                        cart.map((cartItem) => (
                            <CartItems id={cartItem.order_id} prd_id={cartItem.product_id} pic={cartItem.product_img} name={cartItem.product_name} price={cartItem.product_price} deleteButtonClick={deleteButtonClick} quantity={cartItem.quantity}/>
                        )) 
                }
            </div>
            <div className='item-bill'>
                <TotalBill mrp={mrp}/>
            </div>
        </div>
    </div>
  )
}

export default Cart


/*
<CartItems pic={pd1} name="Macaron Rose" price="69"/>
<CartItems pic={pd1} name="Macaron Rose" price="69"/>
<CartItems pic={pd1} name="Macaron Rose" price="69"/>
<CartItems pic={pd1} name="Macaron Rose" price="69"/>


<div className='item-bill'>
                <TotalBill/>
            </div>
*/