import React from 'react'
import Headroom from 'react-headroom'
import Navbar from "./component/compo/Navbar"
import Section1 from "./component/compo/Section1"
import Section2 from './component/compo/Section2'
import Section4 from './component/compo/Section4'
import Section5 from './component/compo/Section5'
import Section6 from './component/compo/Section6'
import Section7 from './component/compo/Section7'
import Section8 from './component/compo/Section8'
import Section9 from './component/compo/Section9'
import Footer from "./component/compo/Footer.jsx"
const App = () => {
  return (
    <>
      <Headroom>
        <Navbar />
      </Headroom>
      <Section1 />
      <Section2 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      {/* <Section9 /> */}
      <Footer />
    </>
  )
}

export default App