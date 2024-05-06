import React, { useEffect, useState } from 'react'
import './home.css'
import Products from '../components/Products'
import prf from '../assets/profile_pic.png'
import bag from '../assets/home_bag.png'
import lineMain from '../assets/line_main.png'
import HerTile from '../components/hertile'
import HimTile from '../components/himtile'
import ThemTile from '../components/themtile'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useToast, useDisclosure, Button } from '@chakra-ui/react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
} from '@chakra-ui/react'

const Home = () => {
  const [pf_women, setPF_women] = useState([])
  const [pf_men, setPF_men] = useState([])
  const [pf_unisex, setPF_unisex] = useState([])
  const [cart, setCart] = useState([])
  const [sendReq, setSendReq] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
 
  const toast = useToast()
  
  const [item, setItem] = useState({
    id: null,
    quantity: 1,
  })
  

  useEffect(() =>{
    const fetchWomenProducts = async () => {
        try {
            const res = await axios.get("http://localhost:8800/products/women")
            setPF_women(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    fetchWomenProducts()
    const fetchMenProducts = async () => {
        try {
            const res = await axios.get("http://localhost:8800/products/men")
            setPF_men(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    fetchMenProducts()
    const fetchUnisexProducts = async () => {
        try {
            const res = await axios.get("http://localhost:8800/products/unisex")
            setPF_unisex(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    fetchUnisexProducts()
    const fetCart = async () => {
        try {
            const res = await axios.get("http://localhost:8800/cart")
            setCart(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    fetCart();
    
    const postItem = async () => {
        if (sendReq) {
            let checkif = false
            cart.map((c) => {
                console.log(c)
                if (c.id == item.id) {
                    checkif = true;
                }
            })
            
            if (!checkif) {
                try {
                    await axios.post("http://localhost:8800/cart", item)
                } catch (err) {
                    console.log(err)
                }
            }
            setSendReq(false)
        }
    }
    postItem()

  }, [item, sendReq]);


  const cartButtonClick = (id, name, price, pic) => {
    setItem({
        id: id,
        quantity: 1,
        total_price: price
    })


    toast({
        title: `${name} added to Cart`,
        status: 'success',
        duration: 3000,
        isClosable: true,
    })
    setSendReq(true)
  }

  const logoutButton = async () => {
    try {
        console.log("logging out")
        window.location.href="http://localhost:3000/"
        await axios.post("http://localhost:8800/logout", { data: 0 })
    } catch (err) {
        console.log(err)
    }
  }
  return (
    <>
        <div className='flex flex-col items-center'>
            <div className="home-header">
                <button onClick={onOpen}>
                    <img src={prf} alt="" className='home-img' />
                </button>
                <AlertDialog
                    motionPreset='slideInBottom'
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                    isOpen={isOpen}
                    isCentered
                >
                    <AlertDialogOverlay />

                    <AlertDialogContent>
                    <AlertDialogHeader>Log Out</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        Are you sure you want to Log Out from your account.
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                        No
                        </Button>
                        <Button colorScheme='red' ml={3} onClick={logoutButton}>
                        Yes
                        </Button>
                    </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
                <button>
                    <Link to={'/'}>
                        <p className='home-logo'>
                            MANDT
                        </p>
                    </Link>
                </button>
                <button> 
                    <Link to={'/cart'}>
                        <img src={bag} alt="" className='home-img'/>
                    </Link>
                </button>
            </div>
            <img src={lineMain} alt="" className='header-line'/>
            <p className='home-desc'>
                FRAGRANCES
            </p>
        </div>
        <HerTile/>
        <div className='flex flex-wrap justify-center'>
            {pf_women.map((perfume_women)=>(
                <Products id={perfume_women.id} name={perfume_women.name} price={perfume_women.price} pic={`desc_img/${perfume_women.img}`} desc={perfume_women.description} ml={perfume_women.mL}cartButtonClick={cartButtonClick}/>
            ))}
        </div>
        <HimTile/>
        <div className='flex flex-wrap justify-center'>
            {pf_men.map((perfume_men)=>(
                <Products id={perfume_men.id} name={perfume_men.name} price={perfume_men.price} pic={`desc_img/${perfume_men.img}`} desc={perfume_men.description} ml={perfume_men.mL} cartButtonClick={cartButtonClick}/>
            ))}
        </div>
        <ThemTile/>
        <div className='flex flex-wrap justify-center'>
            {pf_unisex.map((perfume_unisex)=>(
                <Products id={perfume_unisex.id} name={perfume_unisex.name} price={perfume_unisex.price} pic={`desc_img/${perfume_unisex.img}`} desc={perfume_unisex.description} ml={perfume_unisex.mL}cartButtonClick={cartButtonClick}/>
            ))}
        </div>
    </>
  )
}

export default Home
