import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleNav = () => {
        setOpen(!open);
    };

    return (
        <nav className="navbar">
            <div className="navlogo">
                <img alt="Logo"/>
            </div>
            <div className="hamburger" onClick={toggleNav}>
                <div className={open ? 'line line1 toggle' : 'line line1'}></div>
                <div className={open ? 'line line2 toggle' : 'line line2'}></div>
                <div className={open ? 'line line3 toggle' : 'line line3'}></div>
            </div>
            <ul className={open ? 'nav-links open' : 'nav-links'}>
                {['Home', 'Rulebook', 'Events', 'Contact', 'Developers'].map((text, index) => (
                    <li key={index}><a href="#">{text}</a></li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;