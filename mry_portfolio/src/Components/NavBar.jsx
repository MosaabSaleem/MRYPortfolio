import { Link } from "react-router-dom";
import "../Styles/NavBar.css";

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to="/">My Portfolio</Link>
            </div>
            <div className="navlinks">
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}
