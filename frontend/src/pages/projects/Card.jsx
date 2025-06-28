import React, { useState } from "react";
import "./project.css";

const Card = ({ image, title, description }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article className="card">
      <figure className="card-image-container">
        <div className={`image-placeholder ${imageLoaded ? 'hidden' : ''}`}></div>
        <img 
          src={image} 
          alt={title} 
          className={`card-image ${imageLoaded ? 'visible' : ''}`}
          loading="lazy"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
        />
      </figure>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </article>
  );
};

export default Card;