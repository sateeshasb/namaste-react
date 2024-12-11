import {LOGO_URL} from "../utils/constant";
import { useState } from "react";

const Header = () => {
 const [btnNameReact, setbtnNameReact] = useState("login");

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Cart</li>
            <button className="login"
             onClick={()=>{
              btnNameReact== "login" 
              ? setbtnNameReact("logout")
              : setbtnNameReact(" login");

             }}
             >
             {btnNameReact}
              </button>

          </ul>
        </div>
      </div>
    );
  };

  export default Header;