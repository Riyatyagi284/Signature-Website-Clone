import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import HomeFirstBg from "../../assets/home/firstbg.svg"
import Leaf from "../../assets/home/leaf.svg"
import HomeSymbol from "../../assets/home/symbol.svg" 
import HomeBottom from "../../assets/home/bottom.webp"
import "../compoStyle/Section1.css"


const Section1 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
     <>
       <section id="home-section" className="section common-section">
        <div className="home-container">
            <img src={HomeFirstBg}  className='home-first-bg' alt="HomeBgImg" />
            <div className="content container">
                <div className="text-section" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="20">
                    <h1 className='text-white common-heading-1'>CRAFTED FROM NATURE 
                    <span className='position-relative'><img src={Leaf} alt="leaf" className='position-absolute'/></span></h1>

                    <p className='common-p text-white'>Welcome to the world of Signature Setting out a bold vision to be India’s
              Green Whisky, the all-new Signature is as authentic & natural as it gets. Our whisky is an exquisite blend
              of nature’s finest ingredients - two row & six row strains of barley, fresh water and fine grain spirits
              imported from Scottish highlands and spey-side. Crafted with perfection by our Master Blender Louise
              Martin, it is truly unique, full of character & bound to leave a lasting signature. Taste of Nature in a
              Glass!</p>

              <img src={HomeSymbol} alt="symbol" className='symbol-img' data-aos="slide-up" data-aos-duration="1000" data-aos-delay="30" />
              <button className="bg-deepgreen text-lightgreen common-btn">VIEW RECIPES</button>
                </div>
            </div>
            <img src={HomeBottom} alt="HomeBottle" className="bottom-img" /> 
        </div>
       </section>
     </>
  )
}

export default Section1