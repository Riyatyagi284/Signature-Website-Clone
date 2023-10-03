import React,{useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "../compoStyle/Section8.css";
import EighthImg1 from "../../assets/eighth/img1.svg";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Section8 = () => {
    useEffect(() => {
        Aos.init();
      }, []);
    return (
        <>
            <section id="eighth-section" className="section common-section">
                <div className="tab-section">

                    <Tabs
                        defaultActiveKey="profile"
                        id="fill-tab-example"
                        className="mb-3 w-57"
                        fill
                    >
                        <Tab eventKey="home" title="SIGNATURE SERVE">
                            <div className="custom-tab">
                                <OwlCarousel items={2}
                                    loop={true} nav={false} margin={22} dots={false} responsive={{
                                        0: {
                                          items: 1
                                        },
                                        766: {
                                          items: 1
                                        },
                                        1000: {
                                          items: 2
                                        },
                                        1200: {
                                          items: 2
                                        }
                                      }} >

                                    <div className="item" data-aos="slide-up" data-aos-duration="1000" data-aos-delay="50">
                                        <div className="row">
                                            <div className="col-md-12 col-lg-6 col-12">
                                                <div className="left tab-leftImg">
                                                    <div className="left-img">
                                                        <img src={EighthImg1} alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-12 col-lg-6 col-12">
                                                <div className="right tab-rightContent">
                                                    <div className="text-greenish">
                                                        <label>001</label>
                                                    </div>
                                                    <h3 className="text-greenish common-heading-1">signature<br className='break' />premier</h3>
                                                    <p className="text-greenish common-p">Crafted from earth-friendly methods, this whiskey
                                                        unveils a harmonious blend of nature's abundance and silky elegance.</p>
                                                    <button className='text-lightgreen bg-deepgreen common-btn'>view recipe</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='item' data-aos="slide-up" data-aos-duration="1000" data-aos-delay="50">
                                        <div className="row">
                                            <div className="col-md-12 col-lg-6 col-12">
                                                <div className="left tab-leftImg">
                                                    <div className="left-img">
                                                        <img src={EighthImg1} alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-12 col-lg-6 col-12">
                                                <div className="right tab-rightContent">
                                                    <div className="text-greenish">
                                                        <label>002</label>
                                                    </div>
                                                    <h3 className="text-greenish common-heading-1">signature<br className='break' />rare</h3>
                                                    <p className="text-greenish common-p">Signature Rare reveals an unmistakable depth,
                                                        weaving
                                                        a tale of opulence that lingers on the palate, to savor all its layers.</p>
                                                    <button className='text-lightgreen bg-deepgreen common-btn'>view recipe</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </OwlCarousel>
                            </div>

                        </Tab>

                        <Tab eventKey="profile" title="REGION INSPIRED">
                            <OwlCarousel items={2}
                                loop={true} nav={false} margin={22} dots={false} responsive={{
                                    0: {
                                      items: 1
                                    },
                                    766: {
                                      items: 1
                                    },
                                    1000: {
                                      items: 2
                                    },
                                    1200: {
                                      items: 2
                                    }
                                  }}>

                                <div className="item" data-aos="slide-up" data-aos-duration="1000" data-aos-delay="50">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-6 col-12">
                                            <div className="left tab-leftImg">
                                                <div className="left-img">
                                                    <img src={EighthImg1} alt="" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12 col-lg-6 col-12">
                                            <div className="right tab-rightContent">
                                                <div className="text-greenish">
                                                    <label className='eighth-label2a'>001</label>
                                                </div>
                                                <h3 className="text-greenish common-heading-1">Filter<br className='break' /> Coconut
                                                    <br className='break' /> Kappi <span>(south)</span></h3>
                                                <p className="text-greenish common-p">Signature paired with the two most iconic flavours
                                                    of
                                                    coffee & coconut along with just the right amount of soda!</p>
                                                <button className='text-lightgreen bg-deepgreen common-btn'>view recipe</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='item' data-aos="slide-up" data-aos-duration="1000" data-aos-delay="50">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-6 col-12">
                                            <div className="left tab-leftImg">
                                                <div className="left-img">
                                                    <img src={EighthImg1} alt="" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12 col-lg-6 col-12">
                                            <div className="right tab-rightContent">
                                                <div className="text-greenish">
                                                    <label className='eighth-label2b'>002</label>
                                                </div>
                                                <h3 className="text-greenish common-heading-1">The signature<br className='break' />Cutting <span>west</span></h3>
                                                <p className="text-greenish common-p">Taste of Maharashtra with the famous masala tea
                                                    flavour, a lip smacking mix of pineapple and a touch of Jaggery.</p>
                                                <button className='text-lightgreen bg-deepgreen common-btn'>view recipe</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </OwlCarousel>
                        </Tab>

                        <Tab eventKey="longer-tab" title="RECIPES">
                            <OwlCarousel items={2}
                                loop={true} nav={false} margin={22} dots={false} responsive={{
                                    0: {
                                      items: 1
                                    },
                                    766: {
                                      items: 1
                                    },
                                    1000: {
                                      items: 2
                                    },
                                    1200: {
                                      items: 2
                                    }
                                  }}>

                                <div className="item" data-aos="slide-up" data-aos-duration="1000" data-aos-delay="50">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-6 col-12">
                                            <div className="left tab-leftImg">
                                                <div className="left-img">
                                                    <img src={EighthImg1} alt="" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12 col-lg-6 col-12">
                                            <div className="right tab-rightContent">
                                                <div className="text-greenish">
                                                    <label className='iiindLabel'>001</label>
                                                </div>
                                                <h3 className="text-greenish common-heading-1">signature<br className='break' />bay</h3>
                                                <p className="text-greenish common-p">Complementing the fine aromas is the salty sweet
                                                    syrup
                                                    made with Himalayan Pink salt and Palm Candy Sugar making this a whole some cocktail that has
                                                    a depth of flavors and long-lasting finish.</p>
                                                <button className='text-lightgreen bg-deepgreen common-btn'>view recipe</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='item' data-aos="slide-up" data-aos-duration="1000" data-aos-delay="50">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-6 col-12">
                                            <div className="left tab-leftImg">
                                                <div className="left-img">
                                                    <img src={EighthImg1} alt="" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12 col-lg-6 col-12">
                                            <div className="right tab-rightContent">
                                                <div className="text-greenish">
                                                    <label className='iiindLabel'>002</label>
                                                </div>
                                                <h3 className="text-greenish common-heading-1">East India<br className='break' />Julep</h3>
                                                <p className="text-greenish common-p">The flavours of east in west. Kaffir lime &amp; mint
                                                    cordial taking you back to a more nostalgic time, topped off with a perfect amount of lime
                                                    juice.</p>
                                                <button className='text-lightgreen bg-deepgreen common-btn'>view recipe</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </OwlCarousel>
                        </Tab>
                    </Tabs>

                </div>
            </section>
        </>
    )
}

export default Section8
