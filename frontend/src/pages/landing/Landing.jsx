import React, { useState, useEffect } from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';
import image1 from "../../assets/Image/image.png";
import image2 from "../../assets/Image/land1.jpg";
import image3 from "../../assets/Image/land2.jpg";
import image4 from "../../assets/Image/land3.jpg";

const LandingPage = () => {
  const carouselImages = [image2, image3, image4, image1];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-page">
      <header className="hero-section">
        <div className="logo-container">
          <h1 className="logo">TEN INTERIORS</h1>
        </div>
        <div className="hero-content">
          <h2 className="hero-title">Artfully Curated,<br /><em>Naturally Inspired</em> Interiors</h2>
          <Link to="/contact">
            <button className="cta-button">Work with Us</button>
          </Link>
        </div>
      </header>

      <section className="services-section">
        <h3 className="section-title">Our Services</h3>
        <div className="services-grid">
          <div className="service-item">
            <div className="service-image-container">
              <img
                src={carouselImages[currentImageIndex]}
                alt="Interior Design Services"
                className="service-image"
              />
              <div className="service-navigation">
                <button className="nav-arrow left" onClick={prevImage}>←</button>
                <button className="nav-arrow right" onClick={nextImage}>→</button>
              </div>
              <div className="carousel-indicators">
                {carouselImages.map((_, index) => (
                  <span
                    key={index}
                    className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
            <h4 className="service-name">Full-Service Interior Design</h4>
            <p className="service-description">
              A collaborative approach to creating exceptional spaces. From
              concept to completion, we handle every detail to create spaces
              that are both beautiful and functional.
            </p>
            <Link to="/blog">
              <button className="secondary-button">Learn More</button>
            </Link>
          </div>
          <div className="featured-project">
            <img src={image3} alt="Featured interior space" className="featured-image land2-image" />
          </div>
        </div>
      </section>

      <section className="recent-work-section">
        <div className="recent-work-image">
          <img src={image2} alt="Recent interior design work" />
        </div>
        <Link to="/portfolio">
          <div className="recent-work-overlay">
            <div className="recent-work-cta">
              <h3 className="recent-work-title">View Recent Work</h3>
              <div className="arrow-icon">→</div>
            </div>
          </div>
        </Link>
      </section>

      <section className="about-section">
        <div className="about-content">
          <h3 className="section-title">About Us</h3>
          <p className="about-description">
            At Ten Interiors, we believe that great design should be both beautiful 
            and functional. Our team of skilled designers combines creativity 
            and expertise to create spaces that reflect your personal style and 
            enhance your daily life.
          </p>
          <Link to="/about">
            <button className="secondary-button">Read More</button>
          </Link>
        </div>
        <div className="about-images">
          <img src={image4} alt="Interior design magazine" className="about-image" />
          <img src={image1} alt="Interior decoration item" className="about-image" />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
