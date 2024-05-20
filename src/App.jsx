import React from 'react'
import Highlights from './components/Highlights';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className=' bg-black relative'>
      <Navbar/>
      <Hero/>
      <Highlights/>
      
    </main>
  )
}

export default App