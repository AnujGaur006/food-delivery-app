import { useEffect, useState } from "react";
import {APP_LOGO} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineFeature from "../utils/useOnlineFeature";

const Header = () => {
    
    const [loginbtn, setLoginBtn] = useState("Login");

    // in case of no dependency array -> useEffect is called at every render cycle
    // in case of empty dependency array -> it is called only at first render cycle
    // in case of a argument is provided in dependency array -> it is called at every change of that state variable
    // useEffect(() => {console.log("use effect is called at every render")}, []);
    
    const isOnline = useOnlineFeature();

    return (
    <div className="header flex justify-between items-center border-4 border-black border-solid shadow-lg">
        <div className="logo-container">
            <img className="logo w-44" src={APP_LOGO}/>
        </div>
        <div className="nav-items p-2.5">
            <ul className="flex justify-end">
                <h1 className="m-2.5 p-1.5">Online Status:{isOnline===true?"✅":"🟥"}</h1>
                <li className="m-2.5 p-1.5"><Link to='/'>Home</Link></li>
                <li className="m-2.5 p-1.5"><Link to='/aboutus'>About Us</Link></li>
                <li className="m-2.5 p-1.5"><Link to='/contactus'>Contact Us</Link></li>
                <li className="m-2.5 p-1.5"><Link to='/grocery'>Grocery</Link></li>
                <li className="m-2.5 p-1.5">Cart</li>
                <button className="login" onClick={() => {
                    loginbtn === 'Login'? setLoginBtn("Logout") : setLoginBtn("Login");
                }}>{loginbtn}</button>
            </ul>
        </div>
    </div>
);
};

export default Header;