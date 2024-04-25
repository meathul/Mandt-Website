import React from 'react'
import './home.css'
import pd1 from '../assets/macaron_rose.png'
import pd2 from '../assets/mermaid_moon.png'
import pd3 from '../assets/golden_hour.png'
import Products from '../components/Products'
import prf from '../assets/profile_pic.png'
import bag from '../assets/home_bag.png'
import lineMain from '../assets/line_main.png'
import HerTile from '../components/hertile'
import HimTile from '../components/himtile'
import ThemTile from '../components/themtile'
import { Link } from 'react-router-dom'

const Home = () => {
  
  return (
    <>
        <div className='flex flex-col items-center'>
            <div className="home-header">
                <img src={prf} alt="" className='home-img' />
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
        <div className='flex flex-wrap justify-center mx-10'>
            <Products name="Somebody Wood" pic={pd1} price="₹1599"/>
            <Products name="Mermaid Moon" pic={pd2} price="₹1950"/>
            <Products name="Golden Hour" pic={pd3} price="₹1550"/>
            <Products name="Macaron Rose" pic={pd1} price="₹1599"/>
            <Products name="Mermaid Moon" pic={pd2} price="₹1950"/>
            <Products name="Golden Hour" pic={pd3} price="₹1550"/>
        </div>
        <HimTile/>
        <div className='flex flex-wrap justify-center'>
            <Products name="Macaron Rose" pic={pd1} price="₹1599"/>
            <Products name="Mermaid Moon" pic={pd2} price="₹1950"/>
            <Products name="Golden Hour" pic={pd3} price="₹1550"/>
            <Products name="Macaron Rose" pic={pd1} price="₹1599"/>
            <Products name="Mermaid Moon" pic={pd2} price="₹1950"/>
            <Products name="Golden Hour" pic={pd3} price="₹1550"/>
        </div>
        <ThemTile/>
        <div className='flex flex-wrap justify-center'>
            <Products name="Macaron Rose" pic={pd1} price="₹1599"/>
            <Products name="Mermaid Moon" pic={pd2} price="₹1950"/>
            <Products name="Golden Hour" pic={pd3} price="₹1550"/>
            <Products name="Macaron Rose" pic={pd1} price="₹1599"/>
            <Products name="Mermaid Moon" pic={pd2} price="₹1950"/>
            <Products name="Golden Hour" pic={pd3} price="₹1550"/>
        </div>
    </>
  )
}

export default Home


/*


<Products name="Macaron Rose" pic={pd1} price="₹1599"/>
        <Products name="Mermaid Moon" pic={pd2} price="₹1950"/>
        <Products name="Golden Hour" pic={pd3} price="₹1550"/>

display: flex;
    flex-wrap: wrap;
    justify-content: center;
*/