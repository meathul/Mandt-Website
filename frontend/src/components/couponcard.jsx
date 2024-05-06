import React, { useEffect, useState } from 'react'
import './items.css'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
  
import dsc from '../assets/discount.png'

const CoupCard = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [coupons, setCoupons] = useState([])

    function handleClick(d) {
        onClose()
        props.discountApplied(d)
    }

    useEffect(() => {
        const fetchCoupons = async () => {
            try {
                const res = await axios.get("http://localhost:8800/coupons")
                setCoupons(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchCoupons()
    })

    return (
        <>
        <button ref={btnRef} onClick={onOpen} className='coupon-button'>
            APPLY COUPON
        </button>
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
            size='sm'
            colorScheme='#E7D7C4'
        >
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
                <p className='coupon-title'>
                    Coupons
                </p>
            </DrawerHeader>

            <DrawerBody>
                {
                    coupons.map((c) => (
                        <button className='flex flex-row gap-4 items-center my-6' onClick={() => handleClick(c.discount)}>
                            <img src={dsc} alt="" />
                            <div>
                            <p className='coupon-code'>
                                {c.discount}% OFF
                            </p>
                            <p className='coupon-desc'>
                                Code: {c.code}
                            </p>
                            </div>
                        </button>
                    ))
                }
            </DrawerBody>            
            </DrawerContent>
        </Drawer>
        </>
    )
}

export default CoupCard