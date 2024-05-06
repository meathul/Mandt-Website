import React from 'react'
import orderbg from '../assets/orderbg2.jpg'
import checkIcon from '../assets/check.png'
import continueButton from '../assets/continue.png'
import { Link } from 'react-router-dom'

const Confirmed = () => {
  return (
    <div className="confirmed-background">
      <div className="confirmed-container">
        <img src={checkIcon} alt="" className='confirmed-icon'/>
        <h1 className='confirmed-text'>Order confirmed<br></br>Thank you!</h1>
        <button>
          <Link to={'/home'} className='confirmed-back'>
            <div className='confirmed-continue'>Continue Shopping</div>
            <img src={continueButton} alt="" />
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Confirmed