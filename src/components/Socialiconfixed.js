import { FaGithub, FaInstagram, FaLinkedinIn, FaCodepen } from "react-icons/fa";


const Socialiconfixed = () => {
    return (
        <div className="social-menu">
            <ul>
                <li><a href="https://github.com/sanketbodke" target="_blank"><FaGithub className="fab"/></a></li>
                <li><a href="https://www.instagram.com/imsanketbodke/" target="_blank"><FaInstagram className="fab"/></a></li>
                <li><a href="https://www.linkedin.com/in/sanket-bodake-995b5b205/" target="_blank"><FaLinkedinIn className="fab"/></a></li>
                <li><a href="https://codepen.io/sanketbodke" target="_blank"><FaCodepen className="fab"/></a></li>
            </ul>
        </div>
    );
}

export default Socialiconfixed;

