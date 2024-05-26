import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="navbar" onClick={toggleNavbar}>
        <div className="navbar-toggle" >
        {!isOpen &&(<CiMenuFries size={40} color="white"/>)}  
        </div>

      {isOpen &&
           (
            <div className="menu_box">
             <div className="close_cross" onClick={toggleNavbar}><TfiClose color="white" size={40}/></div>
            <ul className='navbar-links' id="navbar-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        </div>
           )
      }
        
      </div>
    </div>
  );
};

export default MyNavbar;
