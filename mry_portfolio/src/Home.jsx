import "./Styles/Home.css";
import CookiesExample from "./Assets/CookiesExample.png";
import ElectricityExample from "./Assets/ElectricityExample.png";
import CodeExample from "./Assets/CodeExample.png";
import PCIcon from "./Assets/PCIcon.png";
import CubeIcon from "./Assets/cubeIcon.png";
import CodeIcon from "./Assets/CodeIcon.png";
import heroImage from "./Assets/MRYLogo2Light.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();

  const handleEnquireClick = () => {
    navigate("/contact");
  };

  const handleImageClick = () => {
    navigate("/projects");
  };

  useEffect(() => {
    const titleElement = document.querySelector(".homeTitle");
    if (titleElement) {
      titleElement.classList.add("loaded");
    }
  }, []);

  return (
    <div className="home">
      <div className="heroPage">
        <div className="heroLeft">
          {/* <div className="homeTitleContainer"> */}
          <h1 className="homeTitle">Websites That <span className="titleUnderline">Elevate </span> Your <span className="titleHighlight">Business</span></h1>
          <button className="homeEnquireButton" onClick={handleEnquireClick}>Enquire Now</button>
          {/* </div> */}
          <div className="scrollPrompt">
            <span className="scrollText">Scroll For More</span>
            <div className="scrollArrow">
              <p>V</p>
            </div>
          </div>  
        </div>
        <div className="heroMiddleLine">

        </div>
        <div className="heroRight">
          <img src={heroImage} className="heroImage" alt="MRY Logo"/>
        </div>
      </div>
      <div className="homeContent">
        <div className="homeContentLeft">
          <img src={CodeIcon} className="homeLeftIcon" alt="Project 3"/>
        </div>
        <div className="homeContentMiddle">
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
        <div className="homeContentRight">
          <img src={CubeIcon} className="homeRightIcon" alt="Project 3"/>
          <img src={PCIcon} className="homeLeftIcon" alt="Project 3"/>
        </div>
      </div>
    </div>
  );
}

export default Home;