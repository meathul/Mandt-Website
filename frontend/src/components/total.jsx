import React from 'react'
import './items.css'
import GrandTotal from './grandbill'
import CoupCard from './couponcard'

const TotalBill = (props) => {
  return (
    <div className='totalbill-container'>
        <div className='bill-container'>
            <h1>
                Price Details
            </h1>
            <div className='flex flex-row text-xl mt-10 justify-between mx-8'>
                <p>
                    MRP
                </p>
                <p>
                    ₹{props.mrp}
                </p>
            </div>
            <div className='flex flex-row text-xl mt-10 justify-between mx-8'>
                <p>
                    Coupon Applied
                </p>
                <p>
                    0%
                </p>
            </div>
            <div className='flex flex-row text-2xl font-bold mt-10 justify-between mx-8'>
                <p>
                    Total
                </p>
                <p>
                    ₹{props.mrp}
                </p>
            </div>
        </div>
        <CoupCard/>
        <GrandTotal total={props.mrp}/>
    </div>
  )
}

export default TotalBill


/*

*/