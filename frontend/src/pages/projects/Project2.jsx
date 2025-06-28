/** @format */

import React from "react";
import "./project2.css";
import image from "/src/assets/Image/land3.jpg";
import image2 from "/src/assets/Image/land2.jpg";
import image3 from "/src/assets/Image/land1.jpg";
import image4 from "/src/assets/Screen1.png";
import image5 from "/src/assets/Image/review11.jpg";
import logo from "/src/assets/Image/logo.png";

const Project2 = () => {
  return (
    <div>
      <div className='about-container'>
        <section className='header2'>
          <h2 className='banner'>Ten Interior Designs</h2>
          <div className='header-content'>
            <h1>Etobicoke</h1>
            <p>coming winter 2025</p>
          </div>
        </section>
        <section className='description'>
          <h4>Bridgestone Lane</h4>
          <h3>Project Location- Delhi, India</h3>
          <p>
            This considered redesign brought a quiet elegance to the home,
            balancing warmth with modern refinement. Each room was thoughtfully
            reimagined to support everyday rituals while offering moments of
            visual pause. Natural light plays a key role, illuminating a palette
            of warm neutrals, brushed brass, and pale walnut. The kitchen was
            outfitted with tailored millwork and integrated storage to maintain
            clean lines without sacrificing function. Flow was enhanced through
            widened entries and cohesive finishes, creating a seamless
            transition from space to space. Touches like curved niches, textured
            plaster, and handmade ceramic sconces introduce depth and artisanal
            character. Welcome to Alder House – a serene sanctuary where
            simplicity meets soul. Want another one with a slightly bolder or
            more minimalist vibe?
          </p>
          <span className='photographer'>Photography- john doe</span>
          <a href='https://ten-interior.vercel.app/portfolio'>
            <button className='button'>Back to Portfolio </button>
          </a>
        </section>
        <section className='appoinment2'>
          <div className='text2'>Ready To Work Together?</div>
          <button className='btn2'>SCHEDULE AN APPOINMENT</button>
        </section>
        <section className='interior-gallary2'>
          <div className='para2'>
            <div className='logo'>
              <img src={logo} alt='' height={50} width={50} />
            </div>
            <p>
              A Delhi-based contemporary design studio crafting personalized
              interiors for modern homes, elegant makeovers, and thoughtfully
              sourced décor. We believe every space should echo the rhythm of
              its residents — refined, intentional, and uniquely theirs. At
              Studio Verra, our approach blends clean aesthetics with smart
              functionality, designing environments that balance serenity with
              sophistication. Prefer a cozy modern vibe, minimalist flair, or
              timeless traditional feel?
            </p>
          </div>
          <div className='gallary2'>
            <img src={image} alt='' />
            <img src={image2} alt='' />
            <img src={image3} alt='' />
            <img src={image4} alt='' />
            <img src={image5} alt='' className='image5' />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project2;
