import React, { useEffect, useState } from 'react'
import './items.css'
import deleteIcon from '../assets/delete.png'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
 
const CartItems = (props) => { 
  const [qnty, setQuantity] = useState(props.quantity)
  const [sendReq, setSendReq] = useState(false)
 
  const [cartItem, SetCartItem] = useState({
    product_id: props.prd_id,
    product_name: props.name,
    product_price: props.price,
    product_img: props.pic,
    user_id: 999,
    quantity: 1,
  })

  const location = useLocation()
  const testID = location.pathname

  useEffect(() => {
    /* const updateQnt = () => {
        setQuantity(props.quantity)
    }
    updateQnt() */

    const updateDB = async () => {
        if (sendReq){
            try {
                console.log(cartItem)
                await axios.put("http://localhost:8800/cart/"+props.id, cartItem)
            } catch (err) {
                console.log(err)
            }
            setSendReq(false)
            window.location.reload()
        }       
    }
    updateDB()
  })

  const q_increment = () => {
    if (qnty < 10){
        setSendReq(true)
        setQuantity(prev => (prev + 1))
        SetCartItem(prev => ({...prev, quantity: qnty+1}))
    }
  }

  const q_decrement = () => {
    if (qnty > 1){
        setSendReq(true)
        setQuantity(prev => (prev - 1))
        SetCartItem(prev => ({...prev, quantity: qnty-1}))
    }
  }
  
  return (
    <div className='cart-item'>
        <img src={props.pic} alt="" className='item-img'/>
        <div className='item-tile'>
            <div className='flex flex-col'>
                <h1 className='item-title'>
                    {props.name}
                </h1>
                <p className='item-price'>
                    Price: ₹{props.price}
                </p>
            </div>
            <div className='item-footer'>
                <div className='item-quantity'>
                    <button onClick={q_decrement}>
                        -
                    </button>
                    <p>
                        {qnty}
                    </p>
                    <button onClick={q_increment}>
                        +
                    </button>
                </div>
                <button>
                    <img src={deleteIcon} alt="" className='item-delete' onClick={() => props.deleteButtonClick(props.id)}/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default CartItems



/*

*/