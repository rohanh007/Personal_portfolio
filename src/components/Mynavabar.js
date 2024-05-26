import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <HiMenuAlt4/>
        </div>

      {isOpen &&
           (
            <ul className='navbar-links' id="navbar-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
           )
      }
        
      </div>
    </div>
  );
};

export default MyNavbar;
