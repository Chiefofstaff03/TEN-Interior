import React from "react";
import "./project3.css";
import image from "/src/assets/Image/land3.jpg";
import image2 from "/src/assets/Image/land2.jpg";
import image3 from "/src/assets/Image/land1.jpg";
import image4 from "/src/assets/Screen1.png";
import image5 from "/src/assets/Image/review 11.jpg";
import logo from "/src/assets/Image/logo.png";

const Project3 = () => {
  return (
    <div>
      <section className="header3">
        <h2 className="banner">Ten Interior Designs</h2>
        <div className="header-content">
          <h1>High Park</h1>
          <p>Home Renovation & Interior Style</p>
        </div>
      </section>
      <section className="description">
        <h4>High Park</h4>
        <h3>Project Location- Indore, India</h3>
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
        <span className="photographer">Photography- john doe</span>
        <button className="button">Back to Portfolio </button>
      </section>
      <section className="picture">
        <div className="text3">
          <h4>Projects Highlight</h4>
        </div>
        <div className="gallary3">
          <img src={image} alt="" height={500} width={400} />
          <img src={image2} alt="" height={500} width={400} />
          <img src={image3} alt="" height={500} width={400} />
          <img src={image4} alt="" height={500} width={400} />
          <img src={image5} alt="" height={500} width={400} />
        </div>
      </section>
      <section className="appoinment3">
        <div className="title3">Ready To Work Together?</div>
        <button className="btn3">SCHEDULE AN APPOINMENT</button>
      </section>
      <section className="interior-gallary">
        <div className="para3">
          <div className="logo">
            <img src={logo} alt="" height={50} width={50} />
          </div>
          <p>
            A Indore-based boutique interior studio curating bespoke spaces for
            urban lifestyles, chic transformations, and handpicked accents. We
            believe that every corner should tell a story — authentic, elegant,
            and deeply personal. At Atelier Nivara, our philosophy marries
            simplicity with soul, crafting designs that speak to both comfort
            and creativity. Whether you lean towards earthy modern tones, sleek
            minimalism, or a hint of vintage charm — we bring your vision to
            life with style and substance.
          </p>
        </div>
        <div className="images3">
          <img src={image} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
          <img src={image5} alt="" className="image5" />
        </div>
      </section>
    </div>
  );
};

export default Project3;
