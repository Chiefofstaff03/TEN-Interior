import "./NavBar.css";
import Button from "./Button";
import { useState } from "react";

const items = ["home", "blogs", "projects", "about", "contact"];

const Links = () => {
  return (
    <div className="links">
      {items.map((item) => (
        <a href={`/${item}`} key={item}>
          {item.toUpperCase()}
        </a>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="bg">
        <Links />
      </div>
      <Button setOpen={setIsOpen} />
    </div>
  );
};

export default Navbar;
