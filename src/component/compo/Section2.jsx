import React from 'react'
import Sign from "../../assets/second/sign.webp"
import CarouselTopLeft from "../../assets/carousel-image-1/carousel-1-top-left.webp"
import CarouselTopRight from "../../assets/carousel-image-1/carousel-1-top-right.webp"
import CarouselMiddleLeft from "../../assets/carousel-image-1/carousel-1-middle-left.webp"
import CarouselMiddle from "../../assets/carousel-image-1/carousel-1-middle.mp4"
import CarouselMiddleRight from "../../assets/carousel-image-1/carousel-1-middle-right.webp"
import CarouselBottomRight from "../../assets/carousel-image-1/carousel-1-bottom-right.webp"
import BornOfCraft from "../../assets/third/born-of-craft.mp4"

import Carousel2TopLeft from "../../assets/carousel-image-2/carousel-2-top-left.webp"
import Carousel2TopLeft2 from "../../assets/carousel-image-2/carousel-2-top-left-2.webp"
import Carousel2Middle from "../../assets/carousel-image-2/carousel-2-middle.webp"
import Carousel2Video from "../../assets/carousel-image-2/carousel-2-video.mp4"
import Carousel2BottomLeft from "../../assets/carousel-image-2/carousel-2-bottom-left-2.webp"
import Carousel2BottomRight from "../../assets/carousel-image-2/carousel-2-bottom-right.webp"
import Carousel2BottomRight2 from "../../assets/carousel-image-2/carousel-2-bottom-right-2.webp"

import "../compoStyle/Section2.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Section2 = () => {
    return (
        <>
            <section id="second-section" className='section common-section '>
                <div className="common-bg">
                    <div className="container">
                        <div className="second-container">
                            <div className="row">
                                <div className="col-xl-5">
                                    <div className="left position-relative">
                                        <h2 className='text-lightgreen common-heading-1'>the signature of our master blender</h2>
                                        <p className='common-p text-whitealter'>In the skilled hands of Louise Martin, our Master Blender, the new
                                            Signature attains a level of perfection that is truly remarkable. Her meticulous craftsmanship infuses
                                            every sip of these exquisite blends with a sense of revelation, offering a remarkably smooth and
                                            delightfully rich experience.</p>
                                        <img src={Sign} alt="signature" />
                                    </div>
                                </div>

                                <div className="col-xl-7">
                                    <div className="right first-carousel">
                                        <OwlCarousel items={1}
                                            loop={true} nav={true} margin={22} dots={true} autoplay={false} autoplayTimeout={3000} >

                                            <div className="item">
                                                <div className="img-container-1">
                                                    <img src={CarouselTopLeft} alt="CarouselTopLeft" />
                                                    <img src={CarouselTopRight} alt="CarouselTopRight" />
                                                    <img src={CarouselMiddleLeft} alt="CarouselMiddleLeft" />
                                                    <video src={CarouselMiddle} autoPlay muted loop className="middle"></video>
                                                    <img src={CarouselMiddleRight} alt="CarouselMiddleRight" />
                                                    <video src={BornOfCraft} autoPlay muted loop className="bottom-left"></video>
                                                    <img src={CarouselBottomRight} alt="CarouselBottomRight" />
                                                </div>
                                            </div>


                                            <div className="item">
                                                <div className="img-container-2">
                                                    <img src={Carousel2TopLeft} alt="Carousel2TopLeft" />
                                                    <img src={Carousel2TopLeft2} alt="Carousel2TopLeft2" />
                                                    <img src={Carousel2Middle} alt="CarouselMiddle" />
                                                    <video src={Carousel2Video} autoPlay muted loop className="bottom-left"></video>
                                                    <img src={Carousel2BottomLeft} alt="CarouselBottomLeft2" />
                                                    <img src={Carousel2BottomRight} alt="CarouselBottomRight" />
                                                    <img src={Carousel2BottomRight2} alt="CarouselBottomRight2" />
                                                </div>
                                            </div>
                                        </OwlCarousel>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section2