import { useState } from "react";
import {APP_LOGO} from "../utils/constants";

const Header = () => {
    
    const [loginbtn, setLoginBtn] = useState("Login");
    
    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={APP_LOGO}/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login" onClick={() => {
                    loginbtn === 'Login'? setLoginBtn("Logout") : setLoginBtn("Login");
                }}>{loginbtn}</button>
            </ul>
        </div>
    </div>
);
};

export default Header;