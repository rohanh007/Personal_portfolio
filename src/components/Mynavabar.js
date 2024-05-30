import React , { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);   };
  

   return(   <div>
      <div className="navbar" >
       {!isOpen && (<div className="navbar-toggle" onClick={toggleNavbar}>           {!isOpen && (<CiMenuFries size={40} color="black" />)}         </div>
       )}
        {/* <div className="navbar-toggle" onClick={toggleNavbar}>           {!isOpen && (<CiMenuFries size={40} color="white" />)}         </div> */}
        
        {isOpen &&
          (
            <div>
            <div className="menu_box">
            <div className="close_cross" onClick={toggleNavbar}><TfiClose color="white" size={40} /></div>
              <div className="mennu_items_box">
                <ul className='navbar-links' id="navbar-links">
                   <li><a href="#home" >Home</a></li>
                   <li><a href="#about" >About</a></li>
                   <li><a href="#experiance">Experiance</a></li>
                   <li><a href="#techonology" >TechStack</a></li>
                   <li><a href="#project">Projects</a></li>
                   <li><a href="#contactme">Contact</a></li>
                   {/* <li><a href="#contactme">Contact</a></li> */}
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
