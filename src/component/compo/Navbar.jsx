import React, { useState } from 'react'
import Logo from "../../assets/logo.svg"
import navLinks from "../../Constant"
// import { navLinks } from "../../constant"
import close from "../../assets/close.svg"
import menu from "../../assets/menu.svg"
import Line4 from "../../assets/header/Line4.webp"
import InstaLogo from "../../assets/header/instalogo.webp"
import "../compoStyle/Navbar.css"

const Nav = () => {
  const [active, setActive] = useState("Home")
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <nav className='nav-wrapper'>
        <div className="logo">
        <img src={Logo} alt="Signature" />
        </div>
        {/* ##########this code is for desktop screen############## */}
        <ul className="nav-lists">
          {
            navLinks.map((nav, index) => {
              return <li key={nav.id} className={`nav-list ${active === nav.title ? "text-white" : "text-dimWhite"} 
                ${index === navLinks.length - 1 ? "last-list" : "other-list"}`}
                onClick={() => setActive(nav.title)}
              >
                {
                  index === navLinks.length - 1 ? (
                    <>
                      <img src={Line4} alt="" className="line-4" />
                      <img src={InstaLogo} alt="" className='insta-logo' />
                      <a href="/" className='bebas'>{nav.title}</a>
                    </>
                  ) : (<a href={`#{nav.id}`} className='bebas'>{nav.title}</a>)
                }
              </li>
            })
          }
        </ul>

        {/* ###############this code is for small screens################ */}
        <div className="menu-btns" style={{cursor:"pointer"}}>
          <img src={toggle ? close : menu} alt="menu" className='menu' onClick={() => setToggle(!toggle)} />
        </div>

        {/* <ul className="desktop-list-items">
          {
            navLinks.map((nav, index) => {
              <li key={nav.id} className={`nav-list ${active === nav.title ? "text-white" : "text-dimWhite"} ${index === navLinks.length - 1 ? "last-list" : "other-list"}`}>
                {
                  index === navLinks.length - 1 ? (
                    <>
                      <img src={Line4} alt="" className="line-4" />
                      <img src={InstaLogo} alt="" className='insta-logo' />
                      <a href="/" className='bebas'>{nav.title}</a>
                    </>
                  ) : (<a href={`#{nav.id}`} className='bebas'>{nav.title}</a>)
                }
              </li>
            })
          }
        </ul> */}
      </nav>
    </>
  )
}

export default Nav