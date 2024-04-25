import React from 'react'
import './items.css'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
  import { Button, ButtonGroup } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
  
import CouponID from './couponID'

const CoupCard = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    
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
                <CouponID number='1'/>
                <CouponID number='2'/>
                <CouponID number='3'/>
                <CouponID number='4'/>
            </DrawerBody>            
            </DrawerContent>
        </Drawer>
        </>
    )
}

export default CoupCard


/*
<div>
        <button className='coupon-button'>
            APPLY COUPONS
        </button>
    </div>


<DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
                </Button>
                <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
*/