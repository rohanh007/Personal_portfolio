import { FaGithub, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const Socialiconfixed = () => {
    return (
        
            <div className="social-menu">
            {/* <p className="web_white_color" style={{ fontSize: '20px' }}>
                Feel free to <span className="web-text-color">connect </span>with me
            </p> */}
                <ul>
                    <li><a href="https://github.com/rohanh007" target="_blank"><FaGithub className="fab" /></a></li>
                    {/* <li><a href="https://www.instagram.com/imsanketbodke/" target="_blank"><FaInstagram className="fab" /></a></li> */}
                    <li><a href="https://www.linkedin.com/in/rohan-hoval-1163211ab/" target="_blank"><FaLinkedinIn className="fab" /></a></li>
                    <li><a href="https://leetcode.com/u/rohanhoval/" target="_blank"><SiLeetcode className="fab" /></a></li>
                </ul>
            </div>
       
    );
}

export default Socialiconfixed;

