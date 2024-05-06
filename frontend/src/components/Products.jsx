import React, { useRef } from 'react'
import './prdts.css'
import line_cart from '../assets/lineCart.png'
import cartimg from '../assets/Cart.png'
import axios from 'axios'
import cartButtonClick from './cartButton'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure, Button } from '@chakra-ui/react'
import Desc from './description'

const Products = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef(null)

  const handleCart = (id, name, price, pic) => {
    onClose()
    props.cartButtonClick(id, name, price, pic)
  }

  return (
    <div className='product-card'>
        <button ref={btnRef} onClick={onOpen}>
            <img src={props.pic} alt="" className='product-img'/>
        </button>
        <div className='product-box'key={props.id}>
            <button className='product-container' onClick={onOpen}>
              <div className="product-dets">
                  <p className='product-name'>
                      {props.name}
                  </p>
                  <p className='product-price'>
                      {'₹'+props.price}
                  </p>
              </div>
              <img src={line_cart} alt="" className='product-line'/>
            </button>
            {/* delete props.price and props.pic..........later delete props.name when deleting console.log */}
            <button className='product-cart' onClick={() => props.cartButtonClick(props.id, props.name, props.price, props.pic)}>
                <img src={cartimg} alt="" />
            </button>
        </div>
        <div className='desc-modal'>
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset='slideInBottom'
          size={'3xl'}
        >
          <ModalOverlay />
          <ModalContent>
            <Desc id={props.id} name={props.name} img={props.pic} desc={props.desc} ml={props.ml} price={props.price} cartButtonClick={handleCart}/>
          </ModalContent>
        </Modal>
        </div>
    </div>
  )
}

export default Products


/*
<button className='product-add'>
            ADD TO BAG
        </button>
*/


/*

const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div className='product-card'>
        <button onClick={toggleModal}>
            <img src={props.pic} alt="" className='product-img'/>
            <div className='product-box'key={props.id}>
                <div className="product-dets">
                    <p className='product-name'>
                        {props.name}
                    </p>
                    <p className='product-price'>
                        {'₹'+props.price}
                    </p>
                </div>
                <img src={line_cart} alt="" className='product-line'/>
                {/* delete props.price and props.pic..........later delete props.name when deleting console.log }
                <button className='product-cart' onClick={() => props.cartButtonClick(props.id, props.name, props.price, props.pic)}>
                    <img src={cartimg} alt="" />
                </button>
            </div>
        </button>
        {modal && (<Desc toggleModal={toggleModal}/>)}
    </div>
  )

<Modal
            isCentered
            onClose={onClose}
            isOpen={isOpen}
            motionPreset='slideInBottom'
        >
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                blah blah blah
            </ModalBody>
            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
                </Button>
                <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
*/