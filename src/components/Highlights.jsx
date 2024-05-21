import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { rightImg, watchImg } from "../utils";
// import VideoCarousel from './VideoCarousel';


const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', {
      opacity: 1,
      delay: 1,
      y:-1
    })
    gsap.to('.link', {
      opacity: 1,
      duration: 1,
      y:-1,
      stagger: 0.25
    })
  },[])
  return (
   <section id="highlights" className=" w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className=" screen-max-width">
        <div className=" md:flex mb-12 w-full items-end justify-between">
          <h1 id="title" className=" section-heading">Get The Highlights</h1>
          <div className=" flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} className=" ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} className=" ml-2" />
            </p>
          </div>
        </div>
        
      </div>
      <VideoCarousel/>
   </section>
);
};

export default Highlights;
