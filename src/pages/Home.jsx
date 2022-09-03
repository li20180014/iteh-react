import React from 'react'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Cards from '../components/cards/Cards'
import images from '../components/slider/images'
import Slider from '../components/slider/Slider'
import Staff from '../components/staff/Staff'


const Home = () => {
  return (
    <div style={{backgroundColor: "#1A1A1D"}}>
      <Slider images = {images}/>
      <About/>
      <Cards/>
      <Staff/>
      <Contact/>
    </div>
  )
}

export default Home
