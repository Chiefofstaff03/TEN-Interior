/** @format */

import React from "react";
import "./project4.css";
import image from "/src/assets/Image/land3.jpg";
import image2 from "/src/assets/Image/land2.jpg";
import image3 from "/src/assets/Image/hm1.jpg";
import image4 from "/src/assets/Screen1.png";
import image5 from "/src/assets/Image/review 11.jpg";
import image6 from "/src/assets/Image/premium.jpg";
import logo from "/src/assets/Image/logo.png";


const Project4 = () => {
  return (
    <div>
      <section className='header4'>
        <h2 className='banner'>Ten Interior Designs</h2>
        <div className='header-content'>
          <h1>West Avenue</h1>
          <p>Home Renovation & Interior Style</p>
        </div>
      </section>
      <section className='description'>
        <h4>High Park</h4>
        <h3>Project Location- Surat, India</h3>
        <p>
          This thoughtful renovation introduced a harmonious blend of
          sophistication and livability, transforming the interiors into a
          serene yet stylish retreat. Designed with intentionality, each space
          now reflects the nuanced rhythm of daily life while showcasing
          elevated material choices. The objective was to create an atmosphere
          of calm and cohesion, highlighted by organic textures and a soft
          palette of stone, linen, and oak. In the main living area, we added
          bespoke cabinetry and layered textiles to enhance both practicality
          and visual interest. Sightlines were optimized for flow, with open
          thresholds and subtle transitions guiding movement from one room to
          the next. Details such as arched doorways, fluted wall panels, and
          artisanal finishes lend a sense of craftsmanship that feels both
          modern and rooted. Welcome to Willow Lane – a home curated for
          comfort, connection, and quiet luxury.
        </p>
        <span className='photographer'>Photography- john doe</span>
        <a href='https://ten-interior.vercel.app/portfolio'>
          <button className='button'>Back to Portfolio </button>
        </a>
      </section>
      <section className='picture4'>
        <div className='text4'>
          <h4>Projects Highlight</h4>
        </div>
        <div className='gallary4'>
          <img src={image} alt='' height={500} width={400} />
          <img src={image2} alt='' height={500} width={400} />
          <img src={image3} alt='' height={500} width={400} />
          <img src={image4} alt='' height={500} width={400} />
          <img src={image5} alt='' height={500} width={400} />
          <img src={image6} alt='' height={500} width={400} />
        </div>
      </section>
      <section className='appoinment4'>
        <div className='text2'>Ready To Work Together?</div>
        <button className='btn2'>SCHEDULE AN APPOINMENT</button>
      </section>
      <section className='interior-gallary'>
        <div className='para4'>
          <div className='logo'>
            <img src={logo} alt='' height={50} width={50} />
          </div>
          <p>
            A Surat-based boutique interior design studio crafting personalized
            spaces for modern dreamers, vibrant transformations, and curated
            details. We believe every space should weave a narrative — bold,
            timeless, and uniquely yours. At Studio Verve, our approach blends
            sophistication with warmth, creating designs that balance elegance
            and individuality. Whether you’re drawn to coastal serenity, urban
            chic, or eclectic vibrance, we transform your vision into reality
            with passion and precision.
          </p>
        </div>
        <div className='images4'>
          <img src={image} alt='' className='image' />
          <img src={image2} alt='' className='image2' />
          <img src={image3} alt='' className='image3' />
          <img src={image4} alt='' className='image4' />
          <img src={image5} alt='' className='image5' />
        </div>
      </section>
    </div>
  );
};

export default Project4;
