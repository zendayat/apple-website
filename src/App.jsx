import React from 'react'
import Highlights from './components/Highlights';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';

const App = () => {
  return (
    <main className=' bg-black relative'>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
      <HowItWorks/>
      
    </main>
  )
}

export default App