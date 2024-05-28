import React from 'react'
import Highlights from './components/Highlights';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Model from './components/Model';
import Features from './components/Features';

const App = () => {
  return (
    <main className=' bg-black relative'>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
      
    </main>
  )
}

export default App