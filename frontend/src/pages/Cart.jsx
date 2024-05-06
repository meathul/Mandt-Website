import React, { useEffect, useState } from 'react'
import back from '../assets/backarrow.png'
import CartItems from '../components/cartItem'
import TotalBill from '../components/total'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Cart = () => {

  const [cart, setCart] = useState([])
  const [mrp, setMRP] = useState(0)  
  const [calcPrice, setCalcPrice] = useState(true)
  const [len, setLen] = useState(0)

  useEffect(() => {
    const fetchCart = async () => {
        try {
            const res = await axios.get("http://localhost:8800/cart")
            setCart(res.data)
            setLen(res.data.length)
        } catch (err) {
            console.log(err)
        }
    }
    fetchCart()
    if (calcPrice) {
        cart.map((items) => {
            console.log(items.img)
            setMRP(prev => (prev + (items.price * items.quantity)))
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
                            <CartItems id={cartItem.order_id} prd_id={cartItem.id} img={cartItem.img} name={cartItem.name} price={cartItem.price} deleteButtonClick={deleteButtonClick} quantity={cartItem.quantity}/>
                        )) 
                }
            </div>
            <div className='item-bill'>
                <TotalBill mrp={mrp} length={len}/>
            </div>
        </div>
    </div>
  )
}

export default Cart