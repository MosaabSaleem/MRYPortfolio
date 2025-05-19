import "./Styles/Home.css";
import CookiesExample from "./Assets/CookiesExample.png";
import ElectricityExample from "./Assets/ElectricityExample.png";
import CodeExample from "./Assets/CodeExample.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleEnquireClick = () => {
    navigate("/contact");
  };

  const handleImageClick = () => {
    navigate("/projects");
  };

  return (
    <div className="home">
      <div className="homeTitleContainer">
        <h1 className="homeTitle">Turning Your <span className="titleHighlight">Ideas </span>Into Reality</h1>
        <button className="homeEnquireButton" onClick={handleEnquireClick}>Enquire Now</button>
      </div>
      <p className="homeText">Explore some of our projects or contact us now!</p>

      <div className="imageDeck" onClick={handleImageClick}>
        <div className="imageCard">
          <img src={CookiesExample} alt="Project 1"/>
        </div>
        <div className="imageCard">
          <img src={ElectricityExample} alt="Project 2"/>
        </div>
        <div className="imageCard">
          <img src={CodeExample} alt="Project 3"/>
        </div>
      </div>
    </div>
  );
}

export default Home;