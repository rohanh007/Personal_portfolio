import { Link } from "react-router-dom";
import github from '../Assets/SVG/github-original.svg';
import '../Assets/CSS/socialicon.css';
const Socialicons=()=>{
 return (
    
        <div class="social">
             <Link to={""}>
                 <div class="social-btn color-telegram">
                     <div class="icons8-telegram-app"><img src={github}/></div>
                     <p class="order-1 google-font margin-telgram">Github</p>
                 </div>
             </Link>
    </div>
 )
}

export default Socialicons ;