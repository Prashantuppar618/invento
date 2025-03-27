import { useState } from 'react';
import './Navbar.css';
import Logo from "../assets/Logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { text: 'Home', path: '/' },
        { text: 'Rulebook', path: '/rulebook' },
        { text: 'Contact', path: '/contact' }
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-brand">
                <img src={Logo} className="navLogo" alt="Invento Logo" />
            </div>
            
            <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <a 
                            href={item.path}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;