import "./Styles/Contact.css";
import AustraliaIcon from "./Assets/australiaIcon.png";
import CleanIcon from "./Assets/cleanIcon.png";
import ReplyIcon from "./Assets/ReplyIcon.png";

export default function Contact() {
    return (
        <div className="Contact">
          <h1 className="ContactTitle">Let's Get In Touch</h1>
          <div className="ContactContainer">
            <div className="ContactLeft">
              <p className="ContactText">Contact us today to book a call and discuss your project. We'll tailor a site suitable for you and your business.</p>
              <div className="ContactIcons">
                <div className="ContactIcon">
                  <img src={CleanIcon} alt="Clean Icon" className="ContactIconImage"/>
                  <p className="ContactIconText">Clean Custom Code </p>
                </div>
                <div className="ContactIcon">
                  <img src={AustraliaIcon} alt="Australia Icon" className="ContactIconImage"/>
                  <p className="ContactIconText">Based in Australia</p>
                </div>
                <div className="ContactIcon">
                  <img src={ReplyIcon} alt="Reply Icon" className="ContactIconImage"/>
                  <p className="ContactIconText">Fast Replies</p>
                </div>
              </div>
            </div>
            <div className="ContactMiddleLine"></div>
            <div className="ContactRight">
              {/* <p className="ContactText">Contact us to get started!</p> */}
              <p className="ContactText">0412345678</p>
              <p className="ContactText">MRYWebDevelopment@outlook.com</p>
            </div>
          </div>
        </div>
    );
}