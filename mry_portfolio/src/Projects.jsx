import "./Styles/Projects.css";
import Cookies from "./Assets/CookiesExample.png";
import ComingSoon from "./Assets/ComingSoon.png";
import Appointment from "./Assets/appointmentPic.png";

export default function Projects() {
    return (
        <div className="Projects">
          {/* <div className="ProjectTitleContainer"> */}
            <h1 className="ProjectsTitle">Our Projects</h1>
            <p className="ProjectsSubTitle">Explore some of our projects below.</p>
          {/* </div> */}
            
          <div className="ProjectsList">
            <a href="https://wonderful-dune-016b4c61e.6.azurestaticapps.net/" target="_blank" rel="noopener noreferrer">
              <div className="ProjectCard">
                <div className="ProjectCardleft">
                  <img src={Cookies} alt="Project 1" className="ProjectCardImage" />
                </div>
                <div className="ProjectCardRight">
                  <h2 className="ProjectCardTitle">Local Cookie Shop</h2>
                  <p className="ProjectDescription">Online shop for a local cookie businesses. Straight to the point, it allows for an easy customer experience and accepts payments for you!</p>
                </div>
              </div>
            </a >
            <a href="https://lemon-desert-0576aac1e.2.azurestaticapps.net/" target="_blank" rel="noopener noreferrer">
              <div className="ProjectCard">
                <div className="ProjectCardleft">
                  <img src={Appointment} alt="Project 2" className="ProjectCardImage" />
                </div>
                <div className="ProjectCardRight">
                  <h2 className="ProjectCardTitle">Doctor Booking Site</h2>
                  <p className="ProjectDescription">Site built for a general doctor. Allows users to book appointments online through the Calendly API. Also gives vital information about the doctor.</p>
                </div>
              </div>
            </a>
            <a href="https://github.com/MosaabSaleem?tab=repositories" target="_blank" rel="noopener noreferrer">
              <div className="ProjectCard">
                <div className="ProjectCardleft">
                  <img src={ComingSoon} alt="Project 3" className="ProjectCardImage" />
                </div>
                <div className="ProjectCardRight">
                  <h2 className="ProjectCardTitle">Project 3</h2>
                  <p className="ProjectDescription">Description of Project 3.</p>
                </div>
              </div>
            </a>
              <a href="https://github.com/MosaabSaleem?tab=repositories" target="_blank" rel="noopener noreferrer">
                <div className="ProjectCard">
                  <div className="ProjectCardleft">
                    <img src={ComingSoon} alt="Project 4" className="ProjectCardImage" />
                  </div>
                  <div className="ProjectCardRight">
                    <h2 className="ProjectCardTitle">Check Upcoming Projects</h2>
                    <p className="ProjectDescription">We're always working on projects to display and improve or skills. Stay on the lookout and check us out on Github!</p>
                  </div>
                </div>
              </a>
            </div>
        </div>
    );
}