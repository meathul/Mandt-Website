import React from 'react'
import dsc from '../assets/discount.png'

const CouponID = (props) => {
  return (
    <button className='flex flex-row gap-4 items-center my-6' onClick={() => props.disountApplied(props.discount)}>
        <img src={dsc} alt="" />
        <div>
          <p className='coupon-code'>
            {props.discount}% OFF
          </p>
          <p className='coupon-desc'>
            Code: {props.code}
          </p>
        </div>
    </button>
  )
}

export default CouponID



//        DELETE THIS FILE