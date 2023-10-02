import React from 'react'
import SevenTopLeft from "../../assets/seventh/seven-top-left.webp"
import SevenTopRight from "../../assets/seventh/seven-top-right.webp"
import Arrow from "../../assets/seventh/Arrow.webp"
import SevenBottomLeft from "../../assets/seventh/seven-bottom-left.webp"
import SevenBottomRight from "../../assets/seventh/seven-bottom-right.webp"
import "../compoStyle/Section7.css"


const Section7 = () => {
    return (
        <>
            <section id="seventh-section" className='section common-section common-bg'>
                <div className="container">
                    <div className="seventh-container position-relative">
                        <img src={SevenTopLeft} className="top-left" alt="SevenTopLeft" />
                        <img src={SevenTopRight} className="top-right" alt="SevenTopRight" />
                        <div className="content">
                            <h2 className="text-lightgreen common-heading-2">
                                Nature In A Glass
                            </h2>
                            <p className="common-p text-whitealter">
                                Experience the beauty of nature in every sip with these special
                                curations crafted by the world’s top mixologists. Made with only the finest-locally sourced ingredients
                                that celebrate natural flavors and aromas of the earth.
                            </p>
                        </div>
                        <img src={Arrow} className="arrow" alt="SevenTopRight" />
                        <img src={SevenBottomLeft} className="bottom-left" alt="SevenTopRight" />
                        <img src={SevenBottomRight} className="bottom-right" alt="SevenTopRight" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section7
