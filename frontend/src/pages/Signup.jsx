import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import pfp from '../assets/user_pfp.png'

const Signup = () => {
  const [SignUp, setSignUp] = useState({
    user_id: null,
    user_name: "",
    user_password: "",
  })
  const [NewUser, setNewUser] = useState({
    user_id: null,
    user_name: "",
    user_password: "",
  })
  const [user, setUser] = useState([])
  const [addNew, setAddNew] = useState(false)
  const toast = useToast()

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
    const addnewuser = async() => {
        if (addNew) {
            console.log(NewUser)
            try {
                await axios.post("http://localhost:8800/login", NewUser)
                window.location.href="http://localhost:3000/home"
            } catch (err) {
                console.log(err)
            }
            setAddNew(false)
        }
    }
    addnewuser()
  }, [addNew])

  const handleChange = (e) => {
    setSignUp(prev => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleClick = async (check_user) => {
    let lastid = null;
    let exist = false
    user.map((u) => {
      if (u.user_name == check_user.user_name){
        exist = true;
      }
      lastid = u.user_id
    })
    if (exist) {
        toast({
            position: 'top',
            title: 'Username already Exists',
            variant: 'solid',
            status: 'error',
            duration: 3000,
            isClosable: true,
        })
    }
    else{
      try {
        setNewUser({
            user_id: lastid+1,
            user_name: SignUp.user_name,
            user_password: SignUp.user_password
        })
        setAddNew(true)
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <div className='signup-screen'>
        <p className='login-logo'>
                MANDT
        </p>
        <div className='login-container'>
          <img src={pfp} alt="" className='login-icon' />
          <input type="text" placeholder='Username' className='login-input' onChange={handleChange} name='user_name'/>
          <input type="password" placeholder='Password' className='login-input' onChange={handleChange} name='user_password'/>
          <p className='login-to-signup'>Already have an account ? <a href='http://localhost:3000/login'> Login</a></p>
          <button onClick={() => handleClick(SignUp)} className='login-button'>
              SIGN UP
          </button>
        </div>
    </div>
  )
}

export default Signup