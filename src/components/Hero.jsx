import gsap from 'gsap';
import {useGSAP} from '@gsap/react'
import {heroVideo, smallHeroVideo} from '../utils'
import { useEffect, useState } from 'react';

const Hero = () => {
  const [videoSrc, setvideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760){
      setvideoSrc(smallHeroVideo)
    }
    else{
      setvideoSrc(heroVideo)
    }
  }
  useEffect(()=> {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.addEventListener('resize', handleVideoSrcSet);
    }
  },[])
  useGSAP(() =>{
    gsap.to('#hero',{
      y:-5,
      opacity:1,
    })
    gsap.to('#cta', {
      opacity:1,
      delay: 1.5,
      y:-50
    })
  },[])
  return (
    <section className=' w-full nav-height bg-black relative'>
      <div className=' h-5/6 w-full flex-center flex-col'>
        <p className=' hero-title' id='hero'>IPHONES BAYBEEE</p>
        <div className=' md:w-10/12 w-9/12'>
          <video autoPlay muted playsInline={true} className=' pointer-events-none'>
            <source src={videoSrc} type='video/mp4'/>
          </video>
        </div>
      </div>
      <div className=' flex flex-col items-center opacity-0 translate-y-20' id='cta'>
        <a href="#highlights" className='btn'>BUY</a>
        <p className=' font-normal text-xl'>From Kes 19k/month or 199k</p>
      </div>
    </section>
  )
}

export default Hero
