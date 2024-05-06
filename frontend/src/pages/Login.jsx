import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import pfp from '../assets/user_pfp.png'

const Login = () => {
  const [LoginUser, setLoginUser] = useState({
    user_id: null,
    user_name: "",
    user_password: "",
  })
  const [user, setUser] = useState([])
  const toast = useToast()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8800/login")
        setUser(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllUsers();
    
  }, [])

  const handleChange = (e) => {
    setLoginUser(prev => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleClick = async (check_user) => {
    let exist = false
    user.map((u) => {
      if (u.user_name == check_user.user_name && u.user_password == check_user.user_password){
        exist = true;
      }
    })
    if (exist) {
      console.log("USER FOUND")
      try {
        const res = await axios.get("http://localhost:8800/user", { params: { variable: check_user.user_name } })
        console.log(res.data[0].user_id)
      } catch (err) {
        console.log(err)
      }
      window.location.href="http://localhost:3000/home"
    }
    else{
      console.log("USER NOT FOUND")
      toast({
        position: 'top',
        title: 'Invalid User',
        variant: 'solid',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  return (
    <div className='login-screen'>
        <button className='login-logo' onClick={() => navigate('/')}>
          MANDT
        </button>
        <div className='login-container'>
          <img src={pfp} alt="" className='login-icon' />
          <input type="text" placeholder='Username' className='login-input' onChange={handleChange} name='user_name'/>
          <input type="password" placeholder='Password' className='login-input' onChange={handleChange} name='user_password'/>
          <p className='login-to-signup'>Don't have an account yet? <a href='http://localhost:3000/signup'> Sign Up</a></p>
          <button onClick={() => handleClick(LoginUser)} className='login-button'>
              LOGIN
          </button>
        </div>
    </div>
  )
}

export default Login