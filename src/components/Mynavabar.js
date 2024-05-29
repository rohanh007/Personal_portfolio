import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
const MyNavbar = ({onclickmenu}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  


  return (
    <div>
      <div className="navbar" >
        <div className="navbar-toggle" onClick={toggleNavbar}>
          {!isOpen && (<CiMenuFries size={40} color="white" />)}
        </div>
        
        {isOpen &&
          (
            <div>
            <div className="menu_box">
            <div className="close_cross" onClick={toggleNavbar}><TfiClose color="white" size={40} /></div>
              <div className="mennu_items_box">
                <ul className='navbar-links' id="navbar-links">
                  <li><a href="#" onClick={()=>onclickmenu('home')}>Home</a></li>
                  <li><a href="#" onClick={()=>onclickmenu('about')}>About</a></li>
                  <li><a href="#" onClick={()=>onclickmenu('projects')}>Projects</a></li>
                  <li><a href="#" onClick={()=>onclickmenu('contact')}>Contact</a></li>
                </ul>
              </div>
            </div>
            </div>

          )
        }

      </div>
    </div>
  );
};

export default MyNavbar;
