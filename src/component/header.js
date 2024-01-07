import { useEffect, useState } from "react";
import {APP_LOGO} from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    
    const [loginbtn, setLoginBtn] = useState("Login");

    // in case of no dependency array -> useEffect is called at every render cycle
    // in case of empty dependency array -> it is called only at first render cycle
    // in case of a argument is provided in dependency array -> it is called at every change of that state variable
    // useEffect(() => {console.log("use effect is called at every render")}, []);
    
    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={APP_LOGO}/>
        </div>
        <div className="nav-items">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/aboutus'>About Us</Link></li>
                <li><Link to='/contactus'>Contact Us</Link></li>
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