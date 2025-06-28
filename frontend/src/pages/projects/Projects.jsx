import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Card from "./Card";
import "./project.css";

const Typewriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < words[index].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + words[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }

    if (charIndex === words[index].length) {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % words.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, index, words]);

  return <span className="typewriter-text">{displayText}</span>;
};

const Projects = () => {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const typewriterWords = [
    "Kitchen",
    "Bedroom",
    "Dining",
    "Study",
    "Living",
  ];

  const projectsData = [
    {
      id: 1,
      title: "Bridgestone Lane",
      image: "src/assets/Image/interior1.jpg",
      link: "/project-details/1",
    },
    {
      id: 2,
      title: "Etobicoke",
      image: "src/assets/Image/interior3.jpg",
      meta: "MAIN FLOOR RENOVATION, FURNISHING & INTERIOR STYLING",
      link: "/project-details/2",
    },
    {
      id: 3,
      title: "High Park",
      image: "src/assets/Image/interior5.jpg",
      link: "/project-details/3",
    },
    {
      id: 4,
      title: "West Avenue",
      image: "src/assets/Image/interior2.jpg",
      comingSoon: "COMING SUMMER 2025",
      link: "/project-details/4",
    },
    {
      id: 5,
      title: "Craighleith",
      image: "src/assets/Image/interior4.jpg",
      meta: "FULL HOME RENOVATION, FURNISHING & INTERIOR STYLING",
      link: "/project-details/5",
    },
    {
      id: 6,
      title: "Scotia House",
      image: "src/assets/Image/interior6.jpg",
      comingSoon: "COMING WINTER 2025",
      link: "/project-details/6",
    },
  ];

  return (
    <div className="projects-container">
      <section className="hero">
        <div className="hero-image-container">
          <img
            src="https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Interior Design"
            className="hero-image"
            loading="eager"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="hero-heading">
              <span className="hero-heading-main">Where Dreams</span>
              <span className="hero-heading-accent">Meet Design</span>
            </h1>
            
            <div className="hero-subtext">
              <p className="hero-tagline">Crafting Luxurious Spaces</p>
              <p className="hero-description">Experience the Art of Interior Excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="intro">
        <h2 className="intro-heading">Projects Portfolio</h2>
        <p className="intro-text">
          With notes of unpretentious sophistication and tasteful textural
          touches, each featured interior production epitomizes our style
          while paying homage to the primary functions of the space.
        </p>
        
        <div className="typewriter-container">
          <span className="typewriter-prefix">Interior Projects:</span>
          <Typewriter words={typewriterWords} />
        </div>
      </section>

      <section className="projects">
        {projectsData.map((project, index) => (
          <Link key={project.id} to={project.link} className="project-item">
            <motion.div
              className="project-image-container"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className={loadedImages[project.id] ? "loaded" : ""}
                onLoad={() => handleImageLoad(project.id)}
              />
              {project.comingSoon && (
                <div className="coming-soon-tag">{project.comingSoon}</div>
              )}
            </motion.div>
            
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              {project.meta && <div className="project-meta">{project.meta}</div>}
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Projects;