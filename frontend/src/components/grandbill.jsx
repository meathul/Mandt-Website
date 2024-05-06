import React from 'react'
import './items.css'
import { useToast } from '@chakra-ui/react'
import Confirmed from './OrderPlaced'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const GrandTotal = (props) => {
  const toast = useToast()
  const navigate = useNavigate()

  const placeorder = async () => {
    if (props.length > 0){
      try {
        await axios.delete("http://localhost:8800/confirmed")
        navigate('/confirmed')
      } catch (error) {
        console.log(error)
      }
    }
    else {
      toast({
        position: 'top',
        title: 'Empty Cart',
        variant: 'solid',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  return (
    <div className='grand-container'>
        <p>
            GRAND TOTAL  <br/> ₹{props.total}
        </p>
        <button className='grand-button' onClick={placeorder}>
            PLACE ORDER
        </button>
    </div>
  )
}

export default GrandTotal