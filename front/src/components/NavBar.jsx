import { useState } from 'react';
import './Navbar.css';
import Logo from "../assets/Logo.png";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleNav = () => {
        setOpen(!open);
    };

    return (
        <nav className="navbar">
            <div className="navlogo">
                <img src={Logo} className="navLogo" alt="Invento_Logo" />
            </div>
            <div className="hamburger" onClick={toggleNav}>
                <div className={open ? 'line line1 toggle' : 'line line1'}></div>
                <div className={open ? 'line line2 toggle' : 'line line2'}></div>
                <div className={open ? 'line line3 toggle' : 'line line3'}></div>
            </div>
            <ul className={open ? 'nav-links open' : 'nav-links'}>
                {['Home', 'Rulebook', 'Map', 'Contact'].map((text, index) => (
                    <li key={index}>
                    <a href={text === 'Home' ? '/' : `/${text.toLowerCase()}`}>{text}</a>
                    </li>
                ))}
            </ul>

        </nav>
    );
};

export default Navbar;