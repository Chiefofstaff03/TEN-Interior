import React from "react";
import "./project1.css";
import image from "/src/assets/Image/modern living room.jpg";
import image2 from "/src/assets/Image/modern plan.jpg";
import image3 from "/src/assets/Image/modernn plan 2.jpg";
import image4 from "/src/assets/Screen2.png";
import image5 from "/src/assets/Screen3.png";
import logo from "/src/assets/Image/logo.png";


const Project1 = () => {
  return (
    <div>
      <div className="about-container">
        <section className="header">
          <h2 className="banner">Ten Interior Designs</h2>
          <div className="header-content">
            <h1>Bridgestone Lane</h1>
            <p>coming winter 2025</p>
          </div>
        </section>
        <section className="description">
          <h4>Bridgestone Lane</h4>
          <h3>Project Location- Mumbai, India</h3>
          <p>
            This upper-level transformation brought a refined balance between
            comfort and elegance, reimagining the space to better reflect the
            lifestyle and aesthetic preferences of the homeowners. The primary
            goal was to infuse the interiors with warmth and intentional detail,
            while maximizing natural light throughout. Rich textures and curated
            tones of sage, cream, and walnut come together to form a cohesive
            palette with timeless appeal. In the lounge area, we introduced
            custom built-ins and layered lighting to elevate both functionality
            and ambiance. The redesign also emphasizes flow, with carefully
            positioned partitions that define areas without closing them off.
            Architectural flourishes such as vaulted ceilings, curved niches,
            and handcrafted millwork add depth and character at every turn. Step
            inside Forest Hill – a space designed for both quiet moments and
            meaningful gatherings.
          </p>
          <span className="photographer">Photography- john doe</span>
          <a href="https://ten-interior.vercel.app/portfolio">
            <button className="button">BACK TO PORTFOLIO </button>
          </a>
        </section>
        <section className="appoinment">
          <div className="text">Ready To Work Together?</div>
          <button className="btn">SCHEDULE AN APPOINMENT</button>
        </section>
        <section className="demos">
          <div className="paragraph">
            <div className="tenlogo">
              <img src={logo} alt="" height={50} width={50} />
            </div>
            <p>
              A Mumbai-based boutique interior design studio specializing in
              bespoke residential spaces, luxury renovations, and curated
              furnishings. We see every home as a reflection of its inhabitants
              — a blend of personality and purpose. At Aria Living, our designs
              merge timeless elegance with functional living, crafting spaces
              that speak to both style and story. Want it to lean more modern,
              minimalist, or traditional?
            </p>
          </div>
          <div className="gallary">
            <img src={image} alt="" className="image" />
            <img src={image2} alt="" className="image2" />
            <img src={image3} alt="" className="image3" />
            <img src={image4} alt="" className="image4" />{" "}
            <img src={image5} alt="" className="image5" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project1;
