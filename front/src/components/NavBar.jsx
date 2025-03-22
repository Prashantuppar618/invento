import './Navbar.css';
import Logo from "../assets/Logo.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navlogo">
                <img src={Logo} className="navLogo" alt="Invento_Logo" />
            </div>
            <ul className="nav-links">
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
