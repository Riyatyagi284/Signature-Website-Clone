import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import Bottle from "../../assets/fourth/bottle.webp"
import FourthVideo from "../../assets/fourth/fourth-video.mp4"
import Middle from "../../assets/fourth/fourth-middle.webp"
import BottomLeft from "../../assets/fourth/fourth-bottom-left.webp"
import BottomRight from "../../assets/fourth/fourth-bottom-right.webp"
import "../compoStyle/Section4.css"

const Section4 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section id="fourth-section" className="section common-section common-bg">
        <div className="container">
          <div className="fourth-container">
            <div className="row ">
              <div className="col-xl-6 col-lg-12 col-md-12 col-12">
                <div className="left">
                  <img src={Bottle} alt="bottle" data-aos="slide-up" data-aos-duration="1000" data-aos-delay="50" />
                  <video src={FourthVideo} autoPlay={true} muted data-aos="slide-up" data-aos-duration="1000" data-aos-delay="50"></video>
                  <img src={Middle} alt="bottle"  data-aos="slide-up" data-aos-duration="1000" data-aos-delay="50"/>
                  <img src={BottomLeft} alt="bottle"  data-aos="slide-up" data-aos-duration="1000" data-aos-delay="50"/>
                  <img src={BottomRight} alt="bottle" data-aos="slide-up" data-aos-duration="1000" data-aos-delay="50" />
                </div>
              </div>

              <div className="col-xl-6 col-lg-12 col-md-12 col-12">
                <div className="right" data-aos="slide-left" data-aos-duration="1000" data-aos-delay="50">
                  <h2 className='text-lightgreen common-heading-1'>signature premier whisky</h2>
                  <span className='text-orangish text-uppercase'>Smooth & Creamy</span>
                  <p className='text-whitealter common-p'>Signature Premier Whisky Gives a perfect smooth and creamy taste that's elevated sensorially with silky honey, a dash of fruitiness & tinge of Maltiness. An exquisite Scotch selection, Signature Premier is a blend of Natural Ingredients 10 Imported Scotches, Aged Indian Malts & Fine Grain Spirits.The fine ingredients are purposefully selected to bring out a remarkably creamy character</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section4