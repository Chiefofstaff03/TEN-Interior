/** @format */

import React from "react";
import "./About.css";
import bedroomImg from "../../assets/Image/bedroom.jpg";
import homeStagingImg from "../../assets/Image/homestagingg.jpg";
import review1Img from "../../assets/Image/review1.jpeg";
import review2Img from "../../assets/Image/review2.jpg";
import review3Img from "../../assets/Image/review3.jpg";
import review11Img from "../../assets/Image/review 11.jpg";
import land1Img from "../../assets/Image/land1.jpg";
const testimonialsData = [
  {
    name: "Rohit Mehta",
    role: "Startup Founder",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    quote:
      "Working with the design team transformed my home into a space that feels uniquely mine. Every corner reflects my vibe, and it's now the perfect blend of comfort and inspiration.",
  },
  {
    name: "Neha Sharma",
    role: "Freelance Designer",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    quote:
      "The attention to detail was incredible! My studio apartment went from cluttered to a serene, creative haven that sparks joy and productivity every day.",
  },
  {
    name: "Amit Verma",
    role: "Financial Consultant",
    image: "https://randomuser.me/api/portraits/men/48.jpg",
    quote:
      "I never thought my space could feel this alive. The design process was seamless, and the result is a home that's both sophisticated and welcoming—a true reflection of me.",
  },
];

const About = () => {
  return (
    <div className='about-container'>
      <section className='header'>
        <h2 className='banner'>Ten Interior Designs</h2>
        <div className='header-content'>
          <h1>
            About <span>Ten Design</span>
          </h1>
          <p>
            We are a team of passionate individuals committed to delivering the
            best products and services.
          </p>
        </div>
      </section>
      <section className='description'>
        <h4>The Foundation of Our Ethos</h4>
        <h1>
          Every home is a canvas of your essence, rich with personality and
          authentic expression.
        </h1>
        <p>
          Every detail weaves together to create a space that feels effortlessly
          inviting and vibrant, tailored to your unique rhythm. Our
          collaborative design approach shapes environments that reflect your
          lifestyle, blending function with personal flair. Your spaces become
          curated havens, crafted with intention and care. From a single room
          refresh to a full home transformation, we design to elevate how you
          connect with your surroundings daily.
        </p>
        <div className='imageContainer'>
          <img
            src={bedroomImg}
            alt='Bedroom design'
            className='backgroundImage'
            width={500}
            height={600}
          />
          <div className='overlayImageWrapper'>
            <img
              src={homeStagingImg}
              alt='Home staging'
              className='overlayImage'
              width={300}
              height={400}
            />
          </div>
        </div>
      </section>
      <section className='gallerySection'>
        <h1>
          Interior Design <span>Style Influences</span>
        </h1>
        <div className='galleryGrid'>
          <div className='firstcol'>
            <img
              src={review1Img}
              alt='Classic Art'
              className='item item1'
              height={300}
              width={200}
            />
            <img
              src={review3Img}
              alt='Natural Environment'
              className='item item2'
              height={300}
              width={200}
            />
          </div>
          <img
            src={review2Img}
            alt='Warm Palette'
            className='item item3'
            height={400}
            width={300}
          />
          <div className='secondcol'>
            <img
              src={review11Img}
              alt='Layered Textures'
              className='item item4'
              height={300}
              width={200}
            />
            <img
              src={land1Img}
              alt='Furnishings'
              className='item item5'
              height={300}
              width={200}
            />
          </div>
        </div>
      </section>

      <section id='testimonials'>
        <div className='container'>
          <h2>What Our Users Say</h2>
          <div className='testimonials-grid'>
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className='card'>
                <div className='card-content'>
                  <div className='user-info'>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className='user-image'
                    />
                    <div className='user-details'>
                      <div className='user-name'>{testimonial.name}</div>
                      <div className='user-role'>{testimonial.role}</div>
                    </div>
                  </div>
                  <div className='rating'>★ ★ ★ ★ ★</div>
                  <p className='quote'>"{testimonial.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
