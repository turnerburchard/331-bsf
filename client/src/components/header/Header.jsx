import './header.css'
import {NavLink} from "react-router-dom";

const Header = () => {

    return (
        <header>
            <li id="head" className={"navLink"}>
                <ul><NavLink to={"/"}>Home</NavLink></ul>
                <ul><NavLink to={"/contact"}>Contact</NavLink></ul>
            </li>
        </header>
    )
}

export default Header;
