import "./NavBar.css";
import Button from "./Button";
import { motion } from "framer-motion";
import { useState } from "react";


const linkVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const sidebarVariants = {
  open: {
    x: "0%", 
    transition: {
      type: "stiff",
      stiffness: 80,
    },
  },
  closed: {
    x: "100%", 
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 50,
    },
  },
};

const navItems = ["HOME", "ABOUT", "BLOG", "PORTFOLIO", "CONTACT"];

const Links = () => {
  return (
    <motion.div className="links" variants={linkVariants}>
      <h2 className="logo">TEN INTERIORS</h2>
      {navItems.map((item) => (
        <motion.a href={`/${item.toLowerCase()}`} key={item} variants={itemVariants}>
          {item}
        </motion.a>
      ))}
      <div className="consult-button">
        <a href="#schedule">SCHEDULE A CONSULT</a>
      </div>
      <div className="social-icons">
        <a href="#instagram" className="instagram-icon"></a>
      </div>
    </motion.div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="sidebar"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div className="bg" variants={sidebarVariants}>
        <Links />
      </motion.div>
      <Button setOpen={setIsOpen} />
    </motion.div>
  );
};

export default Navbar;