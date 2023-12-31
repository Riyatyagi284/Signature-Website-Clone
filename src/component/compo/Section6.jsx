import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import SixthVideo from "../../assets/sixth/sixth-video.mp4"
import SixthTop from "../../assets/sixth/sixth-top.webp"
import PlayVideoBtn from "../../assets/sixth/play.webp"
import SixthBottomLeft from "../../assets/sixth/sixth-bottom-left.webp"
import SixthBottomRight from "../../assets/sixth/sixth-bottom-right.webp"
import SixthBottomRight2 from "../../assets/sixth/sixth-bottom-right-2.webp"

import "../compoStyle/Section6.css"

const Section6 = () => {
    useEffect(() => {
        AOS.init();
      }, []);
      const playTheVideo = () => {
        
      }

    return (
        <>
            <section id="sixth-section" className='section common-section common-bg'>
                <video src={SixthVideo} className='d-none' controls loop muted></video>
                <div className="container position-relative">
                    <img src={SixthTop} className="SixthTop" alt="sixthTop" data-aos="slide-up" data-aos-duration="1000" data-aos-delay="20"/>

                    <div className="sixth-container" data-aos="slide-up" data-aos-duration="1000" data-aos-delay="30">
                        <h2 className=" text-lightgreen wow fadeInUp text-center common-heading-2" data-wow-duration="1.5s">Grain To
                            Glass</h2>
                        <p className="common-p text-whitealter wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">From
                            the careful sourcing of organic, locally grown grains to the use of energy-efficient distillation methods,
                            sustainability is always at the forefront. The result? A sustainably produced whiskey, from grain to glass.
                            So, sip and savour this sublime concoction, knowing that it was crafted with a commitment to both taste and
                            the planet.</p>
                    </div>
                    <img src={SixthBottomLeft}  className="sixthBottomLeft" alt="SixthBottomLeft" data-aos="slide-up" data-aos-duration="1000" data-aos-delay="40"/>
                    <img src={PlayVideoBtn}  className="PlayBtn" alt="PlayVideoBtn" onClick={playTheVideo} data-aos="slide-up" data-aos-duration="1000" data-aos-delay="50"/>
                    <img src={SixthBottomRight}  className="SixthBottomRight" alt="SixthBottomRight" data-aos="slide-up" data-aos-duration="1000" data-aos-delay="60"/>
                    <img src={SixthBottomRight2} className="SixthBottomRight2"  alt="SixthBottomRight2" data-aos="slide-up" data-aos-duration="1000" data-aos-delay="60"/>
                </div>
            </section>
        </>
    )
}

export default Section6