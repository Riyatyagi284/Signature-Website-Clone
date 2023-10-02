import React from 'react'
import BottomRight from "../../assets/ninth/ninth-bottom-right.webp"
import BottomLeft from "../../assets/ninth/ninth-bottom-left.mp4"
import TopLeft from "../../assets/ninth/ninth-top-left.mp4"
import TopRight from "../../assets/ninth/ninth-top-right.mp4"

import "../compoStyle/Section9.css"


const Section9 = () => {
  return (
    <>
      <section id="ninth-container" className="section common-section">
        <div className="container">
            <div className="ninth-container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="left">
                            <h2 className="text-greenish common-heading-2 text-center">
                            OUR MIXOLOGISTS
                            </h2>
                            <p className="common-p text-greenish">
                            Our mixologists elevate libations to liquid art, crafting
                  unforgettable cocktails and drinks that galvanize the senses.   
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 p-3">
                        <div className="right">
                            <div className="video-top">
                                <div className="row">
                                    <div className="col-md-6 col-sm-7 col-6 m-0 p-0">
                                        <div className="top-left">
                                            <video src={TopLeft} className="top-left" autoPlay muted loop></video> 
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-5 col-6 m-0 p-0">
                                        <div className="top-right">
                                            <video src={TopRight} className="top-right" autoPlay muted loop></video>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="video-bottom pt-1">
                                <div className="row">
                                    <div className="col-md-7 col-6 m-0 p-0">
                                        <div className="bottom-left">
                                            <video src={BottomLeft} className="bottom-left" autoPlay muted loop ></video>
                                        </div>
                                    </div>
                                    <div className="col-md-5 col-6 m-0 p-0">
                                        <div className="bottom-right">
                                            <img src={BottomRight} className="bottom-right" alt="BottomRight" />
                                        </div>
                                    </div>
                                </div>
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

export default Section9
