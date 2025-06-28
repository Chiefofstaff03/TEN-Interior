import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-div">
      <div className="footer-content">
        <div className="footer-nav">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/blog">BLOG</Link>
          <Link to="/portfolio">PORTFOLIO</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
        
       <div className="footer-tagline">
          <h2>
            {"Artfully CONSIDERED".split("").map((char, index) => (
               <span key={index}>{char === " " ? "\u00A0" : char}</span>
            ))}
          </h2>
          <div className="spaces">S&nbsp;P&nbsp;A&nbsp;C&nbsp;E&nbsp;S</div>
       </div>

        
        <div className="copyright">
          © TEN Interior 2025 • Noida, Uttar Pradesh
        </div>
        <div className="credits">
           <a href="mailto:info@entrepreneurshipnetwork.net">info@entrepreneurshipnetwork.net</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;