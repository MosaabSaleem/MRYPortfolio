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
      <p className="AboutText">At <b>MRY</b>, we believe every business deserves a digital presence that <b>stands out</b>. Our mission is simple: to craft custom websites that <b>elevate, grow, and modernise businesses</b>.</p>
      <p className="AboutText">We are a team of <b>passionate and skilled software engineers</b>, united by a love for technology and design. Our team consists of <b>qualified engineers</b> with education from prestigious universities like UTS, combined with hands-on experience from working on diverse projects across a range of industries.</p>
      <p className="AboutText">Whether you’re a startup ready to make your mark or an established business looking to grow, MRY is here to <b>bring your vision to life</b>.</p>
      <p className="AboutText"><b>What makes us different?</b></p>
      <ul className="AboutList">
        <li className="AboutListItem"><b>Tailored website solutions</b> – We don’t believe in templates. Every design is custom-built to reflect your unique brand.</li>
        <li className="AboutListItem"><b>User-first approach</b> – We create intuitive, engaging websites that keep visitors coming back.</li>
        <li className="AboutListItem"><b>Cutting-edge technology</b> – From responsive design to SEO optimization, we use the latest tools to keep your site ahead of the curve.</li>
        <li className="AboutListItem"><b>Collaborative process</b> – We work closely with you every step of the way, ensuring your voice is heard and your goals are met.</li>
      </ul>
      <p className="AboutText">Ready to take your business to the next level? Let’s build something amazing together.</p>
      <button className="homeEnquireButton" onClick={handleEnquireClick}>Enquire Now</button>
    </div>
  );
}