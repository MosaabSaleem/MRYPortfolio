import { Link } from "react-router-dom";
import "../Styles/NavBar.css";
import MRYLogo from "../Assets/MRYLogoNavbar.png";

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbarlogo">
                <Link to="/">
                    <img className="navbarlogoimage" src={MRYLogo} alt="MRY Logo"></img>
                </Link>
            </div>
            <div className="navlinks">
                <Link to="/contact" className="navlink">Contact</Link>
                <Link to="/projects" className="navlink">Projects</Link>
                <Link to="/about" className="navlink">About us</Link>
            </div>
        </nav>
    );
}
