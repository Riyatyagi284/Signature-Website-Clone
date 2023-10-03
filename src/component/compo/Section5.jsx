import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import Bottle from "../../assets/fourth/bottle.webp"
import FifthVideo from "../../assets/fifth/fifth-video.mp4"
import FifthBottomLeft from "../../assets/fifth/fifth-bottom-left.webp"
import FifthBottomLeft2 from "../../assets/fifth/fifth-bottom-left-2.webp"
import FifthBottomRight from "../../assets/fifth/fifth-bottom-right.webp"
import "../compoStyle/Section5.css"

const Section5 = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <>
            <section id="fifth-section" className="section common-section common-bg">
                <div className="container">
                    <div className="fifth-container">
                        <div className="row ">

                            <div className="col-xl-6 col-lg-12 col-md-12 col-12 order-xl-1 order-2">
                                <div className="left" data-aos="slide-right" data-aos-duration="1000" data-aos-delay="50">
                                    <h2 className='text-lightgreen common-heading-1'>signature rare aged whisky</h2>
                                    <span className='text-orangish text-uppercase'>deep & rich</span>
                                    <p className='text-whitealter common-p'>Signature Rare Whisky gives a perfect Taste that’s DEEP & RICH An
                                        authentically rich taste, with Notes of Dried Fruits & a nutty Aroma. A 3 Grain Whisky with Imported
                                        Scotch, Aged Indian Malts and Grain Spirits.The fine ingredients are purposefully sourced to bring
                                        out
                                        a remarkably rich character</p>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-12 col-md-12 col-12 order-xl-2 order-1">
                                <div className="right">
                                    <img src={Bottle} alt="bottle"  data-aos="slide-up" data-aos-duration="1000" data-aos-delay="50"/>
                                    <video src={FifthVideo} autoPlay={true} muted loop data-aos="slide-up" data-aos-duration="1000" data-aos-delay="50"></video>
                                    <img src={FifthBottomLeft} alt="bottle"  data-aos="slide-up" data-aos-duration="1000" data-aos-delay="50"/>
                                    <img src={FifthBottomLeft2} alt="bottle"  data-aos="slide-up" data-aos-duration="1000" data-aos-delay="50"/>
                                    <img src={FifthBottomRight} alt="bottle"  data-aos="slide-up" data-aos-duration="1000" data-aos-delay="50"/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section5