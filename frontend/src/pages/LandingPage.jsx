import  React, { useEffect, useRef } from 'react'
import './fonts.css'
import menImg from '../assets/men.png'
import unisexImg from '../assets/unisex.png'
import womenImg from '../assets/women.png'
import line from '../assets/line.png'
import ourStory from '../assets/ourStory.png'
import { motion, useInView, useAnimation } from "framer-motion"
import axios from 'axios'


const LandingPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
        mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const handleClick = async () => {
    try {
        const res = await axios.get("http://localhost:8800/landingpage")
        if (res.data !== 0) {
            window.location.href = "http://localhost:3000/home"
        }
        else{
            window.location.href = "http://localhost:3000/login"
        }
    } catch (err) {
        console.log(err)
    }
  }

  return (
    <div> 
        <div className='intro-container'
        >
            <p className='logo'>
                MANDT
            </p>
            <p className="intro">
                Much More Than Perfume
            </p>
            <button className='shop-button' onClick={handleClick}>
                SHOP NOW               
            </button>
        </div>
        <div>
            <p className='mandt-caption'>
            Indulge in the sensory experience of MANDT, a fragrance that captivates hearts and let your fragrance do the talking
            </p>
        </div>
        <motion.div className='categories' ref = {ref}
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
            }}
            initial= "hidden"
            animate= {mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
        >
            <div className='category-men'>
                <img src={menImg} alt='' className='men-img'/>
                <p className='men-name'>
                    MEN 
                </p>
                <img src={line} alt="" className='men-line' />
            </div>
            <div className='category-men'>
                <img src={unisexImg} alt='' className='men-img'/>
                <p className='men-name'>
                    UNISEX
                </p>
                <img src={line} alt="" className='men-line' />
            </div>
            <div className='category-men'>
                <img src={womenImg} alt='' className='men-img'/>
                <p className='men-name'>
                    WOMEN
                </p>
                <img src={line} alt="" className='men-line' />
            </div>
        </motion.div>
        <div className='our-story'>
            <div className='story-content'>
                <h1 className='story-title'>
                    OUR STORY
                </h1>
                <p className='story-desc'>
                    We started as a small perfume tester center in India. Our main idea was to create fragrances that symbolizes art form of luxury. Our passion for exquisite scents is what drove us to curate the finest perfumes from around the world, offering a sensory journey that captivates the soul. Explore our collection and experience the essence of elegance, sophistication and allure
                </p>
            </div>
            <img src={ourStory} alt="" className='story-img'/>
            
        </div>
    </div>    
  )
}

export default LandingPage