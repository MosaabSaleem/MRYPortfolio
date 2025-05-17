import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "../Styles/NavBar.css";
import MRYLogo from "../Assets/MRYLogoNavbar.png";

export default function NavBar() {

    const handleContactClick = () => {
        // Logic to handle contact button click
        // For example, you can navigate to the contact page or open a modal
        console.log("Contact button clicked");
    }
    const handleAboutClick = () => {
        // Logic to handle about button click
        console.log("About button clicked");
    }

    const handleProjectsClick = () => {
        // Logic to handle projects button click
        console.log("Projects button clicked");
    }

    return (
        <nav className="navbar">
            <div className="navbarlogo">
                <Link to="/">
                    <img className="navbarlogoimage" src={MRYLogo}></img>
                </Link>
            </div>
            <div className="navlinks">
                <Link to="/about" className="navlink">About us</Link>
                <Link to="/projects" className="navlink">Projects</Link>
                <Link to="/contact" className="navlink">Contact</Link>
            </div>
        </nav>
    );
}
