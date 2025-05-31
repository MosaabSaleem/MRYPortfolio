import "./Styles/About.css";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const handleEnquireClick = () => {
    navigate("/contact");
  };

  return (
    <div className="About">
      <h1 className="AboutTitle">About Us</h1>
      <p className="AboutText">At MRY, we believe every business deserves a digital presence that stands out. Our mission is simple: to craft custom websites that elevate brands, drive growth and modernise businesses.</p>
      <p className="AboutText">We’re a team of creative thinkers, problem-solvers, and tech enthusiasts united by a passion for designing impactful online experiences. Whether you’re a startup looking to make your mark or an established business ready to grow, MRY is here to bring your vision to life.</p>
      <p className="AboutText">Contact us today to learn more about how we can help you achieve your online goals!</p>
      <button className="homeEnquireButton" onClick={handleEnquireClick}>Enquire Now</button>
    </div>
  );
}