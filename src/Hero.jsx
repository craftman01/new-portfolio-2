import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'

const Hero = () => {
  return (
    <div className='bg-[#ACCEF0]' >
      <Navbar />
      <Home />
      <About />
    </div>
  )
}

export default Hero
