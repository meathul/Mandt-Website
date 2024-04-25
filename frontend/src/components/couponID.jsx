import React from 'react'
import dsc from '../assets/discount.png'

const CouponID = (props) => {
  return (
    <button className='flex flex-row gap-4 items-center my-6'>
        <img src={dsc} alt="" />
        <p className='coupon-code'>
            #Coupon{props.number}
        </p>
    </button>
  )
}

export default CouponID