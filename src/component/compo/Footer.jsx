import React,{useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import FootBottles from "../../assets/footer/bottles.webp"
import Logo from "../../assets/logo.svg"
import FootLeaf from "../../assets/footer/leaf-green.svg"
import "../compoStyle/Footer.css"

const Footer = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <footer id="footer-section" className="section">
        <div className="container">
            <div className="footer-container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="left" data-aos="slide-right" data-aos-duration="1000" data-aos-delay="50">
                            <img src={FootBottles} alt="FootBottles" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="right" data-aos="slide-left" data-aos-duration="1000" data-aos-delay="50">
                            <img src={Logo} alt="Logo" />
                            <h3 className='text-greenish common-heading-1 position-relative'>
                            CRAFTED FROM NATURE,<span className="leaf-green"><img src={FootLeaf} alt="FootLeaf" className='position-absolute' /></span>my signature
                            </h3>
                            <span className='text-greenish font-weight-bold'>&copy; 2023 Diageo</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer