import React, { useState, useEffect } from 'react'
import "../compoStyle/Navbar.css"
import Logo from "../../assets/logo.svg"
import Line4 from "../../assets/header/Line4.webp"
import InstaLogo from "../../assets/header/instalogo.webp"

const Navbar = () => {
  const [didScroll, setDidScroll] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const delta = 5;
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [scrollDirection,setScrollDirection] = useState('scroll-down');

  // Height of navbar on component mount
  useEffect(() => {
    const headerElement = document.getElementById('header-section')
    if (headerElement) {
      setNavbarHeight(headerElement.getBoundingClientRect().height);
    }
  }, []);

  // Height of navbar on scroll
  useEffect(() => {
     const handleScroll = () => {
      setDidScroll(true);
     };

     window.addEventListener('scroll',handleScroll);

     return () => {
      window.removeEventListener('scroll',handleScroll)
     };
  },[])

  // Handle scrolling using useEffect hook with didScroll dependency

  useEffect(() => {
    function hasScrolled() {
      const st = window.scrollY;

      if(Math.abs(lastScrollTop - st) <= delta) return;

      if(st > lastScrollTop && st > navbarHeight){
        setScrollDirection('scroll-up')
      }else{
        setScrollDirection('scroll-down')
      }
      setLastScrollTop(st);
    setDidScroll(false);
    }

   if (didScroll) {
    hasScrolled();
   }
    
  }, [didScroll, lastScrollTop, navbarHeight])




  return (
    <>
      <header id="header-section">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        <ul>
          <li><a href="/" className='bebas'>our story</a></li>

          <li><a href="#second-section" className='bebas master-blender'>master blender</a></li>

          <li><a href="/" className='bebas'>recipes</a></li>

          <li>
            <img src={Line4} alt="Line1" className='line-4' />
            <img src={InstaLogo} alt="Line1" className='insta-logo' />
            <a href="/" className='bebas'>instagram</a>
          </li>

        </ul>
      </header>
    </>
  )
}

export default Navbar